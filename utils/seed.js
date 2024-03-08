// Imports
const { User, Thought, Reaction } = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");


const users = [
  {
    username: "Ryan",
    email: "ryan@gmail.com",
    thoughts: [],
  },
  { username: "ThatGuy",
    email: "soqxf66@gmail.com",
    thoughts: []
  },
  { username: "TacoMan",
  email: "Tacos@gmail.com",
  thoughts: []
},
{ username: "S10skeleton",
email: "S10skeleton@gmail.com",
thoughts: []
},
{ username: "GoatCoder",
email: "thebest@gmail.com",
thoughts: []
},
{ username: "TheCEO",
email: "Iownthisplace@gmail.com",
thoughts: []
},
]
// Existing imports

// Seed data
// ... (existing users array)

// Updated thoughts array
const thoughts = [
  {
    thoughtText: "Here's a cool thought...",
    username: "Ryan", // should match a user's username
    reactions: [] // Add reactions if needed
  },
  // Add more thoughts as needed
];

// Connects to server
connection.once("open", async () => {
  console.log("connected");

  // Drop existing data
  await User.deleteMany({});
  await Thought.deleteMany({});

  // Insert thoughts into the database
  const seededThoughts = await Thought.insertMany(thoughts);

  // Associate thoughts with users
  users.forEach(user => {
    // Assuming each user should be linked to all seeded thoughts
    user.thoughts = seededThoughts.map(thought => thought._id); 
  });

  // Insert users into the database
  await User.collection.insertMany(users);

  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
