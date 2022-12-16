const asyncHandler = require("express-async-handler");
const ObjectIdVal = require("mongoose").Types.ObjectId;
const Jokes = require("../models/jokesModel");

// @desc    Get Joke
// @route   GET /api/jokes/getJoke/:_id?
// @access  Public
const getJoke = asyncHandler(async (req, res) => {
  try {
    let id = req.params.id;
    // console.log(`Id: ${id}\n${typeof id}\n${ObjectId.isValid(id)}`);
    let jokes;

    if (!ObjectIdVal.isValid(id) && id !== undefined) {
      jokes = {};
      return res.status(404).send({ message: "Joke not found" });
    }
    if (id === undefined) {
      jokes = await Jokes.find({});
    } else {
      jokes = await Jokes.find({ _id: id });
      if (jokes.length === 0) {
        return res.status(404).send({ message: "Joke not found" });
      }
    }

    return res.status(200).send(jokes);
  } catch (error) {
    return res.status(500).send({ message: "Error, try again" });
  }
});

// @desc    Create Joke
// @route   POST /api/jokes/newJoke
// @access  Public
const newJoke = asyncHandler(async (req, res) => {
  const { setup, punchline } = req.body;
  if (!setup || !punchline) {
    return res.status(400).send({
      message: "Error, a new joke need a punchline and setup",
    });
  }
  const joke = await Jokes.create({
    setup,
    punchline,
  });

  if (joke) {
    return res.status(201).json({
      success: true,
      _id: joke._id,
      setup: joke.setup,
      punchline: joke.punchline,
    });
  } else {
    return res
      .status(400)
      .send({ message: "Error creating the joke, try again" });
  }
});

// @desc    Update Joke
// @route   PUT /api/jokes/updateJoke/:id
// @access  Public
const updateJoke = asyncHandler(async (req, res) => {
  let id = req.params._id;
  if (!ObjectIdVal.isValid(id) && id !== undefined) {
    return res.status(404).send({ message: "Joke not found" });
  }
  const joke = await Jokes.findById(id);

  if (!joke || joke.length === 0) {
    return res
      .status(400)
      .send({ message: "Error, cant find a joke with that id" });
  }

  const updatedJoke = await Jokes.findByIdAndUpdate(req.params, req.body, {
    new: true,
  });

  return res.status(200).json(updatedJoke);
});

// @desc    Delete Joke
// @route   DELETE /api/jokes/deleteJoke/:id
// @access  Public
const deleteJoke = asyncHandler(async (req, res) => {
  let id = req.params._id;
  if (!ObjectIdVal.isValid(id) && id !== undefined) {
    return res.status(404).send({ message: "Joke not found" });
  }
  const joke = await Jokes.findById(id);

  if (!joke || joke.length === 0) {
    return res
      .status(400)
      .send({ message: "Error, cant find a joke with that id" });
  }

  await joke.remove();

  return res.status(200).json({
    success: true,
    id: req.params,
  });
});

module.exports = {
  getJoke,
  newJoke,
  updateJoke,
  deleteJoke,
};
