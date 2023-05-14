const UserModel = require("../models/user.model");
const { registerErrors } = require("../utils/errors.utils");

module.exports.register = async (req, res) => {
  const { firstName, lastName } = req.body;

  try {
    const user = await UserModel.create({ firstName, lastName });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = registerErrors(err);
    res.status(200).send({ errors });
  }
};

// Obtenir tous les utilisateurs sans le mdp

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find();
  res.status(200).json(users);
};
