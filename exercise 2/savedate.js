const fs = require("fs");

let date = new Date();

fs.writeFileSync("etc/latestdate.txt", "time : " + date);
