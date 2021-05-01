const jwt = require("jsonwebtoken");
const randomstring = require("randomstring");

privateKey = "not_so_secret_private_key";

const generateToken = (req, res) => {
    const randomUsername = randomstring.generate(8);
    const token = jwt.sign({ randomUsername }, privateKey, {algorithm: "HS256"});

    res.end(token);
};

const verifyToken = (req, res) => {
    const token = req.param("apikey");
    let payload

    try {
        payload = jwt.verify(token, privateKey)
    } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
            res.status(401).end()
        } else {
            res.status(400).end()
        }
    }

    return payload ? true : false;
}

module.exports = { generateToken, verifyToken };
