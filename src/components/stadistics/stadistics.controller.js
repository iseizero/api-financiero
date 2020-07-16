const axios = require('axios');
const moment = require('moment');
const BASE_URL = 'https://www.indecon.online/';

exports.getAllEndpoints = async (req, res) => {
    axios.get(`${BASE_URL}last`).then((result) => {
        var auxResult = Object.values(result.data);
        return res.send(auxResult).status(200);
    }).catch((err) => {
        return res.status(500).send({
            message: err.message
        });
    });
}

exports.getValuesByKey = (req, res) => {
    var key = req.params.key;
    axios.get(`${BASE_URL}/values/${key}`).then((result) => {
        var data = {
            key: result.data.key,
            name: result.data.name,
            unit: result.data.unit,
            values: transformValuesData(result.data.values)
        }
        return res.send(data).status(200);
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

transformValuesData = (values) => {
    var arrayDate = Object.entries(values).map((a) => {
        return {date: a[0], value: a[1]}
    });

    return arrayDate;
}
