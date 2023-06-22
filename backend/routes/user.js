const express = require('express');
const router = express.Router();


const { userValidator, validate } = require('../middlewares/validator');

const { signUp, signIn, verifyEmail } = require('../controllers/user');


router.post('/register', userValidator, validate, signUp);
router.post('/sign-in', signIn);
router.post('/verify-email', verifyEmail);

module.exports = router;
