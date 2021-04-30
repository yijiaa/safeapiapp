const express = require("express");
const app = express();

app.get("/", async (req, res) => {
    res.send("hello world")
});

app.listen(8080, () => {
    console.log("Safe API app listening at http://localhost:8080");
});
