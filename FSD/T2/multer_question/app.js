/**
 * write an expres js script to configure the multer and perform the following taks
 * 1. Create a pug file named "file.pug". This file contains heading (h3 {uploade you cv} in red color) and Form with input type file and submit button.
 * 2. Create a js file named "file.js" and link this file with pug file to browse on home page. 
 * 3. After uploading a file display a message "Upload page as file.extension has been uploaded". 
 * 4. Save uploaded file in directory named upload. and in thsi folder file must be stored in format of lju-file.pdf where lju is the field name.
 */

const multer = require("multer");
const express = require("express");
const app = express();

app.use(express.urlencoded({extended:false}));

app.set("view engine","pug");

app.get("/",(req,res)=>{
    res.render(__dirname+"/file");
})

var storage = multer.diskStorage(
    {
        destination:"upload",
        filename: function(req,file,cb){
            cb(null, "lju-file.pdf");
        }
    }
)

var upload = multer({
    storage: storage
});

app.post("/uploadPage",upload.array("cv",5),(req,res)=>{
    const file = req.files;
    for (i of file){
        if(i){
            console.log(i)
            res.write(`<p>Upload page as ${i.originalname} has been uploaded</p>`)
        }
    }
    res.end()
})

app.listen(3000,()=>{
    console.log(`app running in http://localhost:3000`)
})

/***
 * Write an express js script that allows only pdf type file to be uploaded usting the multer and saves the file to specific directory called specific.If file other than pdf is uploaded then it will give an error message that onyl pdf format is allowed. Also final output to be displayed in browser through pug file.
 */