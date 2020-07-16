const axios = require('axios');
const BASE_URL = 'https://www.indecon.online/';

exports.getAllEndpoints = async (req, res) => {
    axios.get(`${BASE_URL}last`).then((result) => {
        console.log(result.data);
        return res.send({result: result.data}).status(200);
    }).catch((err) => {
        return res.status(500).send({
            message: err.message
        });
    });
}