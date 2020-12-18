// Creates server
const express = require("express");
const app = express();
const server = require("http").createServer(app);



module.exports = function uptimeServer(port) {
    if (typeof port !== 'number') throw new TypeError("Please Input A Port Number!");

        app.get("/uptimer" , (req, res) => {
            res.status(200).json({ uptime: true });
          })

          server.listen(port);

        console.log( `[()] Done Installing Server | Go To Discord And Type !glitch https://example.glitch.me/uptimer`)
          
    }
  