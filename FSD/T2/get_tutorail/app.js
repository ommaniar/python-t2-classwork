const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.sendFile(__dirname+ "/index.html");
})
app.get("/process-get",(req,res)=>{
    response = {
        fname: req.query.fname,
        lname: req.query.lname
    };
    console.log(response);
    res.send(response);
})
app.listen(3000,()=>{
    console.log("App running at http://localhost:3001");
});




