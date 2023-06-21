const db = require('../db/index');
const Users = db.users;

//@desc Register new User
//@route POST /api/user/register
//@access PUBLIC
const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  console.log(name, email, password);

  const createdUser = await Users.create({
    name,
    email,
    password,
  });

  res.json(createdUser);
};

module.exports = {
  signUp,
};
