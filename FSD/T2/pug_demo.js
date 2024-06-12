var express = require("express")
var app = express()
app.set("view engine","pug");
app.get("/",(req,res)=>{
    res.render(__dirname+"/pug_html");
})

app.listen(3001,()=>{
    console.log("App running at http://localhost:3001");
});