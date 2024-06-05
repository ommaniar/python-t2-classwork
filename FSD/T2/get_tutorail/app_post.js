const express = require("express");
const app = express();
app.use(express.urlencoded({extended:false}));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+ "/form.html");
})
app.post("/process-get",(req,res)=>{
    response = {
        fname: req.body.username,
        lname: req.body.password
    };
    console.log(response);
    res.send(response);
})
app.listen(3000,()=>{
    console.log("App running at http://localhost:3000");
});




// write a express js script to perform the taks as asked below.
// 1. create one html file named lj-form.html and add one form which contains username, password and submit button. Data should be submitted by post method only
// 2. submit button is of black colour, background with white text (external css)
// 3. on home page form should be displayed and while submitting the form, our next page named login. If username is admin then it will display a message: "Welcome Admin". Else it should be displayed please login with admin name. (display it with h1 tag with red color)