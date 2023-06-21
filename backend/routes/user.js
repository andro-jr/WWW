const express = require('express');
const router = express.Router();
const { signUp, signIn } = require('../controllers/user');

router.post('/register', signUp);
router.post('/sign-in', signIn);

module.exports = router;
