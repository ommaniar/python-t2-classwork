// write a script to meet the following requiremetns
/**
 * 1. Create index.html page which contains form with username, password and login btn.
 * 2. after clicking login button it should jump to same session page. Store uname and password in session.
 * 3. after having session it should redirect to fetch session page that reads the value. Put the log out link here.
 * 4. Jump to delete session page and destroy the session on this page and redirect to index.html page. 
 */

const express = require("express");
const app = express();
const session = require(`express-session`);

app.use(express.static(__dirname,{index:"index.html"}));
app.use(express.urlencoded({extended:false}));

app.use(session({
    secret:"This is secret key",
    saveUninitalized: true,
}))

app.post("/session",(req,res)=>{
    var q = req.body;
    if(q.username == "admin" && q.password == "admin@123"){
        req.session.data = {username: q.username, password: q.password}
        res.redirect("/fetch_session")
    }else{
        res.write(`Enter Valid ID Password`);
        res.redirect("/");
    }
    
})

app.get("/fetch_session",(req,res)=>{
    if(req.session.data){
        res.write(`<p>Username: ${req.session.data.username} </p>`)
        res.write(`<p>Password: ${req.session.data.password} </p>`)
    }else{
        res.write("<p>Session not found</p>")
    }
    res.write("<br><a href='logout'>Logout</a>")
    res.send();
})

app.get("/logout",(req,res)=>{
    if(req.session.data){
        res.session.destroy((err)=>{
            if(err){
                res.send(err);
            }else{
                res.clearCookie("connect.sid");
            }
        })
    }
    res.redirect("/");
});

app.listen(3000,()=>{
    console.log(`app running in http://localhost:3000`)
})

/**
 * Write a script:
 * 1. Create session.html file which contains form uname, pass and login button
 * 2. after clicking login button it should jump to same session page. Store uname and password in session.
 * 3. after having session it should redirect to fetch session page that reads the value. Put the log out link here.
 * 4. On this page check authentication of user. username and password must be admin and admin@123 respectively.
 *  a. if this condition is true then display welcome admin and display logout page. by clicking logout link user should jump to destroy page display the message session destroy and it should redirect to home page
 *  b.   else: display enter valid username and password and logon link on this page
*/