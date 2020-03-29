const http = require('http');

http.createServer((req, res) => {
   if(req.method === 'GET') {
       if(req.url === '/') {
           res.setHeader('Content-Type', 'text/html;');
           res.write('Hello World!');
           res.end();
       }
   }
}).listen(80);