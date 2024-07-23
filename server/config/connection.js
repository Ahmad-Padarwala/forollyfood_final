const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "forolly",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("DB CONNECTED !");
  }
});

module.exports = connection;
