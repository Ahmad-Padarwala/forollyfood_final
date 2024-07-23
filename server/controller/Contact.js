const connection = require("../config/connection");

//GET CONTACT DATA
const getContact = (req, res) => {
  const sql = "SELECT * FROM contact";
  connection.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

//ADD CONATCT DATA
const addContact = (req, res) => {
  const { name, password, email, subject, message } = req.body;
  const sql =
    "INSERT INTO contact (name, password, email, subject, message) VALUES (?,?,?,?,?)";
  const data = [name, password, email, subject, message];
  connection.query(sql, data, (err, result) => {
    if (err) {
      console.error("Error adding record:", err);
      res.status(500).json({ error: "Error adding record" });
    } else {
      console.log("Records added: " + result.affectedRows);
      res.sendStatus(200);
    }
  });
};

//DELETE CONATCT DATA
const deleteContact = (req, res) => {
  let id = req.params.id;
  let sql = `DELETE FROM contact WHERE id=${id}`;
  connection.query(sql, (error) => {
    if (error) {
      console.log("Error Delete Product Data in server.js" + error);
    }
    res.sendStatus(200);
  });
};

module.exports = { getContact, addContact, deleteContact };
