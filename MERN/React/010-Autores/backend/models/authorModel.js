const mongoose = require("mongoose");

const authorSchema = mongoose.Schema(
  {
    //id
    name: {
      type: String,
      require: [true, "The field name is required"],
      minLenght: [3, "The name needs at least 3 chars"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("author", authorSchema);
