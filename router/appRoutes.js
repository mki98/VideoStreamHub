const express = require('express')
const router = express.Router();
const upload = require('../controllers/uploadControl')
const mongoose= require('mongoose')
const Grid = require("gridfs-stream")
router.get('',(req,res)=>{
    
    res.render('index')
})
router.post('/upload/',upload.single("file"),(req,res)=>{
    console.log("finished upload")
    res.redirect('/')
})
router.get('/watch/',(req,res)=>{
    res.render('video')
})


router.get('/videos/:id',async(req,res)=>{
    
console.log("in req")
    if(req.params.id && mongoose.isValidObjectId(req.params.id)){
    const  objID = new mongoose.Types.ObjectId(req.params.id)
    const vid = await mongoose.connection.collection("fs.files").findOne({_id:objID})
    console.log(vid)
    if(!vid){ 
        return res.status(404).send('<h1 style="color:red;"align="center">404</h1><h1 style="color:red;"align="center">File Not Found</h1>')
    }
    console.log("before wirte")
    const vidSize =vid.length
    const start = Number(req.headers.range.replace(/\D/g,""))
    const end = vidSize-1
    console.log("start=",start,"end=",end)

    const headers ={
        "Content-Range":`bytes ${start}-${end}/${vidSize}`,
        "Accept-Ranges":"bytes",
        "Content-Length": end-start+1,
        "Content-Type":"video/mp4",
    }
    res.writeHead(206,headers)

   var gridfsBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        bucketName: 'fs'
    });
        const readStream = gridfsBucket.openDownloadStream(vid._id,{
            start,
            end:vidSize
        });
//     let gfs=Grid(mongoose.connection.db,mongoose.mongo)
       readStream.pipe(res)
    }
    console.log("before if")    
})
module.exports =router