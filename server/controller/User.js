const connection = require("../config/connection");

//GET USERS DATA
const getUser = (req, res) => {
  let uname = req.query.uname;
  const sql = `SELECT * FROM user WHERE uname='${uname}'`;
  connection.query(sql, (error, result) => {
    if (error) {
      console.log("Error Getting Data from users Table in server.js" + error);
    }
    return res.json(result);
  });
};

module.exports = { getUser };
