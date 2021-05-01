const externalApiService = require("./src/externalapiservice");

const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 8080;

const options = {
    key: fs.readFileSync(path.join(__dirname, "/certs/key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "/certs/cert.pem"))
};

app.get("/", externalApiService.getFilteredCustomers);

let server = https.createServer(options, app);

server.listen(port, () => {
    console.log(`Safe API app listening at https://localhost:${port}`);
});
