const router = require("express").Router();
const userController = require("../controllers/user.controller");

// Partie authentification

router.post("/register", function (req, res) {
  userController.register;
});

// Partie user BDD

router.get("/", function (req, res) {
  userController.getAllUsers;
});

module.exports = router;
