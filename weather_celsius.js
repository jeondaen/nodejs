const nfetch = require("node-fetch");
var Qty = require("js-quantities");
const fs = require("fs");

nfetch(
  "http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22"
)
  .then(res => res.json())
  .then(jsonObj => {
    temp = jsonObj.main.temp;
    qty = Qty(temp + "tempK").to("tempC").scalar;
    fs.writeFileSync("etc/temperature_log.txt", "temperature : " + qty);
  })
  .catch(err => {
    console.log(err);
  });
