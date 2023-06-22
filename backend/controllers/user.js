const db = require('../db/index');
const Users = db.users;
const jwt = require('jsonwebtoken');

//@desc Register new User
//@route POST /api/user/register
//@access PUBLIC
const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await Users.findOne({ where: { email } });
  if (user) {
    return res.json({ error: 'Email already exists!' });
  }

  const createdUser = await Users.create({
    name,
    email,
    password,
  });

  res.json(createdUser);
};

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

module.exports = {
  signUp,
  signIn,
};
