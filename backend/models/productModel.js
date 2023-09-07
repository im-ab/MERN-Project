const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter Product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter Product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please enter Product Price"],
    maxlength: [8, "Price cannot exceed 8 characters"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter Product Category"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter Product Stocks"],
    maxlength: [4, "Stocks cannot exceed 4 characters"],
    default: 1,
  },
  numofReviews: {
    type: Number,
    default: 1,
  },
  reviews: [
    {
      name: {
        type: String,
        require: true,
      },
      reviews: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
