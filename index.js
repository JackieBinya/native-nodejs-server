const https = require('https');

const url = `https://www.omdbapi.com/?t=kill&apikey=9ae318ac`

https.get(url, res => {
    let data = ""

    res.on("data", chunk => {
      data += chunk;
    });
     
    res.on("end", () => console.log(JSON.parse(data)))
})
