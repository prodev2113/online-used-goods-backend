const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", 'seller', "user"],
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: true,
    },
    avatar: {
      type: String,
      default: "/avatar/default-avatar.svg",
    },
    address: {
      type: String,
    },
    country: {
      type: String,
    },
    phone: {
      type: String,
    },
    skypeId: {
      type: String,
    },
    telegramId: {
      type: String,
    },
    discordId: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

module.exports = mongoose.model("User", userSchema);
