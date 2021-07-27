// console.log("Hello world")

var http = require("http");
var cal = require("./calc.js")

http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'})

     res.write(cal.add(10,24));
     res.write("Good morning");

    res.end("Hi welcome to node JS");
}).listen(8080)