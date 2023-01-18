const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./configs/db");
const port = process.env.PORT || 5001;

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/product", require("./routes/productRoutes")); //1

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
