
const multer = require("multer");
const path = require("path")
const {GridFsStorage} = require("multer-gridfs-storage");
require('dotenv').config()


const storage = new GridFsStorage({url: process.env.DB,
file:(req,file)=>{
    console.log("**reqfile**=",Date.now()+file.originalname)
    const filename=`${Date.now()}`+file.originalname
    return {
        filename:filename,
        buketName:"uploads"
    }
}})

const upload = multer({storage})

module.exports=upload