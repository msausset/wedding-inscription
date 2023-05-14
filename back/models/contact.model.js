const mongoose = require("mongoose");
const validator = require("validator");

// Modèle de User

const contactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
      validate(v) {
        if (!validator.isAlpha(v, "fr-FR"))
          throw new Error("Le prénom ne doit contenir que des caractères.");
      },
    },
    lastName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
      validate(v) {
        if (!validator.isAlpha(v, "fr-FR"))
          throw new Error("Le nom ne doit contenir que des caractères.");
      },
    },
    text: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 1000,
    },
  },
  {
    timestamps: true,
  }
);

const ContactModel = mongoose.model("contact", contactSchema);
module.exports = ContactModel;
