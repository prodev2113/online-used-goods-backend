const mongoose = require("mongoose");

module.exports = async () => {
  try {
    // eslint-disable-next-line no-undef
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout if it cannot connect
    });

    console.log("✅ MongoDB Connected Successfully!");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
  }
};
