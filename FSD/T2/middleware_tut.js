express = require("express");
app = express();

const cb = (req,res,next)=>{
    console.log("initialized");
    res.set("content-type","text/html");
    res.write("<strong>First</strong>");
    next();
}

const cb1 = (req,res,next)=>{
    res.write("<p>Adding of 5 + 5 " + (5+5) + "</p>");
    next();
}

app.use('/ee',cb,cb1);

app.get('/ee',(req,res)=>{
    res.write("<h1>Hello World</h1>");
    res.send();
})

app.use("/",(req,res,next)=>{
    console.log("initialized");
    res.set("content-type","text/html");
    res.write("<strong>First</strong>");
    next();
},(req,res,next)=>{
    res.write("<p>Adding of 5 + 5 " + (5+5) + "</p>");
    next();
},(req,res)=>{
    res.write("<h1 style='color:tomato'>Hello World</h1>");
    res.send();
})

app.listen(3000);

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
