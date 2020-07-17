const axios = require('axios');
const {
    app
} = require('../../server');

module.exports = async function httpSetup() {
    const listener = app.listen();
    const port = listener.addListener().port;
    const baseUrl = `http://localhost:${port}/v1/api/numbers/init`;

    axios.default.baseUrl = baseUrl;
    return listener;
}