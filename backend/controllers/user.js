//import User from "../models/user";

//@desc Register new User
//@route POST /api/user/register
//@access PUBLIC
const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  res.json({});
};

module.exports = {
  signUp,
};

