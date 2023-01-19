const express = require("express");
const router = express.Router();
const {
  newAuthor,
  deleteAuthor,
  updateAuthor,
  getAuthor,
  getAuthorById,
} = require("../controllers/authorController");

router.get("/getAuthor/", getAuthor);

router.get("/getAuthor/:_id", getAuthorById);

router.post("/newAuthor", newAuthor);

router.put("/updateAuthor/:_id", updateAuthor);

router.delete("/deleteAuthor/:_id", deleteAuthor);

module.exports = router;
