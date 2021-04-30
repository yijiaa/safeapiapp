const express = require("express");
const https = require("https");
const fs = require("fs");

const app = express();
const port = 8080;

const options = {
    key: fs.readFileSync("./certs/key.pem"),
    cert: fs.readFileSync("./certs/cert.pem")
};

app.get("/", async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({hello: "world"}));
});

let server = https.createServer(options, app);

server.listen(port, () => {
    console.log(`Safe API app listening at https://localhost:${port}`);
});
