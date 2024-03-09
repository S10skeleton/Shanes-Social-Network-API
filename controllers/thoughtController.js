// import
const Thought = require("../models/thought");
const User = require("../models/user");

const thoughtController = {
  // Get all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error fetching thoughts", error: err.message });
    }
  },

  // Get a single thought by ID
  async getThoughtById(req, res) {
    try {
      const thoughts = await Thought.findById(req.params.thoughtId);
      if (!thoughts) {
        return res
          .status(404)
          .json({ message: "No thought found with this ID" });
      }
      res.json(thoughts);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error fetching thoughts", error: err.message });
    }
  },

  // Create a new thought
  async createThought(req, res) {
    try {
      // Create the thought
      const newThought = await Thought.create(req.body);

      // Find user by username and add thought ID to their thoughts array
      await User.findOneAndUpdate(
        { username: req.body.username },
        { $push: { thoughts: newThought._id } },
        { new: true }
      );

      res.json(newThought);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error creating thought", error: err.message });
    }
  },

  // Update a thought by ID
  async updateThought(req, res) {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        req.body,
        { new: true }
      );
      if (!updatedThought) {
        return res
          .status(404)
          .json({ message: "No thought found with this ID" });
      }
      res.json(updatedThought);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error updating thought", error: err.message });
    }
  },

  // Delete a thought by ID
  async deleteThought(req, res) {
    try {
      const deletedThought = await Thought.findByIdAndDelete(
        req.params.thoughtId
      );
      if (!deletedThought) {
        return res
          .status(404)
          .json({ message: "No thought found with this ID" });
      }
      res.json({ message: "Thought successfully deleted" });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error deleting thought", error: err.message });
    }
  },
  // Add a reaction to a thought
  async addReaction(req, res) {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $push: { reactions: req.body } },
        { new: true, runValidators: true }
      );
      if (!updatedThought) {
        return res
          .status(404)
          .json({ message: "No thought found with this ID" });
      }
      res.json(updatedThought);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error adding reaction", error: err.message });
    }
  },

  // Remove a reaction from a thought
  async removeReaction(req, res) {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );
      if (!updatedThought) {
        return res
          .status(404)
          .json({ message: "No thought found with this ID" });
      }
      res.json(updatedThought);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error removing reaction", error: err.message });
    }
  },
};
// export
module.exports = thoughtController;
