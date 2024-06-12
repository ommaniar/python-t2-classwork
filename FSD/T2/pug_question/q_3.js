// write an express js script to load a student form using pug file which contians: name, email, course (radio) CE CSE IT. Once form is submitted data should be displayed on data page using pug file in table form. 
const expr = require("express");
const app = expr();

app.set("view engine","pug");

app.get("/",(req,res)=>{
    res.render(__dirname+"/form_2");
})

app.get("/data",(req,res)=>{
    q = req.query
    res.render(__dirname+"/data_2",{
        name: q.name,
        email: q.email,
        branch: q.branch
    })
})

app.listen(3001,()=>{
    console.log("App running at http://localhost:3001");
});