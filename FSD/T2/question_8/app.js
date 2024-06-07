// Write express js script to perform following tasks.
// 1. Create one html file which contains one text field for name, email field and checkbox for subscription. 
// Html file will be loaded on home page. Email and name fields are required fields.
// 2. On login page welcome user and email id data should be printed.
// a. If user checked the subscription then “Thank you for the subscription” message will be printed 
// and “logout” link will be displayed under the message. If user clicks logout link then he/she will 
// be redirected to the home page.
// b. If user has not opted for the subscription then “You can subscribe to get daily updates” message 
// will be printed and “subscribe” link will be displayed under the message. If user clicks subscribe 
// link then he/she will be redirected to the subscription page. In this page “Thank you for the 
// subscription” message will be printed and “logout” link will be displayed under the message. If 
// user clicks logout link then he/she will be redirected to the home page.
// Use concept of the middleware and you can use any of http methods(get/post).

const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));

app.use(express.static(__dirname,{index:"form.html"}));

app.post("/login",(req,res,next)=>{
    console.log(req.body);
    q = req.body.email;
    res.write(`<p>Welcome User ${q}</p>`);
    if(req.body.subscribe){
        res.write("<p>Thank you for subscription</p>");
    }else{
        res.write("<p>You can subscribe to daily message</p>");
        res.write("<a href='/subscribe'>Ckick here to subscribe</a><br>")
    }
        next();
});

app.post("/login",(req,res)=>{
    res.write(`<a href='/'>logout</a>`);
    res.send()
});


app.get("/subscribe",(req,res)=>{
    res.write("<p>You have successfully subscribed</p>")
    res.write(`<a href='/'>logout</a>`);
    res.send();
});


app.listen(3000,()=>{
    console.log(`app running in http://localhost:3000`)
})