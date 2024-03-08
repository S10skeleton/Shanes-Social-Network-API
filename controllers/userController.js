const User = require('../models/user'); // Update the path according to your file structure

const userController = {
  // Get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      // .populate({ path: "thoughts", select: "-__v" }); 
      // .populate({ path: "friends", select: "-__v" }); 
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: "Error fetching users", error: err.message });
    }
  },

  // Get a single user by ID
  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.userId);
      // .populate({ path: "thoughts", select: "-__v" }); 
      // .populate({ path: "friends", select: "-__v" }); 
      if (!user) {
        return res.status(404).json({ message: "No user found with this ID" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: "Error fetching user", error: err.message });
    }
  },

  // Create a new user
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (err) {
      res.status(500).json({ message: "Error creating user", error: err.message });
    }
  },

  // Update a user by ID
  async updateUser(req, res) {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: "No user found with this ID" });
      }
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json({ message: "Error updating user", error: err.message });
    }
  },

  // Delete a user by ID
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.userId);
      if (!deletedUser) {
        return res.status(404).json({ message: "No user found with this ID" });
      }
      res.json({ message: "User successfully deleted" });
    } catch (err) {
      res.status(500).json({ message: "Error deleting user", error: err.message });
    }
  }
};

module.exports = userController;
