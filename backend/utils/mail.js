const nodemailer = require('nodemailer');

exports.sendError = (res, error, statusCode = 401) => {
  res.status(statusCode).json({ error });
};

exports.generateOTP = (otp_length = 6) => {
  let otp = '';
  for (let i = 1; i <= otp_length; i++) {
    let randomVal = Math.round(Math.random() * 9);
    otp += randomVal;
  }
  return otp;
};

exports.handleNotFound = (req, res) => {
  this.sendError(res, 'Not Found', 404);
};

exports.generateMailTransporter = () =>
  nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  });
