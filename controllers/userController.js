// import
const User = require("../models/user");
const Thought = require("../models/thought");


const userController = {
  // Get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error fetching users", error: err.message });
    }
  },

  // Get a single user by ID
  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.userId);

      if (!user) {
        return res.status(404).json({ message: "No user found with this ID" });
      }
      res.json(user);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error fetching user", error: err.message });
    }
  },

  // Create a new user
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error creating user", error: err.message });
    }
  },

  // Update a user by ID
  async updateUser(req, res) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        req.body,
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "No user found with this ID" });
      }
      res.json(updatedUser);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error updating user", error: err.message });
    }
  },

// Delete a user by ID and their associated thoughts
async deleteUser(req, res) {
  try {
    const userId = req.params.userId;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "No user found with this ID" });
    }

    // Delete associated thoughts
    await Thought.deleteMany({ username: deletedUser.username });

    res.json({ message: "User and associated thoughts successfully deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user", error: err.message });
  }
},


  // Add friend to user
  async addFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $addToSet: { friends: req.params.friendId } },
        { new: true, runValidators: true }
      );
      if (!user) {
        return res.status(404).json({ message: "No user found with this ID" });
      }
      res.json(user);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error adding friend", error: err.message });
    }
  },

  // delete friend from user
  async deleteFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: "No user found with this ID" });
      }
      res.json(user);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error deleting friend", error: err.message });
    }
  },
};

// export
module.exports = userController;
