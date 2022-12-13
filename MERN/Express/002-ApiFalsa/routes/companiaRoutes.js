const express = require("express");
const router = express.Router();
const { newCompania } = require("../controllers/companiaController");

router.get("/newCompania", newCompania);

module.exports = router;
