const connection = require("../config/connection");

//GET CATEGORY DATA
const getCategory = (req, res) => {
  const sql = "SELECT * FROM category";
  connection.query(sql, (error, result) => {
    if (error) {
      console.log("Error Getting Data Brand Table in server.js" + error);
    }
    return res.json(result);
  });
};

//ADD CATEGORY DATA
const addCategory = (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description || !req.file) {
      return res.status(400).send("Missing required fields");
    }

    const imagePath = req.file.filename;
    const sql =
      "INSERT INTO category (name,description, image) VALUES (?,?, ?)";
    const data = [name, description, imagePath];

    connection.query(sql, data, (error) => {
      if (error) {
        console.log("Error Adding category Data in server.js: ", error);
        return res.status(500).send("Error adding category data");
      } else {
        return res.sendStatus(200);
      }
    });
  } catch (error) {
    console.log("Error in server.js: ", error);
    return res.status(500).send("Internal server error");
  }
};

//DELETE CATEGORY DATA
const deleteCategory = (req, res) => {
  let id = req.params.id;
  let sql = `DELETE FROM category WHERE cate_id=${id}`;
  connection.query(sql, (error) => {
    if (error) {
      console.log("Error Delete Category Data in server.js" + error);
    }
    res.sendStatus(200);
  });
};

//EDIT CATEGORY DATA
const getEditCategory = (req, res) => {
  let id = req.params.id;
  const sql = `SELECT * FROM category WHERE cate_id=${id}`;
  connection.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};
const editCategory = (req, res) => {
  try {
    const id = req.params.id;
    const { name, description } = req.body;
    if (!name && !description) {
      return res.status(400).send("Missing required fields");
    }
    let imagePath = "";
    if (req.file) {
      imagePath = req.file.filename;
      const sql =
        "UPDATE category SET name=?,description=?, image=? WHERE cate_id=?";
      const data = [name, description, imagePath, id];

      connection.query(sql, data, (error) => {
        if (error) {
          console.log("Error updating category data in server.js: ", error);
          return res.status(500).send("Error updating category data");
        } else {
          return res.sendStatus(200);
        }
      });
    } else {
      const sql = "UPDATE category SET name=?,description=? WHERE cate_id=?";
      const data = [name, description, id];

      connection.query(sql, data, (error) => {
        if (error) {
          console.log("Error updating category data in server.js: ", error);
          return res.status(500).send("Error updating category data");
        } else {
          return res.sendStatus(200);
        }
      });
    }
  } catch (error) {
    console.log("Error in server.js: ", error);
    return res.status(500).send("Internal server error");
  }
};

module.exports = {
  getCategory,
  addCategory,
  deleteCategory,
  getEditCategory,
  editCategory,
};
