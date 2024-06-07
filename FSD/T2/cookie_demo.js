const express = require("express");
const app = express();
const cp = require("cookie-parser");

app.use(cp());
app.get("/cookie",(req,res)=>{
    res.cookie("name","expressJS");
    res.cookie("fname","Ezio");
    res.cookie("lname","Aduitore");
    res.cookie("ID","2",{expires:new Date(Date.now() + 10000)});
    res.clearCookie("lname");
    const cookies = req.cookies;
    res.send(cookies);
})


app.listen(3000,()=>{
    console.log(`app running in http://localhost:3000`)
})
