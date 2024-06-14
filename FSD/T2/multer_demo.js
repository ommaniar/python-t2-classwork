const multer = require("multer");
const express = require('express');
const app = express();


app.use(express.urlencoded({extended:false}));


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/multer_file.html");
});

var storage = multer.diskStorage({
    destination: "single",
    filename: function(req,file,cb){
        cb(null,`${file.fieldname}_${file.originalname}_${Date.now()}+.png`);
    }
});

var upload = multer({storage: storage});

app.post("/uploadFile",upload.array("pic",5),(req,res)=>{
    const file = req.files;
    for(i of file){
        if(i){
            res.write(`
                <h1>File <span style="color:blue"> ${i.originalname} </span> has been uploaded in <span style="color:tomato"> ${i.destination} </span> folder.
                `);
        }
    }
    res.end();
})
app.listen(3000,()=>{
    console.log(`app running in http://localhost:3000`)
})
/**
 * write an expres js script to configure the multer and perform the following taks
 * 1. Create a pug file named "file.pug". This file contains heading (h3 {uploade you cv} in red color) and Form with input type file and submit button.
 * 2. Create a js file named "file.js" and link this file with pug file to browse on home page. 
 * 3. After uploading a file display a message "File has been uploaded". 
 * 4. Save uploaded file in directory named upload. and in thsi folder file must be stored in format of lju-file.pdf where lju is the field name.
 */