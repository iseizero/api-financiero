const express = require('express');
const router = express.Router();

router.use("/api", require('./components/stadistics/stadistics.route'));

module.exports = router;