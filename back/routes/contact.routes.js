const router = require("express").Router();
const contactController = require("../controllers/contact.controller");

// Partie authentification

router.post("/contact", contactController.contact);

// Partie contact BDD

router.get("/", contactController.getAllContacts);

module.exports = router;
