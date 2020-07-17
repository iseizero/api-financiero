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
        const result = await axios.get("/numbers/init");
        expect(result.status).toBe(200);
        expect(result.data.length).toBeGreaterThan(0);
    }, 5000);
});

