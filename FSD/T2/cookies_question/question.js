// you have been assigned to develop a user feedback form for the website using express, js and cookies. Implement the following requirements:
/**
 * 1. create a form with the following feed. 
 *  a. name (email) b. email (email) c. message (textarea) d. rating (radio) trash, bad, average, good, excellent
 * 2. when the user submit the form, store thier feedback information. Name, email, message, rating in a cookie named feedback that expires in 10 secodns
 * 3. display a confirmation message to the user after successfully submitting the form and create a link that displays the feedback details stored in the feedback cookie.
 * 4. when the user click to the link retrieve the info from cookkie and dsiplay in the page that also includes the link feedback details page to logout.
 * 5. when the user clicks the logout link it should redirect to home page.
 */
const express = require("express");
const app = express();
const cp = require("cookie-parser");

app.use(cp())
app.use(express.urlencoded({extended:false}));

app.use(express.static(__dirname,{index:"./form.html"}));

app.post("/process",(req,res)=>{
    res.set("Content-Type","text/html");
    q = req.body;
    res.cookie("feedback",{name:q.name,email:q.email,message:q.message,rating:q.rating},{expires: new Date(Date.now() + 10000)});
    // res.cookie("name",q.name,{expires:new Date(Date.now() + 10000)});
    // res.cookie("email",q.email,{expires:new Date(Date.now() + 10000)});
    // res.cookie("message",q.message,{expires:new Date(Date.now() + 10000)});
    // res.cookie("rating",q.rating,{expires:new Date(Date.now() + 10000)});
    res.write("<p>Information has beed successfully retrieved</p>")
    res.write(`<a href="/display" class="btn btn-success">Display information</a>`)
    // res.send(cookies);
    res.end()
})
app.get("/display",(req,res)=>{
    let cookies = req.cookies.feedback;
    console.log(cookies)
    if (cookies.feedback){
        res.write(`<p>Name: ${cookies.name}</p>`)
        res.write(`<p>Email: ${cookies.email}</p>`)
        res.write(`<p>message: ${cookies.message}</p>`)
        res.write(`<p>rating: ${cookies.rating}</p>`)


        res.write(`<a href="/" class="btn btn-danger">Logout</a>`)
    }else{
        res.write("<p>Data expierd</p>")
    }
    res.send()

})

app.listen(3000,()=>{
    console.log(`app running in http://localhost:3000`)
})


