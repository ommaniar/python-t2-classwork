const express = require("express");
var app = express();
const path = require("path");

// const sp = path.join();

app.use(express.static((__dirname,"./views"),{index:"home.html"}));

app.listen(3000,()=>{
    console.log("http://localhost:3000")
});