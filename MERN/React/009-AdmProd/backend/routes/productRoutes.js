const express = require("express");
const router = express.Router();
const {
  newProduct,
  deleteProduct,
  updateProduct,
  getProduct,
  getProductById,
} = require("../controllers/productController");

router.get("/getProduct/", getProduct);

router.get("/getProduct/:_id", getProductById);

router.post("/newProduct", newProduct);

router.put("/updateProduct/:_id", updateProduct);

router.delete("/deleteProduct/:_id", deleteProduct);

module.exports = router;
