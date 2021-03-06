const fetch = require("node-fetch");
const fs = require("fs");

fetch(
  "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22"
)
  .then(res => res.json())
  .then(json => {
    if (json) {
      desc = json.weather[0].description;

      fs.writeFileSync("etc/weather_logs.txt", desc);
    }
  });
