const axios = require('axios');
const BASE_URL = 'https://www.indecon.online/';

exports.getAllEndpoints = async (req, res) => {
    axios.get(`${BASE_URL}last`).then((result) => {
        return res.send({result: result.data}).status(200);
    }).catch((err) => {
        return res.status(500).send({
            message: err.message
        });
    });
}

exports.getValuesByKey = (req, res) => {
    var key = req.params.key;
    axios.get(`${BASE_URL}/values/${key}`).then((result) => {
        return res.send(result.data).status(200);
    }).catch((err) => {
        return res.status(500).send({
            message: err.message
        });
    });
}

exports.getValuesByDateAndDate = (req,res) => {
    var { key , date } = req.params;
    
    axios.get(`${BASE_URL}/date/${key}/${date}`).then((result) => {
        return res.send(result.data).status(200);
    }).catch((err) => {
        return res.status(500).send({
            message: err.message
        });
    });
}