const express = require("express");

const app = express();
//create a server

app.get("/",(req, res)=>{
    res.send("Hello students");
});

app.listen(3000, ()=>{
    console.log("server running")
})

//routing

app.get("/about", (req, res)=>{
    res.send("about Page");
});

let users = ["Amit", "jay"]
app.get("/users", (rq, res)=>{
    res.send(users);
});

//post-> data send to db
// create a form
//get-> data retrive from db
//put -> all form data update
//delete -> remove from db
//patch -> perticular data update
//developer thinkinkg

// frontent -> server -> controller(api)
// api-> srvice(logic) repository(dba)

//model(table)
//controller (api)

//contact
//json->java scrpits object notation

//api->application prograaming interface

//database integrtion I
//curd

//create a project using npm init
//install axios express 
//getmapping//porfolio personal data 
//using rout //personal//eduaction 
//intership //skills personal and development
//project this is day 5 notes of node.js

