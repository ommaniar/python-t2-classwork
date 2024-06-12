const express = require("express");
const app = express();
const session = require(`express-session`);
app.use(session({
    secret:"This is secret key",
    saveUninitalized: true,
    cookie:{maxAge: 10000},
    resave: false
}))

app.get("/",(req,res)=>{
    if (req.session.views){
        req.session.views++;
        res.send(`<h1 style="color:blue">You have visited ${req.session.views} times</h1>`)
    }else{
        req.session.views= 1;
        res.send(`<h1 style="color:blue">Welcome to the webstie</h1>`)
    }
})


app.listen(3000,()=>{
    console.log(`app running in http://localhost:3000`)
})

// write a script to meet the following requiremetns
/**
 * 1. Create index.html page which contains form with username, password and login btn.
 * 2. after clicking login button it should jump to same session page. Store uname and password in session.
 * 3. after having session it should redirect to fetch session page that reads the value. Put the log out link here.
 * 4. Jump to delete session page and destroy the session on this page and redirect to index.html page. 
 */