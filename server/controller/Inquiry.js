const connection = require("../config/connection");

//GET INQUIRY DATA
const getInquiry = (req, res) => {
  const sql = "SELECT * FROM inquiry";
  connection.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

//ADD INQUIRY DATA
const addInquiry = (req, res) => {
  const {
    name,
    role,
    company,
    email,
    number,
    address,
    country,
    state,
    city,
    inquiryType,
    message,
  } = req.body;
  const sql =
    "INSERT INTO inquiry (name, role, company, email, number, address, country, state, city, inquiryType, message) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
  const data = [
    name,
    role,
    company,
    email,
    number,
    address,
    country,
    state,
    city,
    inquiryType,
    message,
  ];
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

//DELETE INQUIRY DATA
const deleteInquiry = (req, res) => {
  let id = req.params.id;
  let sql = `DELETE FROM inquiry WHERE id=${id}`;
  connection.query(sql, (error) => {
    if (error) {
      console.log("Error Delete Product Data in server.js" + error);
    }
    res.sendStatus(200);
  });
};

//VIEW INQUIRY DATA
const viewInquiry = (req, res) => {
  let id = req.params.id;
  const sql = `SELECT * FROM inquiry WHERE id=${id}`;
  connection.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

module.exports = { getInquiry, addInquiry, deleteInquiry, viewInquiry };
