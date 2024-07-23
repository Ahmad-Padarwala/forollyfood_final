const express = require("express");
const router = express.Router();

const Middleware = require("../controller/Middleware");
const Brand = require("../controller/Brand");

router
  .route("/brand")
  .get(Brand.getBrand)
  .post(Middleware.uploads.single("image"), Brand.addBrand);

router.route("/brand/:id").delete(Brand.deleteBrand);
router
  .route("/brand/:id")
  .get(Brand.getEditBrand)
  .put(Middleware.uploads.single("image"), Brand.editBrand);

module.exports = router;
