const http = require('http');

// http.createServer((req, res)=>{
// res.write("<h1>hello Node Js</h1>");
// res.end();
// }).listen(3000);


function dataControl(req, res) {
    res.write("<h1>hello Node Js</h1>");
    res.end();
}
http.createServer(dataControl).listen(3000);

console.log('Thank You ')