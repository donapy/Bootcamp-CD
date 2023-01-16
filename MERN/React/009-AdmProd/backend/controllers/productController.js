const asyncHandler = require("express-async-handler");
const ObjectIdVal = require("mongoose").Types.ObjectId;
const Product = require("../models/productModel");

// @desc    Get Product
// @route   GET /api/product/getProduct/:_id?
// @access  Public
const getProduct = asyncHandler(async (req, res) => {
  try {
    return res.status(200).send({ message: "Hello" });
  } catch (error) {
    return res.status(500).send({ message: "Error, try again" });
  }
});

// @desc    Create Product
// @route   POST /api/product/newProduct
// @access  Public
const newProduct = asyncHandler(async (req, res) => {
  const { title, price, description } = req.body;
  if (!title || !price || !description) {
    return res.status(400).send({
      message: "Error, a new product need a title, price and description",
    });
  }
  const product = await Product.create({
    title,
    price,
    description,
  });

  if (product) {
    return res.status(201).json({
      success: true,
      _id: product._id,
      title: product.title,
      price: product.price,
      description: product.description,
    });
  } else {
    return res
      .status(400)
      .send({ message: "Error creating the product, try again" });
  }
});

// @desc    Update Product
// @route   PUT /api/product/updateProduct/:id
// @access  Public
const updateProduct = asyncHandler(async (req, res) => {
  let id = req.params._id;
  if (!ObjectIdVal.isValid(id) && id !== undefined) {
    return res.status(404).send({ message: "Product not found" });
  }
  const product = await Product.findById(id);

  if (!product || product.length === 0) {
    return res
      .status(400)
      .send({ message: "Error, cant find a product with that id" });
  }

  const updatedProduct = await Product.findByIdAndUpdate(req.params, req.body, {
    new: true,
  });

  return res.status(200).json(updatedProduct);
});

// @desc    Delete Product
// @route   DELETE /api/product/deleteProduct/:id
// @access  Public
const deleteProduct = asyncHandler(async (req, res) => {
  let id = req.params._id;
  if (!ObjectIdVal.isValid(id) && id !== undefined) {
    return res.status(404).send({ message: "Product not found" });
  }
  const product = await Product.findById(id);

  if (!product || product.length === 0) {
    return res
      .status(400)
      .send({ message: "Error, cant find a product with that id" });
  }

  await product.remove();

  return res.status(200).json({
    success: true,
    id: req.params,
  });
});

module.exports = {
  getProduct,
  newProduct,
  updateProduct,
  deleteProduct,
};
