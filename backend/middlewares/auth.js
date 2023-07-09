const db = require('../db/index');
const Users = db.users;
const { sendError } = require('../utils/mail');
const jwt = require('jsonwebtoken');

exports.isAuth = async (req, res, next) => {
  const jwtToken = req.headers?.authorization.split(' ')[1];

  if (!jwtToken) return sendError(res, 'Invalid Token');

  const decode = jwt.verify(jwtToken, process.env.JWT_SECRET);

  const { euserID: userId } = decode;

  const user = await Users.findByPk(userId);

  if (!user) return sendError(res, 'User not Found', 404);
  req.user = user;

  next();
};

exports.isAdmin = (req, res, next) => {
  const { user } = req;
  if (user.role !== 'admin') return sendError(res, 'User is not authorized');
  next();
};
