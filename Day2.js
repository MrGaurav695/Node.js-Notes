// ==================================================
//~ 1. Event Driven Architecture
// ==================================================

// Events, callback function, listeners

// user click button -> event trigger -> event handler executes


// --------------------------------------------------
//^ Request lifecycle in Node.js
// --------------------------------------------------

// client -> server -> eventloop -> worker thread -> callback queue -> response



// ==================================================
//~ 2. Synchronous and Asynchronous
// ==================================================

// --------------------------------------------------
//* Synchronous
// --------------------------------------------------

// Synchronous execution means code runs line by line,
// and the next line waits until the previous line finishes

// one task must finish before the next task starts

// Example
// console.log("Synchronous ex");
// console.log("step 1");
// console.log("step 2");
// console.log("step 3");


// Blocking behaviour example

// console.log("blocking behaviour:");

// function longTask(){
//     for (let i=0; i<10000000000; i++){}
//     console.log("long task finished");
// }

// console.log("start");
// longTask();
// console.log("end");


// longTask() -> takes time
// javascript waits until it finishes
// only then end prints



// --------------------------------------------------
//* Asynchronous
// --------------------------------------------------

// Asynchronous execution allows javascript to start a task
// and continue executing other code while waiting

// once the task is complete, javascript handles result later

// examples:
// api call
// database operations
// timers
// file loading
// network requests


// Example

// console.log("Asynchronous ex:-");

// console.log("start");

// setTimeout(()=>{
//     console.log("task finished")
// },3000);

// console.log("end");


// Explanation
// start -> timer starts (3 sec)
// end executes immediately
// after 3 sec -> task finished



// ==================================================
//^ Why javascript uses Async
// ==================================================

// without async, the browser would freeze while waiting for tasks

// examples:
// loading data from browser
// downloading files
// api request

// if synchronous -> user must wait until request finishes
// with asynchronous -> user can continue interacting with page



// ==================================================
//^ Methods for Asynchronous Programming
// ==================================================

// 1. callback functions
// 2. promises
// 3. async/await



// --------------------------------------------------
//* 1. Callback functions
// --------------------------------------------------

// a callback function is a function passed as an argument
// to another function


// Example

// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// function sayBye() {
//     console.log("goodbye!");
// }

// greet("Gaurav", sayBye);



// --------------------------------------------------
//* 2. Promises
// --------------------------------------------------

// a promise represents a value that will be available in the future

// promise states:
// pending
// resolved
// rejected


// Example

// let promise = new Promise(function (resolve, reject){
//     let success = true;

//     if (success){
//         resolve("Operation Successful");
//     } else {
//         reject("Operation failed");
//     }
// });

// promise.then(function (result) {
//     console.log(result);
// })
// .catch(function (error) {
//     console.log(error);
// });


// resolve() -> success -> then()
// reject() -> error -> catch()



// --------------------------------------------------
//* 3. Async / Await
// --------------------------------------------------

// Async makes asynchronous code look like synchronous code


// Example

// function fetchData() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("data loaded");
//         }, 2000);
//     });
// }

// async function getData() {
//     console.log("loading...");
//     let result = await fetchData();
//     console.log(result);
// }

// getData();
