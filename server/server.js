const externalApiService = require("./src/externalapiservice");
const jwtService = require("./src/jwtservice");

const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 443;

const options = {
    key: fs.readFileSync(path.join(__dirname, "/certs/key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "/certs/cert.pem"))
};

app.use(express.json());

app.get("/", externalApiService.getFilteredCustomers);

app.get("/apikey", jwtService.generateToken);

let server = https.createServer(options, app);

server.listen(port, () => {
    console.log(`Safe API app listening at port: ${port}`);
});
