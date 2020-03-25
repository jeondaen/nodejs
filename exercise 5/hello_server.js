const http = require('http');

var server = http.createServer((req, res) => {
   if(req.method === 'GET') {
       if(req.url === '/') {
           console.log('Hello world!');
       }
   }
}).listen(80);