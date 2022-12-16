const mongoose = require("mongoose");

const jokesSchema = mongoose.Schema(
  {
    //id
    setup: {
      type: String,
    },
    punchline: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("jokes", jokesSchema);
