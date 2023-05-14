const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoutes = require("./back/routes/user.routes");
const contactRoutes = require("./back/routes/contact.routes");
require("dotenv").config({ path: "./back/config/.env" });
require("./back/config/db");
const cors = require("cors");
const app = express();

// Autorisation cors

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

app.use(cors(corsOptions));

// req.params = url / req.body = corps du fichier / req.cookie = accès aux cookies
// Ou express.json() / express.urlencoded ==> Supporter par express nativement maintenant

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// routes

app.use("/api/user", userRoutes);
app.use("/api/contact", contactRoutes);

// serveur

app.listen(process.env.PORT, () => {
  console.log(`Demarré au port ${process.env.PORT}`);
});
