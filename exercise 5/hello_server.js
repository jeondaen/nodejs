const http = require('http');

var server = http.createServer((req, res) => {
    console.log('server created');
});

http.request({path: 'http://localhost:80', headers: {'Content-Type' : 'text/html;'}}, (res) => {
    console.log('hello? request');
})

server.listen(80);