var fs = require('fs');
var http = require('http');
var uppercase = require('upper-case');

http.createServer(function(req,res){
    fs.readFile('demo.html',function( err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(uppercase(data));
        res.end();
    });
}).listen(3020);