const express = require('express');
const router = express.Router();
const { signUp, signIn } = require('../controllers/user');
const { userValidator, validate } = require('../middlewares/validator');

router.post('/register', userValidator, validate, signUp);
router.post('/sign-in', signIn);

module.exports = router;
