const connection = require("../config/connection");

//GET TOP SLIDER DATA
const getSlider = (req, res) => {
  const sql = "SELECT * FROM top_slider";
  connection.query(sql, (error, result) => {
    if (error) {
      console.log("Error Getting Data Top Slider Table in server.js" + error);
    }
    return res.json(result);
  });
};

//ADD TOP SLIDER DATA
const addSlider = (req, res) => {
  try {
    const imagePath = req.file.filename;
    const sql = "INSERT INTO top_slider (image) VALUES (?)";
    const data = [imagePath];

    connection.query(sql, data, (error) => {
      if (error) {
        console.log("Error Adding top slider Data in server.js: ", error);
        return res.status(500).send("Error adding top slider data");
      } else {
        return res.sendStatus(200);
      }
    });
  } catch (error) {
    console.log("Error in server.js: ", error);
    return res.status(500).send("Internal server error");
  }
};

//DELETE TOP SLIDER DATA
const deleteSlider = (req, res) => {
  let id = req.params.id;
  let sql = `DELETE FROM top_slider WHERE id=${id}`;
  connection.query(sql, (error) => {
    if (error) {
      console.log("Error Delete top slider Data in server.js" + error);
    }
    res.sendStatus(200);
  });
};

module.exports = {
  getSlider,
  addSlider,
  deleteSlider,
};
