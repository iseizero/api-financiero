const axios = require('axios');
const httpSetup = require('../setup/http-setup');

describe("API connection", () => {
    let listener;

    beforeAll(async () => {
        listener = await httpSetup();
    });

    afterAll(async () => {
        await listener.connection.close();
    });
});

describe("API interaction", () => {

    it('It should respond to the GET method', async () => {
        const result = await axios.get("http://localhost:4020/v1/api/numbers/all");
        expect(result.status).toBe(200);
        expect(result.data.length).toBeGreaterThan(0);
    }, 5000);
});

