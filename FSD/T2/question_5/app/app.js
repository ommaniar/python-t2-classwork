const express = require("express");
var app = express();
const path = require("path");


app.use(express.static((__dirname,"../views"),{index:"home.html"}));

app.use(express.static((__dirname,"../stylesheets")));


app.listen(3000,()=>{
    console.log("http://localhost:3000")
});