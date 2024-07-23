const connection = require("../config/connection");

//GET BRAND DATA
const getBrand = (req, res) => {
  const sql = "SELECT * FROM brand";
  connection.query(sql, (error, result) => {
    if (error) {
      console.log("Error Getting Data Brand Table in server.js" + error);
    }
    return res.json(result);
  });
};

//ADD BRAND DATA
const addBrand = (req, res) => {
  try {
    const { name } = req.body;

    if (!name || !req.file) {
      return res.status(400).send("Missing required fields");
    }

    const imagePath = req.file.filename;
    const sql = "INSERT INTO brand (name, image) VALUES (?, ?)";
    const data = [name, imagePath];

    connection.query(sql, data, (error) => {
      if (error) {
        console.log("Error Adding Brand Data in server.js: ", error);
        return res.status(500).send("Error adding Brand data"); // Sending an error response
      } else {
        return res.sendStatus(200); // Sending a success response
      }
    });
  } catch (error) {
    console.log("Error in server.js: ", error);
    return res.status(500).send("Internal server error");
  }
};

//DELETE BRAND DATA
const deleteBrand = (req, res) => {
  let id = req.params.id;
  let sql = `DELETE FROM brand WHERE brand_id=${id}`;
  connection.query(sql, (error) => {
    if (error) {
      console.log("Error Delete Brand Data in server.js" + error);
    }
    res.sendStatus(200);
  });
};

//EDIT BRAND DATA
const getEditBrand = (req, res) => {
  let id = req.params.id;
  const sql = `SELECT * FROM brand WHERE brand_id=${id}`;
  connection.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

const editBrand = (req, res) => {
  try {
    const id = req.params.id;
    const { name } = req.body;
    if (!name) {
      return res.status(400).send("Missing required fields");
    }
    let imagePath = "";
    if (req.file) {
      imagePath = req.file.filename;
      const sql = "UPDATE brand SET name=?, image=? WHERE brand_id=?";
      const data = [name, imagePath, id];

      connection.query(sql, data, (error) => {
        if (error) {
          console.log("Error updating brand data in server.js: ", error);
          return res.status(500).send("Error updating brand data");
        } else {
          return res.sendStatus(200);
        }
      });
    } else {
      const sql = "UPDATE brand SET name=? WHERE brand_id=?";
      const data = [name, id];

      connection.query(sql, data, (error) => {
        if (error) {
          console.log("Error updating brand data in server.js: ", error);
          return res.status(500).send("Error updating brand data");
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

module.exports = { getBrand, addBrand, deleteBrand, getEditBrand, editBrand };
