const asyncHandler = require("express-async-handler");
const { faker } = require("@faker-js/faker");

const { generateCompany } = require("../controllers/companiaController");
const { generateUser } = require("../controllers/usuarioController");

// @desc    Create User and Company
// @route   GET /api/companias/newCompany
// @access  Public
const newUserComp = asyncHandler(async (req, res) => {
  const userData = generateUser();
  const companyData = generateCompany();
  res.status(201).send({ userData, companyData });
});

module.exports = {
  newUserComp,
};
