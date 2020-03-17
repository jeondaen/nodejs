console.log("kkkk");

const http = require('http');
const add = http.request('http://localhost:80/add', (res) => {
    console.log("SAVE MEMO");
});

const server = http.createServer((req, res) => {
    console.log("SERVER ON")
});

server.listen(80);

add.on('finish', () => {
    console.log("add IS ON");
});
