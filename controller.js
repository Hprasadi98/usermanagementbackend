const { response } = require("express");
const User = require("./model");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().exec();
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addUser = async (req, res, next) => {
  try {
    const user = new User({
      id: req.body.id,
      name: req.body.name,
    });
    const savedUser = await user.save();
    res.status(201).json({ user: savedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id, name } = req.body;
    const response = await User.updateOne({ id: id }, { $set: { name: name } }).exec();
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = req.body.id;
    const response = await User.deleteOne({ id: id }).exec();
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;

