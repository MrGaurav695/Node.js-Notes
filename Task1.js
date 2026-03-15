// ------------------Create a file
const fs = require("fs");
fs.writeFileSync("student.txt", `Name: Gaurav Shirsath
Course: B.E. Computer Engineering
Subject: Node.js`)

// ------------------reading file
const data = fs.readFileSync("student.txt", "utf8");
console.log(data);

// ------------------async file reading
fs.readFile("student.txt", "utf8", (err, data) => {
   if (err) {
       console.log(err);
       return;
    }
   console.log(data);
});

// -----------------Path Module
const path = require("path");

console.log("file name:");
console.log(path.basename(__filename));

console.log("directory name:");
console.log(path.dirname(__filename));

console.log("extensions:");
console.log(path.extname(__filename));

// ------------------http create server + Routing
const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Home page,By Gaurav");

    } else if (req.url === "/about") {
        res.end("About page");

    } else {
        res.end("404 page");
    }

});

server.listen(3000);