const express = require('express');
const router = express.Router();


const { userValidator, validate } = require('../middlewares/validator');

const { signUp, signIn, verifyEmail, forgetPassword } = require('../controllers/user');



router.post('/register', userValidator, validate, signUp);
router.post('/sign-in', signIn);
router.post('/verify-email', verifyEmail);
router.post('/forget-password', forgetPassword)
router.post('/verify-pass-reset-token', isValidPassResetToken)

module.exports = router;
