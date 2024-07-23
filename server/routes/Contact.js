const express = require("express");
const router = express.Router();

const Contact = require("../controller/Contact");

router.route("/contact").get(Contact.getContact).post(Contact.addContact);
router.route("/contact/:id").delete(Contact.deleteContact);

module.exports = router;
