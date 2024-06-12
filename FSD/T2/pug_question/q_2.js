const express = require("express")
const app = express()
app.set("view engine","pug");
app.get("/",(req,res)=>{
    res.send(`
        <form action="/data" method="get">
        Name
        <input type="text" name="name"><br>
        Message
        <input type="text" name="message"><br>
        Id
        <input type="text" name="id"><br>
        <input type="submit" class="btn-submit" value="Submit">
    </form>`)
})
app.get("/data",(req,res)=>{
    q = req.query;
    res.render(__dirname+"/question_2",{name:q.name,message:q.message,id:q.id});

    //- crete one pug file which contians a text field and an email field. by submitting the form on next page called /data submitted data should be displayed. 
})
app.listen(3001,()=>{
    console.log("App running at http://localhost:3001");
});
