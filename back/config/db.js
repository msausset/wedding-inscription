const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_USER_PASS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connecté à MongoDB"))
  .catch((err) => console.log("Erreur connexion MongoDB", err));
