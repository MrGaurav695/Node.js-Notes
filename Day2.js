//!                                              Modules
// Event Driven Architecure
// Events callback function listeners

// user click buttom ->event triggere -> event handler exectutes

// request lifecycle in nodejs

// client -> server -> evevntloop -> worker thread -> callback queue -> response

//* Synchronous and Asynchronous

//^ Synchronous->
// Synchronous execution means code runs line by line, and the next line waits unitil previous line finishes

// one tast must finish before the next task starts
// ex:-
// console.log("Synchronous ex");
// console.log("step 1");
// console.log("step 2");
// console.log("step 3");

//* console.log("blocking behaviour:");
//* function longTask(){
//*     for (let i=0; i<10000000000; i++){}
//*    console.log("long task finished");
//* }
//* console.log("start");
//* longTask();
//* console.log("end");

// longTask()->takes time
// javascdipts waits until it finishes
// only then end prints


// ^ Asynchronous->
// Asynchronous  execution allows javascripts to start a task and contineous executing other code waiting

// once the task is complete, javascripts ahandle result later

// ex:- api call, database operations, timers, file loading,network requests

//* console.log("Asynchronous ex:-");

//* console.log("start");
//* setTimeout(()=>{
//*     console.log("task finishd")
//* },3000);

//* console.log("end");

// explanations:-
// start //timer starts (3sec)
// end executes immediatelyy
// after 3 sec ->task finished

// why javascripts uses Async

// without async, the browser word ferrzewhile waiting for task
// ex:-
// loading data from browser
// downloding files
// api request

// if synchronous -> user must w8 until the request finish
// with asynchronous -> user can continue interacting with page


//^ methods for asynchronous programming
// 1. callbacks functions
// 2. promises
// 3. Async/Await

// 1. callbacks-> a callbacks functions is a function passes as ad argument to another function

//* function greet(name, callback) {
//*     console.log("Hello " + name);
//*     callback();
//* }
//* function sayBye() {
//*     console.log("goodbye!");
//* }
//* greet("Gaurav", sayBye);

// 2. promises-> a promises represents a value that will be available in the future
// promises has 3 states->
// a.pending 
// b.resolved 
// c.rejected

//* let promise = new Promise(function (resolve, reject){
//*     let success = true;

//*     if (success){ 
//*         resolve("Operation Successful");
//*    } else {
//*         reject("Operation failed");
//*     }
//* });

//* promise.then(function (result) {
//*     console.log(result);
//* })
//* .catch(function (error) {
//*     console.log(error);
//* });

// resolve()-> success -> then()
// reject()-> error -> catch()

// 3. Aysnc/Await :-
// Aysnc makes Asynchronous code look like synchronous code.

//* function fetchData() {
//*     return new Promise(resolve => {
//*         setTimeout(() => {
//*             resolve("data loaded");
//*         }, 2000);
//*     });
//* }
//* async function getData() {
//*     console.log("loading...");
//*     let result = await fetchData();
//*     console.log(result);
//* }
//* getData();