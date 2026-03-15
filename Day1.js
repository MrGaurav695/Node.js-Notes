// ==================================================
//~ 1. Introduction
// ==================================================

// JavaScript -> Browser
// Node.js -> Server

// Node.js -> JavaScript runtime environment
// Node.js is a JS runtime environment that allows JS to run outside the browser on the server.

// Node.js allow karta hai:
// server banana
// api banana
// real-time apps
// backend banana


// --------------------------------------------------
//* Creator and Basic Info
// --------------------------------------------------

// creator -> Ryan Dahl
// year -> 2009
// engine -> Google V8 engine


// --------------------------------------------------
//* Node.js Concepts
// --------------------------------------------------

// single thread
// event driven architecture
// non-blocking

// userRequest -> eventloop -> process requests

// Node.js ek hi thread me multiple request handle karta


// ==================================================
//* 2. Where Node.js is Used
// ==================================================

// real time application
// REST APIs -> GET POST PUT DELETE
// streaming application -> video streaming
// backend development


// ==================================================
//* 3. Advantages of Node.js
// ==================================================

// fast execution -> Google V8 engine
// JS -> machine code


// --------------------------------------------------
//* Non-blocking I/O
// --------------------------------------------------

// Example:
// 3 user request

// 1 ->
// 2 -> wait
// 3 -> wait


// --------------------------------------------------
//* Single Programming Language
// --------------------------------------------------

// frontend -> JS React Angular
// backend -> Java / PHP / Python

// Node.js

// frontend -> JavaScript
// backend -> JavaScript

// developer ko 1 language seekhni padti hai


// --------------------------------------------------
//* Large Ecosystem
// --------------------------------------------------

// npm (Node Package Manager)

// express
// axios
// lodash

// npm install express


// ==================================================
//* 4. Node.js vs JavaScript
// ==================================================

// features             nodejs              vs              javascript
// environment          server                              browser
// file system          yes                                 no
// operatingsystem      yes                                 no
// backend dev          yes                                 no


// examples

// readFile()
// createServer()


// console.log("Hello Sir");


// ==================================================
//* 5. Node Global Objects
// ==================================================

// Node.js me kuch built-in variables hote hai

// console.log(__dirname);
// console.log("global objects: ");
// console.log(__filename);
// console.log(process.platform);


// ==================================================
//* 6. Node.js Architecture
// ==================================================

// based on:
// event driven
// non blocking
// single thread

// Node.js multiple request simultaneously handle karta hai
// without creating multiple threads


// architecture flow

// clients -> request queue -> eventloop -> worker thread -> response


// example flow

// user -> login
// event loop

// eventloop continuously check karta hai request

// agar koi request aai hai to start karta hai


// event loop definition

// event loop is a mechanism that continuously checks the request queues
// and processes events

// event loop ek infinite loop hai jo requests check karta hai
