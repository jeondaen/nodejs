const fetch = require("node-fetch");
var Qty = require("js-quantities");
const fs = require("fs");

fetch(
  "http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22"
)
  .then(res => res.json())
  .then(jsonObj => {
    const temparatureInKelvin = jsonObj.main.temp;
    const temparatureInCelcius = Qty(temparatureInKelvin + "tempK").format("tempC");

    fs.writeFileSync("etc/temperature_log.txt", "temperature : " + temparatureInCelcius);
  })
  .catch(err => {
    console.log(err);
  });
