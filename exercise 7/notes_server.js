const http = require('http');
const fs = require('fs');
const memo = [];

let length = 0;

http.createServer((req, res) => {

    if(req.method === 'POST') {
        if(req.url === '/add') {
            let dataArray = [];

            req.on('data', (chunk) => {
                dataArray.push(chunk);
            }).on('end', () => {
                memo.push(Buffer.concat(dataArray).toString());
                console.log(memo);
                res.end();
                length = memo.length;
            });
        }
    }
    
    if(req.method === 'GET') {
        
        if(req.url === '/list') {
            const jsonObj = JSON.stringify(memo);
            res.setHeader('Content-Type', 'text/html;');
            fs.readFile('todo.html', (err, data) => {
                if(err) throw err;
                res.write(data);
                res.write(jsonObj);
                res.end();
            })
        }
        
        if(req.url === '/') {
            res.setHeader('Content-Type', 'text/html;');

            fs.readFile('todo.html', (err, data) => {
                res.write(data);
                res.write('<div style="width: 300px;">')
                res.write('<div style="text-align: right;">There are ' + length + ' todos</div>')
                res.write('<div style="border:1px solid; width: 300px;">');
                for(let i=0; i<length; i++) {
                    res.write('<div style="border-bottom: 1px solid; padding:5px">');
                    res.write(memo[i]);
                    res.write('<button style="float: right;">Complete</button></div>');
                }
                res.write('</div>');
                res.end('</div>');
            })
        }
    }
    
}).listen(80);