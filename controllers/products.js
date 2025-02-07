const Product = require("../models/Product");

exports.getAll = async (req, res) => {
  try {
    const query = req.query;
    const filter = {};
    if (query.categoryId) {
      filter.categoryId = query.categoryId;
    }
    if (query.title) {
      filter.title = { $regex: query.title, $options: "i" };
    }
    const products = await Product.find(query);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ message: "Product not found!" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createOne = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOne = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product)
      return res.status(404).json({ message: "Product not found!" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product)
      return res.status(404).json({ message: "Product not found!" });
    res.status(200).json({ message: "Product deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
