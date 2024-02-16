const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  Fname: {
    type: String,
    required: true,
  },
  Lname: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
});

// Create a model named 'User' based on the LoginSchema
const user = mongoose.model("Tasks", formSchema);

module.exports = user;
