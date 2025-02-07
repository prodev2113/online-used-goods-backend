const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: false },
});

module.exports = mongoose.model("Test", testSchema);
