const express = require("express");
const router = express.Router();
const { newUserComp } = require("../controllers/usercompController");

router.get("/newUserComp", newUserComp);

module.exports = router;
