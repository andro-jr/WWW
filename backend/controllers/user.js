const db = require('../db/index');
const Users = db.users;
const EmailVerificationToken = db.emailVerificationToken;
const jwt = require('jsonwebtoken');
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

  const user = await Users.findByPk(userId);
  if (!user) return sendError(res, 'User not Found', 404);

  if (user.isVerified) return sendError(res, 'User already Verified');

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

//@desc Resend Email Verification Token
//@route POST /api/user/resend-emailverification-token
//@access PUBLIC
const resendEmailVerificationToken = async (req, res) => {
  const { userId } = req.body;
  console.log(userId);
  console.log(' working');

  const user = await Users.findByPk(userId);
  if (!user) return sendError(res, 'User not Found', 404);

  if (user.isVerified) return sendError(res, 'User already Verified');

  const verificationToken = await EmailVerificationToken.findOne({
    where: { userId },
  });

  const newOtp = generateOTP();

  if (verificationToken) {
    verificationToken.token = newOtp;
    const result = await verificationToken.save();
    if (!result) return sendError(res, 'Failed');
  } else {
    const newEmailVerificationToken = await EmailVerificationToken.create({
      userId: user.id,
      token: newOtp,
    });

    if (!newEmailVerificationToken) return sendError(res, 'Failed');
  }

  let transporter = generateMailTransporter();

  transporter.sendMail({
    from: 'verification@www.com',
    to: user.email,
    subject: 'Email Verification',
    html: `<p>Your Verification OTP </p>
        <h1> ${newOtp} </h1>
    `,
  });

  res.json({ message: 'New Otp has been sent to your email' });
};

module.exports = {
  signUp,
  signIn,
  verifyEmail,
  resendEmailVerificationToken,
};
