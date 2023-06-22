const db = require('../db/index');
const Users = db.users;
const EmailVerificationToken = db.emailVerificationToken;
const jwt = require('jsonwebtoken');

const PasswordResetToken = require('../models/passwordResetToken')
const { sendError } = require('../utils/helper');

const {
  sendError,
  generateOTP,
  generateMailTransporter,
} = require('../utils/helper');


//@desc Register new User
//@route POST /api/user/register
//@access PUBLIC
const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await Users.findOne({ where: { email } });
  if (user) {
    return res.json({ error: 'Email already exists!' });
  }

  const otp = generateOTP();

  const createdUser = await Users.create({
    name,
    email,
    password,
  });

  const newEmailVerificationToken = await EmailVerificationToken.create({
    userId: createdUser.id,
    token: otp,
  });

  // res.json({ createdUser });
  let transporter = generateMailTransporter();

  transporter.sendMail({
    from: 'verification@www.com',
    to: createdUser.email,
    subject: 'Email Verification',
    html: `<p>Your Verification OTP </p>
        <h1> ${otp} </h1>
    `,
  });

  res.json({
    user: {
      name: createdUser.name,
      email: createdUser.email,
    },
    message: 'Please check your email for OTP',
  });
};


//@desc Sign in User
//@route POST /api/user/sign-in
//@access PUBLIC

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ where: { email } });
  if (!user) return res.json({ error: 'Invalid Email or Password' });

  const passMatched = await user.comparePassword(password);

  if (!passMatched) return res.json({ error: 'Invalid Pass' });

  const jwtToken = jwt.sign({ euserID: user.id }, process.env.JWT_SECRET);

  const { id, name } = user;

  res.json({ user: { id, name, email, token: jwtToken } });
};


//@desc Sign in User
//@route POST /api/user/sign-in
//@access PUBLIC
const verifyEmail = async (req, res) => {
  const { userId, otp } = req.body;

  console.log(userId);

  const user = await Users.findByPk(userId);
  if (!user) return sendError(res, 'User not Found', 404);

  if (user.isVerified) return sendError(res, 'User already Verified');

  console.log(user.isVerified);

  const token = await EmailVerificationToken.findOne({
    where: { userId },
  });
  if (!token) return sendError(res, 'Invalid OTP');

  const matchedOtp = await token.compareOTP(otp);

  if (!matchedOtp) return sendError(res, 'Invalid OTP');

  const result = await Users.update(
    { isVerified: true },
    {
      where: {
        id: userId,
      },
    }
  );

  await EmailVerificationToken.destroy({
    where: {
      id: token.id,
    },
  });

  if (!result) return sendError(res, 'Verification Failed');

  let transport = generateMailTransporter();

  transport.sendMail({
    form: 'verification@ourapp.com',
    to: user.email,
    subject: 'Welcome Email',
    html: `
    <h1>Welcome to our app.</h1>
    `,
  });

  const jwtToken = jwt.sign({ euserID: user.id }, process.env.JWT_SECRET);

  const { id, name, email } = user;

  res.json({ user: { id, name, email, token: jwtToken } });
};


module.exports = {
  signUp,
  signIn,

};

