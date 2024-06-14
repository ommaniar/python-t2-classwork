const multer = require("multer");
const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));
app.set("view engine","pug");

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/multer_file.html");
});


var storage = multer.diskStorage({
    destination: "specific",
    filename: function(req,file,cb){
        cb(null,`${file.fieldname}_${file.originalname}_${Date.now()}+.pdf`);
    }
});


const filter = (req,file,cb) =>{
    if (file.mimetype == "application/pdf"){
        cb(null,true);
    }else{
        cb(null,false);
        return cb("Only pdf format allowed");
    }
}
// const maxSize = 1024*1024*1024;
var upload = multer({
    storate:storage,
    // limits: {fileSize:maxSize},
    fileFilter:filter
});

app.post("/uploadFile",upload.array("pic",5),(req,res)=>{
    const file = req.files;
    for(i of file){
        if(i){
            res.render(__dirname+"/pug_file",{file:i.originalname})
        }
}});

app.listen(3000,()=>{
    console.log(`app running in http://localhost:3000`)
})