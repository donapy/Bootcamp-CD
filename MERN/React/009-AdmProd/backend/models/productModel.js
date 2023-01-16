const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    //id
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productSchema);
