const express = require('express');
const { createPackage } = require('../controllers/package');

const router = express.Router();

router.post('/create', createPackage);

module.exports = router;
