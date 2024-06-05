// write a express js script to perform the taks as asked below.
// 1. create one html file named lj-form.html and add one form which contains username, password and submit button. Data should be submitted by post method only
// 2. submit button is of black colour, background with white text (external css)
// 3. on home page form should be displayed and while submitting the form, our next page named login. If username is admin then it will display a message: "Welcome Admin". Else it should be displayed please login with admin name. (display it with h1 tag with red color)
const path = require("path");
const express = require("express");
const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.static((__dirname,"./styles.css")));
app.use(express.static((__dirname),{index:"index.html"}));
app.post("/login",(req,res)=>{
    response = {
        username: req.body.username,
        password: req.body.password
    };
    res.write(`<link rel="stylesheet" href="./styles.css">`)
    if(response.username == "admin"){
        res.write(`<h1>Hello Welcome ${response.username}</h1>`);
    }else{
        res.write("<h1 style='color:red;'>Please enter valid username</h1>");
    }
    res.send();
})
app.listen(3000,()=>{
    console.log("App running at http://localhost:3000");
    console.log(__dirname);
});
