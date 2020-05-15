const { Schema, model } = require("mongoose");

const DevSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    user: {
      type: String,
      required: true,
    },

    bio: String,
    avatar: {
      type: String,
      required: true,
    },

    numRepos: {
      type: Number,
      required: true,
    },

    numFollowers: {
      type: Number,
      required: true,
    },

    numFollowing: {
      type: Number,
      required: true,
    },

    locationOfUser: {
      type: String,
    },

    email: {
      type: String,
    },

    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Dev",
      },
    ],

    dislikes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Dev",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Dev", DevSchema);
