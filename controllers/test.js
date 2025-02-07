const Test = require("../models/Test");

exports.getAll = async (req, res) => {
  console.log("test: getAll", req.baseUrl);
  try {
    const tests = await Test.find();
    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOne = async (req, res) => {
  console.log("test: getOne", req.baseUrl);
  try {
    const test = await Test.findById(req.params.id);
    if (!test) return res.status(404).json({ message: "Test not found!" });
    res.status(200).json(test);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createOne = async (req, res) => {
  console.log("test: CreateOne", req.baseUrl);
  try {
    const test = await Test.create(req.body);
    res.status(201).json(test);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOne = async (req, res) => {
  console.log("test: updateOne", req.baseUrl);
  try {
    const test = await Test.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!test) return res.status(404).json({ message: "Test not found!" });
    res.status(200).json(test);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteOne = async (req, res) => {
  console.log("test: deleteOne", req.baseUrl);
  try {
    const test = await Test.findByIdAndDelete(req.params.id);
    if (!test) return res.status(404).json({ message: "Test not found!" });
    res.status(200).json({ message: "Test deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
