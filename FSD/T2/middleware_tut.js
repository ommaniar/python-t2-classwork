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


