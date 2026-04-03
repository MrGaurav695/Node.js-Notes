// ==================================================
//~ 1. Middleware Introduction
// ==================================================

// middleware -> middleware is a function that runs betwen
// request and response cycle
// it can modify req and res objects 
// it can end the request response cycle
// it can call the next middleware in the stack

// jb client request bhejta hai aur server response deta hai, uske beexh me jo function execute hote hai use middleware kehte hai

// client req -> middleware 1 -> middleware 2 -> middleware 3 -> response

// middleware 1 -> log request
// middleware 2 -> authenticate user
// middleware 3 -> validate data

// middleware ke pass acees hota hai
// req ->client request data
// res -> server response data
// next -> next middleware functions ko call karne ke liye use hota hai


// ==================================================
//~ 2. Application Level Middleware
// ==================================================

const express = require("express");

const app = express();

app.use((req,res,next)=>{
    console.log("middleware called");
    console.log("middeware 1");
    next();
});

app.get("/hello",(req,res)=>{
    res.send("Hi i am Gaurav Shirsath");
});

app.listen(3000, () => {
    console.log("server running");
});


// ==================================================
//~ 3. Types of Middleware
// ==================================================

// application level middleware -> run for every request
// router level middleware -> run for specific route


// ==================================================
//~ 4. Router Level Middleware
// ==================================================

const auth = (req,res,next)=>{
    console.log("auth middleware called");
    next();
}

app.get("/dashboard",auth,(req,res)=>{
    res.send("dashboard page");
});


// ==================================================
//~ 5. Error Handling Middleware
// ==================================================

app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).send("something went wrong");
});


// ==================================================
//~ 6. Built-in Middleware
// ==================================================

// express.json() -> json data parse keta hai
// express.static() -> static files serve krta hai

app.use(express.json());
app.use(express.static("public"));


// ==================================================
//~ 7. Third Party Middleware
// ==================================================

// npm se install hota hai
// morgan -> log requests
// cors -> enable cross origin resource sharing

const morgan = require("morgan");
app.use(morgan("dev"));


// ==================================================
//~ 8. Purpose of Middleware
// ==================================================

// logging -> morgan
// security -> helmet
// data validation -> joi