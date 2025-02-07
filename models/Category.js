const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    required: false,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
