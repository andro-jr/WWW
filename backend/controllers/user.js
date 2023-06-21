const db = require('../db/index');
const User = db.users;

//@desc Register new User
//@route POST /api/user/register
//@access PUBLIC
const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (user) {
    return res.json({ error: 'Email already exists!' });
  }


  const createdUser = await User.create({
    name,
    email,
    password,
  });

  res.json(createdUser);
};

module.exports = {
  signUp,
};
