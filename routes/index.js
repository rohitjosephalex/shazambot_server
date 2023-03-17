const express = require('express');
const router = express.Router();
const shazam = require('../routes/shazam');

router.use('/shazam', shazam);

module.exports = router;