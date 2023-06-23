const express = require('express');
const router = express.Router();
const {
  signUp,
  signIn,
  verifyEmail,
  resendEmailVerificationToken,
} = require('../controllers/user');

router.post('/register', signUp);
router.post('/sign-in', signIn);
router.post('/verify-email', verifyEmail);
router.post('/resend-emailverification-token', resendEmailVerificationToken);

module.exports = router;
