const express = require("express")
const app = express()
app.set("view engine","pug");
app.get("/",(req,res)=>{
    res.render(__dirname+"/question_1");
})
app.get("/data",(req,res)=>{
    q = req.query;
    res.send(`<p>Name: ${q.name}, Email: ${q.email}`);
 //- crete one pug file which contians a text field and an email field. by submitting the form on next page called /data submitted data should be displayed. 
})
app.listen(3001,()=>{
    console.log("App running at http://localhost:3001");
});
