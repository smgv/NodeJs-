// require is used to import file or core modules such as http, https, fs, path, os
const http = require("http");

const routes = require("./routes");

//const server = http.createServer(routes); using single module system

console.log(routes.someText);
//using module system as object;
const server = http.createServer(routes.handler);


server.listen(3000);