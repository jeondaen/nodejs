const http = require('http');
const fs = require('fs');

const memo = [];

http.createServer((req, res) => {
    if(req.method === 'POST') {
        if(req.url === '/add') {
            req.on('data', (data) => {
                data = data.toString();

                memo.push(data);
            })
        }
    }

    if(req.method === 'GET') {
        if(req.url === '/list') {

                res.setHeader('Content-Type', 'text/html;');
                res.write(memo.toString());
                res.end();
        }
    }
}).listen(80);
