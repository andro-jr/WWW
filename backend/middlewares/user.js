const { DataTypes } = require('sequelize');
const { sendError } = require('../utils/helper');
const db = require('../db/index');
const { passwordResetToken } = db;

exports.isValidPassResetToken = async (req, res, next) => {
  const { token, userId } = req.body;

  if (!token.trim() || !DataTypes.STRING(userId))
    return sendError(res, 'Invalid request!');



  try {
    const resetToken = await passwordResetToken.findOne({
      where: { userId: userId },
    });

    console.log('resetToken', resetToken)


    if (!resetToken)
      return sendError(res, ' access, invalid request!');

    const matched = await resetToken.compareToken(token);

    console.log('matched', matched)

    if (!matched)
      return sendError(res, 'Sorry, invalid request!');

    req.resetToken = resetToken;
    next();
  } catch (error) {
    console.error(error);
    return sendError(res, 'Internal server error');
  }
};
