const Category = require("../models/Category");

exports.getAll = async (req, res) => {
  try {
    const query = req.query;
    const filter = {
      parentId: null,
    };
    if (query.parentId) {
      filter.parentId = query.parentId;
    }
    const categories = await Category.find(filter);
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category)
      return res.status(404).json({ message: "Category not found!" });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createOne = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOne = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!category)
      return res.status(404).json({ message: "Category not found!" });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category)
      return res.status(404).json({ message: "Category not found!" });
    res.status(200).json({ message: "Category deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
