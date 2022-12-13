const asyncHandler = require("express-async-handler");
const { faker } = require("@faker-js/faker");

//function to generate a new Fake Company
function generateCompany() {
  const Compania = {
    _id: faker.datatype.uuid(),
    nombre: faker.company.name(),
    direccion: {
      calle: faker.address.street(),
      ciudad: faker.address.cityName(),
      estado: faker.address.state(),
      codigoPostal: faker.address.zipCodeByState(),
      pais: faker.address.country(),
    },
  };
  console.log(Compania);
  return Compania;
}

// @desc    Create Company
// @route   GET /api/companias/newCompany
// @access  Public
const newCompania = asyncHandler(async (req, res) => {
  res.status(201).send(generateCompany());
});

module.exports = {
  newCompania,
  generateCompany,
};
