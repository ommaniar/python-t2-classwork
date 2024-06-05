const express = require("express")
const app = express()
obj = {name: "abc",age:10}
app.get('/jsonProcessing',(req,res)=>{
    // res.write(JSON.stringify(obj))
    // res.send(obj)
    res.json(obj)
    res.send()
})

app.get('/',(req,res)=>{
    res.set("Content-Type","text/plain");
    res.send("<h1>Hello</h1>");
}
);
app.get("/about",(req,res)=>{
    res.set("Content-Type","text/html");
    res.write("<h1>About page is here</h1>");
    res.send("");
})
app.get("/user/:name1/text/:text",(req,res)=>{
    res.send(req.params);
});

// write express js script to request server to display json object values on browser
var object1 = {
    Name: "Ezio",
    lastName: "Auditore"
} 
app.get("/question1",(req,res)=>{
    res.send(`${object1.Name} ${object1.lastName}`)
})

// write express js script to request serverr to display json object in table form on browser(array of object)
var object2 = [{Name:"Ezio",lastName:"Auditore"},{Name:"Edward",lastName:"Kenway"},{Name:"Desmond",lastName:"Miles"},{Name:"Ash",lastName:"Ketchup"},{Name:"Giorno",lastName:"Giovana"}]
app.get("/question2",(req,res)=>{
    res.write(`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`)
    res.write("<table class='table table-dark table-hover container'><tr><th>Name</th><th>Last Name</th></tr>");
    for(i of object2){
        res.write(`<tr><td>${i.Name}</td><td>${i.lastName}</td></tr>`)
    }
    res.write("</table>")
    res.end()
})

// write an express js script to define one json array of three objects having properties name and age. Sort this objects according to age.
// if user request sorted names in url then all names along with age should be printed according to decending order of age.
// also display the sorted values on sort page and display object on home page.
var object3 = [{name: "abc",age:10},{name:"xyz",age:12},{name:"pqr",age:11}]
var sorted_obj = [{name: "abc",age:10},{name:"xyz",age:12},{name:"pqr",age:11}]
for(i in sorted_obj){
    for(j in sorted_obj){
        if(sorted_obj[i].age > sorted_obj[j].age){
            temp = sorted_obj[j]
            sorted_obj[j] = sorted_obj[i]
            sorted_obj[i] = temp
        }
    }
}
app.get("/home_page",(req,res)=>{
    // res.write(`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`)
    // res.write("<table class='table table-dark table-hover container'><tr><th>Name</th><th>Last Name</th></tr>");
    // for(i of object3){
    //     res.write(`<tr><td>${i.name}</td><td>${i.age}</td></tr>`)
    // }
    // res.write("</table>")
    res.send(object3)

})
app.get("/sort_page",(req,res)=>{
    res.write(`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`)
    res.write("<table class='table table-dark table-hover container'><tr><th>Name</th><th>Last Name</th></tr>");
    for(i of sorted_obj){
        res.write(`<tr><td>${i.name}</td><td>${i.age}</td></tr>`)
    }
    res.write("</table>")
    res.end()
})


app.get("/sort")

app.listen(3001,()=>{
    console.log("App running at http://localhost:3001");
});

