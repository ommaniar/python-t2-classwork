
// write a express js script to set cookies of submitted values of the form perform the following taks
/**
 * 1. create an html file whcih conatins a form with fields fname lname and password.
 * 2. once form is submitted, store all this entered values to respective cookies on next page.
 * 3. Redirect user to admin page and clear the cookies set for the last name.
 * 4. display remaining set cookies value on this page (using post method only). 
 */

const express = require("express");
const app = express();
const cp = require("cookie-parser");

app.use(cp())
app.use(express.urlencoded({extended:false}));

app.use(express.static(__dirname,{index:"./form.html"}));

app.post("/process",(req,res)=>{
    q = req.body;
    res.cookie("fname",q.fname);
    res.cookie("lname",q.lname);
    res.cookie("password",q.password);
    res.redirect("/admin");
})

app.get("/admin",(req,res,next)=>{
    res.clearCookie("lname");
    next()
},(req,res)=>{
    let cookies = req.cookies;
    res.send(cookies);

})



app.listen(3000,()=>{
    console.log(`app running in http://localhost:3000`)
})

// you have been assigned to develop a user feedback form for the website using express, js and cookies. Implement the following requirements:
/**
 * 1. create a form with the following feed. 
 *  a. name (email) b. email (email) c. message (textarea) d. rating (radio) trash, bad, average, good, excellent
 * 2. when the user submit the form, store thier feedback information. Name, email, message, rating in a cookie named feedback that expires in 10 secodns
 * 3. display a confirmation message to the user after successfully submitting the form and create a link that displays the feedback details stored in the feedback cookie.
 * 4. when the user click to the link retrieve the info from cookkie and dsiplay in the page that also includes the link feedback details page to logout.
 * 5. when the user clicks the logout link it should redirect to home page.
 */