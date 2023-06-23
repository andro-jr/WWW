const PasswordResetToken = require('../models/passwordResetToken')
const { sendError } = require("../utils/helper");

const isValidPassResetToken = async (res, req, next) => {
  const { token, userId } = req.body;
}
module.exports = isValidPassResetToken;

