const express = require("express");
const router = express.Router();
const { newUsuario } = require("../controllers/usuarioController");

router.get("/newUsuario", newUsuario);

module.exports = router;
