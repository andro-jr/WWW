const { DataTypes } = require('sequelize');
const { sendError } = require('../utils/helper');
const db = require('../db/index');
const { listenerCount } = require('nodemailer/lib/xoauth2');
const { passwordResetToken } = db;

exports.isValidPassResetToken = async (req, res, next) => {
  const { token, userId } = req.body;

  if (!token.trim() || !DataTypes.STRING(userId))
    return sendError(res, 'Invalid request!');

  const resetToken = await passwordResetToken.findOne({
    where: { userId: userId },
  });

  if (!resetToken)
    return sendError(res, ' access, invalid request!');

  const matched = await resetToken.compareToken(token);

  if (!matched)
    return sendError(res, 'Sorry, invalid request!');

  req.resetToken = token;
  next();

};

