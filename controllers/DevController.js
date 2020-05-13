const axios = require("axios");
const Dev = require("../models/Dev");

module.exports = {
  async index(req, res) {
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);

    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } },
        { _id: { $nin: loggedDev.likes } },
        { _id: { $nin: loggedDev.dislikes } },
      ],
    });

    return res.json(users);
  },
  async store(req, res) {
    const { username } = req.body;

    const userExists = await Dev.findOne({
      user: username,
    });

    if (userExists) {
      return res.status(200).json(userExists);
    }

    const response = await axios
      .get(`https://api.github.com/users/${username}`)
      .catch((err) => res.status(422).json(err));

    let devObject = {};

    devObject.name = response.data.name;
    devObject.bio = response.data.bio;
    devObject.avatar = response.data.avatar_url;
    devObject.user = username;
    devObject.numRepos = response.data.public_repos;
    devObject.numFollowers = response.data.followers;
    devObject.numFollowing = response.data.following;
    devObject.locationOfUser = response.data.location;

    const dev = await Dev.create(devObject);

    return res.status(200).json(dev);
  },
};
