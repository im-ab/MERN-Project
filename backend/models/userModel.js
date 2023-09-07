const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter ur Name"],
    maxlength: [30, "Name can not exceed 30 characters"],
    minlength: [3, "Name can not be less than 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter ur Email"],
    unique: true,
    validator: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter ur Password"],
    minlength: [8, "Password should be greater than 8 characters"],
    selected: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

module.exports = mongoose.model("User", userSchema);
