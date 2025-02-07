const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    images: {
      type: [String],
      required: true,
    },
    amount: {
      type: Number,
      default: 1,
    },
    rating: {
      type: Number,
      default: 0,
    },
    // attributes: [
    //   {
    //     color: {
    //       type: String,
    //       required: true,
    //     },
    //     size: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

module.exports = mongoose.model("Product", productSchema);
