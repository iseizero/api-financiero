const express = require('express');
const router = express.Router();

router.use("/", require('./components/stadistics/stadistics.route'));

module.exports = router;