const express = require('express');
const router = express.Router();

const stadistics_controller = require('./stadistics.controller');
context = 'numbers';

router.get(`/${context}/all`, stadistics_controller.getAllEndpoints);
router.get(`/${context}/values/:key`, stadistics_controller.getValuesByKey);
router.get(`/${context}/date/:key/:date`, stadistics_controller.getValuesByDateAndDate);

module.exports = router;