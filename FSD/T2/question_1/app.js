const express = require("express");
var app = express();
const path = require("path");

const sp = path.join(__dirname);

app.use(express.static(sp,{index:"home.html"}));

app.listen(3000,()=>{
    console.log("http://localhost:3000")
});