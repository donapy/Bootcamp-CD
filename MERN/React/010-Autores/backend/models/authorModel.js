const mongoose = require("mongoose");

const authorSchema = mongoose.Schema(
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

module.exports = mongoose.model("author", authorSchema);
