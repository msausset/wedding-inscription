const UserModel = require("../models/user.model");
const { registerErrors } = require("../utils/errors.utils");

module.exports.register = async (req, res) => {
  const { firstName, lastName } = req.body;

  try {
    const user = await UserModel.create({
      firstName,
      lastName,
    });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = registerErrors(err);
    res.status(404).send({ errors });
    // console.log(err);
  }
};

// Obtenir tous les utilisateurs sans le mdp

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password");
  res.status(200).json(users);
};
