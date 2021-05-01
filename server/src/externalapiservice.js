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
    const response = await fetchCustomers();
    const filteredCustomers = response.data.filter(customer => customer.currency == "cad");

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(filteredCustomers));
};

module.exports = { getFilteredCustomers };
