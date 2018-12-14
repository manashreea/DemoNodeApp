const http = require('http');
const url = require('url');

var  simplemodule = require('./simplemodule.js');

http.createServer(function(req,res){
    var urlreq = url.parse(req.url,true);
    res.writeHead(200,{'Content-Type':'text/html'});
    let resText1 = "Here module export function called getDateDDMMYYYYHHMMSS >> " + simplemodule.getDateDDMMYYYYHHMMSS();
    let resText2 = "\n Here module export function called getFactoralFor >> " + simplemodule.getFactoralFor(5);
    let resText3 = "\n Here module export function called checkPrimeNumberFor >> " + simplemodule.checkPrimeNumberFor([23,45,67,89,10,14,127,313,1511,1718,1920]);
    console.log(resText1,resText2, resText3);
    res.write(resText1 + resText2 + resText3);
    res.end();
}).listen(3010);