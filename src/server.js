require("dotenv").config();
const mongoose = require("mongoose");
const validator = require("validator");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);

  const Subscriber = mongoose.model("Subscriber", {
    nom: {
      type: String,
      required: true,
      validate(v) {
        if (!validator.isAlpha(v, "fr-FR"))
          throw new Error("Le nom ne doit contenir que des lettres.");
        if (!validator.isLength(v, { min: 3, max: 50 }))
          throw new Error("Le nom doit avoir minimum 3 caractères.");
      },
    },
    prenom: {
      type: String,
      required: true,
      validate(v) {
        if (!validator.isAlpha(v, "fr-FR"))
          throw new Error("Le prénom ne doit contenir que des lettres.");
        if (!validator.isLength(v, { min: 3, max: 50 }))
          throw new Error("Le prénom doit avoir minimum 3 caractères.");
      },
    },
  });

  const firstPerson = new Subscriber({
    nom: "Léa",
    prenom: "Naaa",
  });
  const secondPerson = new Subscriber({
    nom: "Léandro",
    prenom: "Paredes",
  });

  const firstSave = await firstPerson.save();
  const secondSave = await secondPerson.save();

  console.log(firstSave, secondSave);
}
