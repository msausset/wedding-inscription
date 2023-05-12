const router = require("express").Router();
const userController = require("../controllers/user.controller");

// Partie authentification

router.post("/register", userController.register);

// Partie user BDD

router.get("/", userController.getAllUsers);

module.exports = router;
