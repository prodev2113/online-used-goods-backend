const User = require("../models/User");

exports.getAll = (req, res) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(404).json({ message: err.message }));
};

exports.getOne = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(404).json({ message: err.message }));
};

exports.updateOne = (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  User.findByIdAndUpdate(id, { name, email, password })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(404).json({ message: err.message }));
};

exports.deleteOne = (req, res) => {
  const { id } = req.params;
  User.findByIdAndDelete(id)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(404).json({ message: err.message }));
};
