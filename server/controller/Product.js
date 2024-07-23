const connection = require("../config/connection");

//GET PRODUCT DATA
const getProduct = (req, res) => {
  const sql = "SELECT * FROM product";
  connection.query(sql, (error, result) => {
    if (error) {
      console.log("Error Getting Data Product Table in server.js" + error);
    }
    return res.json(result);
  });
};

//ADD PRODUCT DATA
const addProduct = (req, res) => {
  try {
    const {
      brand_id,
      cate_id,
      title,
      short_desc,
      long_desc,
      status,
      slider,
      popular,
    } = req.body;

    if (!brand_id || !cate_id || !title || !req.file) {
      return res.status(400).send("Missing required fields");
    }

    const imagePath = req.file.filename;
    const sql =
      "INSERT INTO product (brand_id, cate_id, title, short_desc, long_desc, image,status,slider,popular) VALUES (?,?,?,?,?,?,1,0,0)";
    const data = [
      brand_id,
      cate_id,
      title,
      short_desc,
      long_desc,
      imagePath,
      status,
      slider,
      popular,
    ];

    connection.query(sql, data, (error) => {
      if (error) {
        console.log("Error Adding product Data in server.js: ", error);
        return res.status(500).send("Error adding product data");
      } else {
        return res.sendStatus(200);
      }
    });
  } catch (error) {
    console.log("Error in server.js: ", error);
    return res.status(500).send("Internal server error");
  }
};

//DELETE PRODUCT DATA
const deleteProduct = (req, res) => {
  let id = req.params.id;
  let sql = `DELETE FROM product WHERE prod_id=${id}`;
  connection.query(sql, (error) => {
    if (error) {
      console.log("Error Delete Product Data in server.js" + error);
    }
    res.sendStatus(200);
  });
};

//EDIT PRODUCT STATUS
const getEditProduct = (req, res) => {
  let { id, number } = req.params;
  if (number === "1") {
    const sql = "SELECT * FROM product WHERE status=1";
    connection.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  } else if (number === "2") {
    const sql = "SELECT * FROM product WHERE slider=1";
    connection.query(sql, (err, data) => {
      if (err) {
        console.error("Error fetching product data:", err);
        return res.json(err);
      }
      return res.json(data);
    });
  } else if (number === "3") {
    const sql = `SELECT * FROM product WHERE popular=1 LIMIT 4`;
    connection.query(sql, (err, data) => {
      if (err) {
        console.error("Error fetching product data:", err);
        return res.json(err);
      }
      return res.json(data);
    });
  } else if (number === "4") {
    const sql = `SELECT * FROM product WHERE status=1 LIMIT 12`;
    connection.query(sql, (err, data) => {
      if (err) {
        console.error("Error fetching product data:", err);
        return res.json(err);
      }
      return res.json(data);
    });
  } else {
    const sql = `SELECT * FROM product WHERE prod_id=${id}`;
    connection.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  }
};

const editProduct = (req, res) => {
  const { prodId, num } = req.params;
  const { status, slider, popular } = req.body;

  if (num == 0) {
    const query = "UPDATE product SET status=? WHERE prod_id=?";
    connection.query(query, [status, prodId, num], (error) => {
      if (error) {
        console.log("Error updating product status:", error);
        res.status(500).send("Error updating product status");
      } else {
        res.sendStatus(200);
      }
    });
  } else if (num == 1) {
    const query = "UPDATE product SET slider=? WHERE prod_id=?";
    connection.query(query, [slider, prodId, num], (error) => {
      if (error) {
        console.log("Error updating product slider:", error);
        res.status(500).send("Error updating product slider");
      } else {
        res.sendStatus(200);
      }
    });
  } else if (num == 2) {
    const query = "UPDATE product SET popular=? WHERE prod_id=?";
    connection.query(query, [popular, prodId, num], (error) => {
      if (error) {
        console.log("Error updating product popular:", error);
        res.status(500).send("Error updating product popular");
      } else {
        res.sendStatus(200);
      }
    });
  } else {
    try {
      const { brand_id, cate_id, title, short_desc, long_desc } = req.body;
      if (!brand_id && !cate_id && !title && !short_desc && !long_desc) {
        return res.status(400).send("Missing required fields");
      }
      let imagePath = "";
      if (req.file) {
        imagePath = req.file.filename;
        const sql =
          "UPDATE product SET brand_id=?, cate_id=?, title=?, short_desc=?, long_desc=?, image=? WHERE prod_id=?";
        const data = [
          brand_id,
          cate_id,
          title,
          short_desc,
          long_desc,
          imagePath,
          prodId,
        ];
        connection.query(sql, data, (error) => {
          if (error) {
            console.log("Error updating product data in server.js: ", error);
            return res.status(500).send("Error updating data");
          } else {
            return res.sendStatus(200);
          }
        });
      } else {
        const sql =
          "UPDATE product SET brand_id=?, cate_id=?, title=?, short_desc=?, long_desc=? WHERE prod_id=?";
        const data = [brand_id, cate_id, title, short_desc, long_desc, prodId];
        connection.query(sql, data, (error) => {
          if (error) {
            console.log("Error updating product data in server.js: ", error);
            return res.status(500).send("Error updating data");
          } else {
            return res.sendStatus(200);
          }
        });
      }
    } catch (error) {
      console.log("Error in server.js: ", error);
      return res.status(500).send("Internal server error");
    }
  }
};

const getSliderProduct = (req, res) => {
  const sql = "SELECT * FROM product WHERE status=1 AND slider=1";
  connection.query(sql, (error, result) => {
    if (error) {
      console.log("Error Getting Data Product Table in server.js" + error);
    }
    return res.json(result);
  });
};

const getViewProductData = (req, res) => {
  const { title } = req.params;
  const sql = `SELECT * FROM product WHERE status=1 AND title='${title}'`;
  connection.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

module.exports = {
  getProduct,
  addProduct,
  deleteProduct,
  getEditProduct,
  editProduct,
  getSliderProduct,
  getViewProductData,
};
