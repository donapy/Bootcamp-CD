const express = require("express");
const router = express.Router();
const {
  newProduct,
  deleteProduct,
  updateProduct,
  getProduct,
} = require("../controllers/productController");

router.get("/getProduct/:id?", getProduct);

router.post("/newProduct", newProduct);

router.put("/updateProduct/:_id", updateProduct);

router.delete("/deleteProduct/:_id", deleteProduct);

module.exports = router;
