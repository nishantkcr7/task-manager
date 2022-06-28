const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("Users", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error("Not a valid email.");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate: (value) => {
      if (value < 0) {
        throw new Error("Age can't be less than 0");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate: (value) => {
      if (value.length <= 6) {
        throw new Error("Password Must be long than 6 character.");
      }
      if (value.includes("password")) {
        throw new Error("Password should not contain word 'password'");
      }
    },
  },
});

module.exports = User;
