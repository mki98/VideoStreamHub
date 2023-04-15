const express = require("express");
const path = require('path')
const app = express();
const mongoose = require("mongoose");
const appRouter = require("./router/appRoutes");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const Grid = require("gridfs-stream")







app.use(cors());
app.options('*',cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
const DB = process.env.DB;

mongoose.connect(DB,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("DB connected...")
})

// mongoose.connection.once('open', function () {
//   var gfs = Grid(mongoose.connection.db, mongoose.mongo);
//   gfs.collection("uploads")
// })



app.use("/", appRouter);

app.listen(8000, () => {
  console.log("server is running...");
});
