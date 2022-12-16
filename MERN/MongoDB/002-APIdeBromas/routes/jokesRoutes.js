const express = require("express");
const router = express.Router();
const {
  newJoke,
  deleteJoke,
  updateJoke,
  getJoke,
} = require("../controllers/jokesController");

router.get("/getJoke/:id?", getJoke);

router.post("/newJoke", newJoke);

router.put("/updateJoke/:_id", updateJoke);

router.delete("/deleteJoke/:_id", deleteJoke);

module.exports = router;
