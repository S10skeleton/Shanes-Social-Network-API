// Imports
const { User, Thought, Reaction } = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");

const users = [
  {
    username: "Ryan",
    email: "ryan@gmail.com",
    thoughts: [],
    friends: [],
  },
  { username: "ThatGuy", email: "soqxf66@gmail.com", thoughts: [], friends: []},
  { username: "TacoMan", email: "Tacos@gmail.com", thoughts: [], friends: [] },
  { username: "S10skeleton", email: "S10skeleton@gmail.com", thoughts: [], friends: [] },
  { username: "GoatCoder", email: "thebest@gmail.com", thoughts: [], friends: [] },
  { username: "TheCEO", email: "Iownthisplace@gmail.com", thoughts: [], friends: [] },
];

const thoughts = [
  {
    thoughtText: "Here's a cool thought...",
    username: "Ryan",
    reactions: [], 
  },
  {
    thoughtText: "Wow so Amazing",
    username: "TacoMan",
    reactions: [], 
  },
 
];

// Connect to server
connection.once("open", async () => {
  console.log("connected");

  // Drop existing data
  await User.deleteMany({});
  await Thought.deleteMany({});

  // Insert thoughts into the database
  const seededThoughts = await Thought.insertMany(thoughts);

  // Extract thoughts' IDs
  const ryansThoughtIds = seededThoughts
    .filter((thought) => thought.username === "Ryan")
    .map((thought) => thought._id);

  // Associate thoughts with Ryan
  users.forEach((user) => {
    if (user.username === "Ryan") {
      user.thoughts = ryansThoughtIds;
    }
  });

  // Insert users into the database
  await User.collection.insertMany(users);

  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
