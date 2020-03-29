const fs = require("fs");
const date = new Date();

let check = fs.existsSync('etc');

if(!check) fs.mkdir('./etc', () => {});

fs.writeFileSync("etc/latestdate.txt", "time : " + date);