const mongoose = require("mongoose");
const validator = require("validator");

// Modèle de User

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
      validate(v) {
        if (!validator.matches(v, /^[a-z\d\-_\s]+$/i))
          throw new Error("Le prénom ne doit contenir que des caractères.");
      },
    },
    lastName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
      validate(v) {
        if (!validator.matches(v, /^[a-z\d\-_\s]+$/i))
          throw new Error("Le nom ne doit contenir que des caractères.");
      },
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
