const express = require("express");
const router = express.Router();

const Inquiry = require("../controller/Inquiry");

router.route("/inquiry").get(Inquiry.getInquiry).post(Inquiry.addInquiry);
router
  .route("/inquiry/:id")
  .delete(Inquiry.deleteInquiry)
  .get(Inquiry.viewInquiry);

module.exports = router;
