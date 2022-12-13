const asyncHandler = require("express-async-handler");
const { faker } = require("@faker-js/faker");

//function to generate a new Fake User
function generateUser() {
  const User = {
    _id: faker.datatype.uuid(),
    nombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    telefono: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.random.numeric(),
  };
  console.log(User);
  return User;
}

// @desc    Create Usuario
// @route   GET /api/usuario/newUsuario
// @access  Public
const newUsuario = asyncHandler(async (req, res) => {
  res.status(201).send(generateUser());
});

module.exports = {
  newUsuario,
  generateUser,
};
