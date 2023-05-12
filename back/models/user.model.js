const mongoose = require("mongoose");
const { isAlpha } = require("validator");

// Modèle de User

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      validate: [isAlpha],
      minlength: 3,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: true,
      validate: [isAlpha],
      minlength: 3,
      maxlength: 50,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
