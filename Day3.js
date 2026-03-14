//!                                              Modules

//* node js module
// module = reusable block of code
// module ka matlab ek file ya functinality jise hum multiple
// jagah use kr sakte hai

//* typess of modules
// 1 core module
// 2 local module
// 3 Third Party module

//^ core modules -> node.js ke built in modules hote hai
// fs, http, path os and events

//^ local modules

// jo hum khud create krte hai
// node1.js, math.js, file.js, scripts.js

// importing local module syntax
// const math = require("./math")

//^ Thirt partyu modules
// jo npm se install hote hal
// ex-> express axios mongoose
// syntax
// npm install axios

//*  importing modules
//  node js me modules use karne ke liye require() ka use krte hai

//  ex->
//~  const fs = require("fs");

//  const-variable
//  fs-> module name
//  require()-> module import

//* Create a file

//~ const fs = require("fs");
//~ fs.writeFileSync("test.txt", "Hello Sir good day")

//* reading file

//~ const data = fs.readFileSync("test.txt", "utf8");
//~ console.log(data);

// asyn file reading

//~ fs.readFile("test.txt", "utf8", (err, data) => {
//~     if (err) {
//~         console.log(err);
//~         return;
//~     }
//~     console.log(data);
//~ });

//* async method
// for better performance
// sync -> blocking
// Async -> non blocking
// readfileSync -> wait
// readfile -> no wait

//* http module
// http module se hum web server create kr sakte hai
// http -> hyper text transfer protocol

//~ const http = require("http");
//~ const server = http.createServer((req,res)=>{
//~     res.write("Hi i am gaurav shirsath");
//~     res.end();
//~ })
//~ server.listen(3000);

// createServer()=> server create karta hai
// req -> request object
// res -> response object
// res.write() -> response send
// res.end() -> response close

//^ routing ex

//~ const server = http.createServer((req, res) => {
//~     if (req.url == "/") {
//~         res.end("Home page");
//~     } else if (req.url === "/about") {
//~         res.end("About page");
//~     } else {
//~         res.end("404 page");
//~     }
//~ });
//~ server.listen(3000);

// req.url -> requested path

//^ path module
// path module file path handel karta hai

//~ const path = require("path");
//~ console.log("file name: ")
//~ console.log(path.basename(__filename));

//~ console.log("directory name :");
//~ console.log(path.dirname(__filename));

//~ console.log("extentions:");
//~ console.log(path.extname(__filename));





