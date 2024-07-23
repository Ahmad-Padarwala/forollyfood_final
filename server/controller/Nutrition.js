const connection = require("../config/connection");

// GET NUTRITION DATA
const getNutrition = (req, res) => {
  const sql = "SELECT * FROM nutrition";
  connection.query(sql, (err, data) => {
    if (err) {
      console.error("Error fetching nutrition data:", err);
      return res.status(500).json({ error: "Error fetching nutrition data" });
    }
    return res.json(data);
  });
};

// ADD NUTRITION DATA
const addNutrition = (req, res) => {
  const { prodId } = req.params;
  const {
    energy,
    total_fat,
    saturated_fat,
    trans_fat,
    cholesterol,
    sodium,
    total_carbohydrates,
    protien,
  } = req.body;
  const sql =
    "INSERT INTO nutrition (prod_id, energy, total_fat, saturated_fat, trans_fat, cholesterol, sodium, total_carbohydrates, protien) VALUES (?,?,?,?,?,?,?,?,?)";
  const data = [
    prodId,
    energy,
    total_fat,
    saturated_fat,
    trans_fat,
    cholesterol,
    sodium,
    total_carbohydrates,
    protien,
  ];
  connection.query(sql, data, (err, result) => {
    if (err) {
      console.error("Error adding record:", err);
      return res.status(500).json({ error: "Error adding record" });
    }
    console.log("Records added: " + result.affectedRows);
    return res.sendStatus(200);
  });
};

// GET NUTRITION BY ID
const getNutritionById = (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM nutrition WHERE prod_id=${id}`;
  connection.query(sql, (error, result) => {
    if (error) {
      console.error("Error fetching nutrition data:", error);
      return res.status(500).json({ error: "Error fetching nutrition data" });
    }
    return res.json(result);
  });
};

// DELETE NUTRITION DATA
const deleteNutrition = (req, res) => {
  let id = req.params.id;
  let sql = `DELETE FROM nutrition WHERE prod_id=${id}`;
  connection.query(sql, (error) => {
    if (error) {
      console.error("Error deleting nutrition data:", error);
      return res.status(500).json({ error: "Error deleting nutrition data" });
    }
    return res.sendStatus(200);
  });
};

// EDIT NUTRITION DATA
const editNutrition = (req, res) => {
  let id = req.params.id;
  const {
    energy,
    total_fat,
    saturated_fat,
    trans_fat,
    cholesterol,
    sodium,
    total_carbohydrates,
    protien,
  } = req.body;
  let sql = `UPDATE nutrition SET energy=?, total_fat=?, saturated_fat=?, trans_fat=?, cholesterol=?, sodium=?, total_carbohydrates=?, protien=? WHERE prod_id=?`;
  const data = [
    energy,
    total_fat,
    saturated_fat,
    trans_fat,
    cholesterol,
    sodium,
    total_carbohydrates,
    protien,
    id,
  ];
  console.log(data);
  connection.query(sql, data, (error) => {
    if (error) {
      console.error("Error updating nutrition data:", error);
      return res.status(500).json({ error: "Error updating nutrition data" });
    }
    return res.sendStatus(200);
  });
};

module.exports = {
  getNutrition,
  addNutrition,
  getNutritionById,
  deleteNutrition,
  editNutrition,
};
