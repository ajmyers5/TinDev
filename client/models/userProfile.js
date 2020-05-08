const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   synopsis: String,
//   date: { type: Date, default: Date.now }

    username:
});

const Profile = mongoose.model("Profile", userProfileSchema);

module.exports = Profile;
