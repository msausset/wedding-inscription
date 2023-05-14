const ContactModel = require("../models/contact.model");
const { contactErrors } = require("../utils/errors.utils");

module.exports.contact = async (req, res) => {
  const { firstName, lastName, text } = req.body;

  try {
    const contact = await ContactModel.create({ firstName, lastName, text });
    res.status(201).json({ contact: contact._id });
  } catch (err) {
    const errors = contactErrors(err);
    res.status(200).send({ errors });
  }
};

// Obtenir tous les utilisateurs sans le mdp

module.exports.getAllContacts = async (req, res) => {
  const contacts = await ContactModel.find();
  res.status(200).json(contacts);
};
