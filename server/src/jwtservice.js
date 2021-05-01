const jwt = require("jsonwebtoken");
const randomstring = require("randomstring");

jwtKey = "not_so_secret_private_key";

const generateToken = (req, res) => {
    const randomUsername = randomstring.generate(8);
    const token = jwt.sign({ randomUsername }, jwtKey, {algorithm: "HS256"});

    res.end(token);
};

module.exports = { generateToken };
