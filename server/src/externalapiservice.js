const jwtService = require("./jwtservice");

const https = require("https");
const axios = require("axios");

const externalApiUrl = "https://dj-sandbox.us8.webtask.io/accounts";

async function fetchCustomers() {
    let response = undefined;

    try {
        response = await axios.get(externalApiUrl);
    } catch (error) {
        console.log(error);
    }

    return response;
}

const getFilteredCustomers = async (req, res) => {
    if (jwtService.verifyToken(req, res)) {
        const customers = await fetchCustomers();
        res.setHeader("Content-Type", "application/json");
    
        const filteredCustomers = customers.data.filter(customer => customer.currency == "cad");
    
        if (!res.writableEnded) {
            res.end(JSON.stringify(filteredCustomers));
        }
    }
};

module.exports = { getFilteredCustomers };
