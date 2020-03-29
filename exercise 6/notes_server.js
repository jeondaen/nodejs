const http = require('http');
const fs = require('fs');

const memo = [];
let body;
http.createServer((req, res) => {
    if(req.method === 'POST') {
        if(req.url === '/add') {
            req.on('data', (data) => {

                memo.push(data);

            }).on('end', () => {
                const fullBody = Buffer.concat(memo).toString();
                body = fullBody;
            });
        }
    }

    if(req.method === 'GET') {
        if(req.url === '/list') {

                res.setHeader('Content-Type', 'text/html;');
                res.write(body);
                res.end();
        }
    }
}).listen(80);
