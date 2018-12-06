const url = require('url');

let requestURL = 'http://localhost:3010/?firstname=Manashree&lastname=Agashe'
let urlquery = url.parse(requestURL,true);
console.log(urlquery.host);  //return localhost:3010
console.log(urlquery.pathname);  //returns
console.log(urlquery.search);   //returns ?firstname=Manashree&lastname=Agashe

let querydata = urlquery.query; //returns object like { firstname : Manashree, lastname : Agashe }
console.log("Query FirstName >> " , querydata.firstname , ", Query LastName >> " , querydata.lastname );