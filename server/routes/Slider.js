const express = require("express");
const router = express.Router();

const Middleware = require("../controller/Middleware");
const Slider = require("../controller/Slider");

router
  .route("/slider")
  .get(Slider.getSlider)
  .post(Middleware.uploads.single("image"), Slider.addSlider);

router.route("/slider/:id").delete(Slider.deleteSlider);

module.exports = router;
