const express = require('express');
const router = express.Router();
const { signUp, signIn, verifyEmail } = require('../controllers/user');

router.post('/register', signUp);
router.post('/sign-in', signIn);
router.post('/verify-email', verifyEmail);

module.exports = router;
