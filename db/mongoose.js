const { mongo } = require("mongoose");
const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

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

// const me = new User({
//   name: "   Anuja Chotti  ",
//   email: "anujaCHOTTi@GMAIL.com    ",
//   age: 20,
//   password: 'anujapasword'
// });

// me.save()
//   .then((me) => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const tasks = mongoose.model("Tasks", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const task = new tasks({
  description: "Completed NodeJS course.",
});

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch((error) => {
    console.log(error);
  });
