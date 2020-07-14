const express = require('express');
const router = express.Router();

const stadistics_controller = require('./stadistics.controller');
context = 'numbers';

router.get(`${context}/all`, stadistics_controller.getAllEndpoints);

module.exports = router;