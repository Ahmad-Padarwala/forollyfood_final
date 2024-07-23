const express = require("express");
const router = express.Router();

const Middleware = require("../controller/Middleware");
const Category = require("../controller/Category");

router
  .route("/category")
  .get(Category.getCategory)
  .post(Middleware.uploads.single("image"), Category.addCategory);

router.route("/category/:id").delete(Category.deleteCategory);

router
  .route("/category/:id")
  .get(Category.getEditCategory)
  .put(Middleware.uploads.single("image"), Category.editCategory);

module.exports = router;
