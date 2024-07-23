const express = require("express");
const router = express.Router();

const Nutrition = require("../controller/Nutrition");

router.get("/nutrition", Nutrition.getNutrition);
router.post("/nutrition/:prodId", Nutrition.addNutrition);
router.get("/nutrition/:id", Nutrition.getNutritionById);
router.delete("/nutrition/:id", Nutrition.deleteNutrition);
router.put("/nutrition/:id", Nutrition.editNutrition);

module.exports = router;
