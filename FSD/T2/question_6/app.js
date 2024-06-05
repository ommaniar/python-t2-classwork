// write an express js script to perform task as asked below 
// 1. create one html file which contains two numbers type input fields, one dropdown which contains option like (select, substraction, multiplication, division, addition) and one submit button 
// 2. input fields must contain the value > 0. else it should give a message "Enter Valid number". Also user must select any of the formula from the dropdown else it should give message that you havn't given any formula (message will be displayed on /clac-page)
// 3. if one formula is selected and numbers are entered then respective calculation must be performed for the page /calc-page.
// 4. use get method to request the data.

const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/form.html");
})
app.get("/calc",(req,res)=>{
    res.set("Content-Type","text/html");
    
    res.write(`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`)
    var q = req.query
    var a = parseInt(q.a)
    var b = parseInt(q.b)
    if(a > 0 & b>0){
        if(q.calc == "add"){
            res.write(`Sum: ${a+b}`);
        }else if(q.calc == "sub"){
            res.write(`sub: ${a - b}`);
        }else if(q.calc == "mult"){
            res.write(`mult: ${a * b}`);
        }else if(q.calc == "div"){
            res.write(`div: ${a / b}`);
        }else{
            res.write("Please enter proper function")
        }
    }else{
        res.write("Values must be greater than 0");
    }
 
    res.end()
})
app.listen(3000,()=>{
    console.log("App running at http://localhost:3000");
});