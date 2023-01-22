const asyncHandler = require("express-async-handler");
const ObjectIdVal = require("mongoose").Types.ObjectId;
const Author = require("../models/authorModel");

// @desc    Get Author
// @route   GET /api/author/getAuthor/
// @access  Public
const getAuthor = asyncHandler(async (req, res) => {
  try {
    const authors = await Author.find({}, { _id: 1, name: 1 }).sort({
      $natural: -1,
    });
    return res.status(200).send(authors);
  } catch (error) {
    return res.status(500).send({ message: "Error, try again" });
  }
});

// @desc    Get Author by Id
// @route   GET /api/author/getAuthor/:id
// @access  Public
const getAuthorById = asyncHandler(async (req, res) => {
  try {
    // console.log(`Entro: ${JSON.stringify(req.params._id)}`);
    const authors = await Author.findOne(
      { _id: req.params._id },
      { _id: 0, name: 1 }
    );
    return res.status(200).send(authors);
  } catch (error) {
    return res.status(500).send({ message: "Error, try again" });
  }
});

// @desc    Create Author
// @route   POST /api/author/newAuthor
// @access  Public
const newAuthor = asyncHandler(async (req, res) => {
  const { name } = req.body;
  if (!name || name.length < 3) {
    return res.status(400).send({
      message: "Error, a new author need a name with at least 3 chars",
    });
  }
  const author = await Author.create({
    name,
  });

  if (author) {
    return res.status(201).json({
      success: true,
      _id: author._id,
      name: author.name,
    });
  } else {
    return res
      .status(400)
      .send({ message: "Error creating the author, try again" });
  }
});

// @desc    Update Author
// @route   PUT /api/author/updateAuthor/:id
// @access  Public
const updateAuthor = asyncHandler(async (req, res) => {
  let id = req.params._id;
  if (!ObjectIdVal.isValid(id) && id !== undefined) {
    return res.status(404).send({ message: "Author not found" });
  }
  const author = await Author.findById(id);

  if (!author || author.length === 0) {
    return res
      .status(400)
      .send({ message: "Error, cant find a author with that id" });
  }

  const updatedAuthor = await Author.findByIdAndUpdate(req.params, req.body, {
    new: true,
  });

  return res.status(200).json(updatedAuthor);
});

// @desc    Delete Author
// @route   DELETE /api/author/deleteAuthor/:id
// @access  Public
const deleteAuthor = asyncHandler(async (req, res) => {
  let id = req.params._id;
  if (!ObjectIdVal.isValid(id) && id !== undefined) {
    return res.status(404).send({ message: "Author not found" });
  }
  const author = await Author.findById(id);

  if (!author || author.length === 0) {
    return res
      .status(400)
      .send({ message: "Error, cant find a author with that id" });
  }

  await author.remove();

  return res.status(200).json({
    success: true,
    id: req.params,
  });
});

module.exports = {
  getAuthor,
  newAuthor,
  updateAuthor,
  deleteAuthor,
  getAuthorById,
};
