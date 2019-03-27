const fs = require("fs");
const http = require("http");

fs.writeFileSync("hello.txt","Hello world from first-app.js");

const server = http.createServer((req,res) => {
    console.log("hello world welcome");
});

server.listen(3000);