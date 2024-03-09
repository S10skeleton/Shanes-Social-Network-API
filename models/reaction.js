// imports
const { Schema, Types } = require("mongoose");
// Schema for reactions
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => timestamp.toLocaleString(), // Format as needed
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
// export
module.exports = reactionSchema;
