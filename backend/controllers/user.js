const db = require('../db/index');
const Users = db.users;
const EmailVerificationToken = db.emailVerificationToken;
const jwt = require('jsonwebtoken');
const PasswordResetToken = db.passwordResetToken;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const {
  sendError,
  generateOTP,
  generateMailTransporter,
} = require('../utils/mail');
const { generateRandomByte } = require('../utils/helper');
const users = require('../models/users');

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

// @desc    forget password
// @route   POST /api/users/forget-password
// @access  PUBLIC

const forgetPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) return sendError(res, 'email is missing!');

  const user = await Users.findOne({
    where: { email },
  });
  if (!user) return sendError(res, 'User not found!', 404);

  const alreadyHasToken = await PasswordResetToken.findOne({
    where: { userId: user.id },
  });

  const token = await generateRandomByte();
  console.log(token);

  const newPasswordResetToken = await PasswordResetToken.create({
    token: token,
    userId: user.id,
  });

  const resetPasswordUrl = `http://localhost:3000/reset-password?token=${token}&id=${user.id}`;

  let transport = generateMailTransporter();

  transport.sendMail({
    form: 'security@ourapp.com',
    to: user.email,
    subject: 'Reset Password Link',
    html: `
    <p>Click here to reset password </p>
    <a href='${resetPasswordUrl}'> Change Password </a>
    `,
  });
  res.json({ token, message: 'Link sent to your email!' });
};

const sendResetPasswordTokenStatus = (req, res) => {
  res.json({ valid: true });
};

const resetPassword = async (req, res) => {
  const { newPassword, userId } = req.body;

  const user = await Users.findByPk(userId);

  const matched = await user.comparePassword(newPassword);
  if (matched)
    return sendError(
      res,
      'The new password must be different from the prev one!'
    );

  user.password = newPassword;
  await user.save();

  await PasswordResetToken.destroy({
    where: { userId },
  });

  let transport = generateMailTransporter();

  transport.sendMail({
    form: 'security@ourapp.com',
    to: user.email,
    subject: 'password reset successfully',
    html: `
    <h1> password reset successfully </h1>
<p> Now you can use new password </p>
    `,
  });
  res.json({
    message: ' YAAY!! Password Reset Sucessful! Go ahead and use your new PW',
  });
};

//@desc   Update User
//@route   PUT /api/users/update-users
//@access  PRIVATE

const updateUser = async (req, res) => {
  const { userId, name, email, password, role } = req.body;

  try {
    const user = await Users.findByPk(userId);

    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      user.role = role || user.role;

      if (password) {
        user.password = password;
      }

      const updatedUser = await user.save();

      res.json({
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
      });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// @desc   Delete User
// @route   DELETE /api/users/delete-user
// @access  PRIVATE

const deleteUser = async (req, res) => {
  const { id: userId } = req.params;

  const user = await Users.findByPk(userId);

  if (user) {
    await Users.destroy({ where: { id: userId } });

    res.json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

//@desc get all users
//@route GET /api/users/all
//@access PUBLIC

const getAllUsers = async (req, res) => {
  const allUsers = await Users.findAll();

  if (!allUsers) return sendError(res, 'Failed to get Users');

  res.json(allUsers);
};

const getSingleUser = async (req, res) => {
  const { id } = req.params;

  console.log(req.params);

  console.log(id, ' id');

  const user = await Users.findByPk(id);

  if (!user) return sendError(res, 'User not found', 404);

  return res.json(user);
};

const adminUserAdd = async (req, res) => {
  const { name, email, password, role } = req.body;

  const user = await Users.findOne({ where: { email } });
  if (user) {
    return res.json({ error: 'Email already exists!' });
  }

  const createdUser = await Users.create({
    name,
    email,
    password,
    role,
    isVerified: true,
  });

  res.json({
    user: {
      name: createdUser.name,
      email: createdUser.email,
    },
    message: 'User Created Successfully',
  });
};

module.exports = {
  signUp,
  signIn,
  verifyEmail,
  resendEmailVerificationToken,
  forgetPassword,
  resetPassword,
  sendResetPasswordTokenStatus,
  resetPassword,
  sendResetPasswordTokenStatus,
  updateUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  adminUserAdd,
};
