const express = require('express');
const router = express.Router();
const {
  signUp,
  signIn,
  verifyEmail,
  forgetPassword,
  resendEmailVerificationToken,
} = require('../controllers/user');

const { isValidPassResetToken } = require('../middlewares/user');

const { userValidator, validate } = require('../middlewares/validator');

router.post('/register', userValidator, validate, signUp);
router.post('/sign-in', signIn);
router.post('/verify-email', verifyEmail);
router.post('/resend-emailverification-token', resendEmailVerificationToken);

router.post('/forget-password', forgetPassword);
router.post('/verify-pass-reset-token', isValidPassResetToken);

module.exports = router;
