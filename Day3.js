// ==================================================
//* 1. Modules
// ==================================================

//^ 1.1 Node.js Module
// Module = reusable block of code
// Module ka matlab ek file ya functionality jise hum multiple
// jagah use kar sakte hai


// --------------------------------------------------
//^ 1.2 Types of Modules
// --------------------------------------------------

// 1. Core Module
// node.js ke built in modules hote hai
// fs, http, path os and events


// 2. Local Module
// jo hum khud create krte hai
// node1.js, math.js, file.js, scripts.js

// importing local module syntax
// const math = require("./math")


// 3. Third Party module
// jo npm se install hote hai
// ex-> express axios mongoose
// syntax
// npm install axios



// ==================================================
//^ 2. Importing Modules
// ==================================================

// node js me modules use karne ke liye require() ka use krte hai

// ex->
// const fs = require("fs");

// const-variable
// fs-> module name
// require()-> module import



// ==================================================
//^ 3. File System (fs module)
// ==================================================

// Create a file

// const fs = require("fs");
// fs.writeFileSync("test.txt", "Hello Sir good day")


// --------------------------------------------------
//^ Reading file (sync)
// --------------------------------------------------

// const data = fs.readFileSync("test.txt", "utf8");
// console.log(data);


// --------------------------------------------------
//^ Async file reading
// --------------------------------------------------

// fs.readFile("test.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });


// --------------------------------------------------
//^ Sync vs Async
// --------------------------------------------------

// async method for better performance
// sync -> blocking
// Async -> non blocking
// readfileSync -> wait
// readfile -> no wait



// ==================================================
//^ 4. HTTP Module
// ==================================================

// http module se hum web server create kr sakte hai
// http -> hyper text transfer protocol

// const http = require("http");
// const server = http.createServer((req,res)=>{
//     res.write("Hi i am gaurav shirsath");
//     res.end();
// })
// server.listen(3000);

// createServer()=> server create karta hai
// req -> request object
// res -> response object
// res.write() -> response send
// res.end() -> response close



// ==================================================
//^ 5. Routing Example
// ==================================================

// const server = http.createServer((req, res) => {
//     if (req.url == "/") {
//         res.end("Home page");
//     } else if (req.url === "/about") {
//         res.end("About page");
//     } else {
//         res.end("404 page");
//     }
// });

// server.listen(3000);

// req.url -> requested path



// ==================================================
//^ 6. Path Module
// ==================================================

// path module file path handel karta hai

// const path = require("path");
// console.log("file name: ")
// console.log(path.basename(__filename));

// console.log("directory name :");
// console.log(path.dirname(__filename));

// console.log("extentions:");
// console.log(path.extname(__filename));
