// write a express js script to print message in next line splitting by "." . Use get method to submit the data. html file contains form of text area for the message and submit button ur html file is in frontend folder and js file is in backend folder
const express = require("express");
const app = express();
const path = require("path");
sn = path.join(__dirname,"../frontend");
app.get("/",(req,res)=>{
    res.sendFile(sn+"/form.html");
})
app.get("/process-get",(req,res)=>{
    res.set("Content-Type","text/html");
    
    res.write(`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">s`)
    msg = req.query.msg.split(".");
    console.log(msg);
    for(i of msg){
        res.write(i + "<br>");
    }
    res.end()
})
app.listen(3000,()=>{
    console.log("App running at http://localhost:3000");
});

// write an express js script to perform task as asked below 
// 1. create one html file which contains two numbers type input fields, one dropdown which contains option like (select, substraction, multiplication, division, addition) and one submit button 
// 2. input fields must contain the value > 0. else it should give a message "Enter Valid number". Also user must select any of the formula from the dropdown else it should give message that you havn't given any formula (message will be displayed on /clac-page)
// 3. if one formula is selected and numbers are entered then respective calculation must be performed for the page /calc-page.
// 4. use get method to request the data.
