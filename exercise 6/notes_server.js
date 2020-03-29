const http = require('http');
const fs = require('fs');

let memo = ['Buy milk', 'Some eggs', 'Go to work', 'reactjsexample.com'];

http.createServer((req, res) => {
    if(req.method === 'POST') {
        if(req.url === '/add') {
            fs.writeFileSync('memo.txt', JSON.stringify(memo));
        }
    }

    if(req.method === 'GET') {
        if(req.url === '/list') {
            fs.readFile('memo.txt', (err, data) => {
                if(err) throw err;

                res.setHeader('Content-Type', 'text/html;');
                res.write(data);
                res.end();
            })
        }
    }
}).listen(80);