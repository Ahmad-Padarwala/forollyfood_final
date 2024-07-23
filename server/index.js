const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const Brand_Route = require("./routes/Brand");
const Category_Route = require("./routes/Category");
const Product_Route = require("./routes/Product");
const Slider_Route = require("./routes/Slider");
const User_Route = require("./routes/User");
const Nutrition_Route = require("./routes/Nutrition");
const Contact_Route = require("./routes/Contact");
const Inquiry_Route = require("./routes/Inquiry");
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json("From Forolly Server Side");
});
dotenv.config();
app.use("/", Brand_Route);
app.use("/", Category_Route);
app.use("/", Product_Route);
app.use("/", Slider_Route);
app.use("/", User_Route);
app.use("/", Nutrition_Route);
app.use("/", Contact_Route);
app.use("/", Inquiry_Route);

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on port` + process.env.PORT);
});
