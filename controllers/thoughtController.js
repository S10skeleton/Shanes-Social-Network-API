const Thought = require('../models/thought'); 
const User = require('../models/user');       

// GET all thoughts
const getAllThoughts = async (req, res) => {
    // Your logic here
};

// GET a single thought by _id
const getThoughtById = async (req, res) => {
    // Your logic here
};

// POST to create a new thought
const createThought = async (req, res) => {
    // Your logic here
};

// PUT to update a thought by _id
const updateThought = async (req, res) => {
    // Your logic here
};

// DELETE to remove a thought by _id
const deleteThought = async (req, res) => {
    // Your logic here
};

// POST to add a reaction
const addReaction = async (req, res) => {
    // Your logic here
};

// DELETE to remove a reaction
const removeReaction = async (req, res) => {
    // Your logic here
};

module.exports = {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
};
