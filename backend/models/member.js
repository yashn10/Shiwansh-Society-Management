const mongoose = require("mongoose");

// Define the schema for the member
const memberSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  mobile: {
    type: Number,
    required: true,
    unique: true,
  },

  birthDate: {
    type: Date,
    required: true,
  },

  totalMember: {
    type: Number,
    required: true,
  },

  societyName: {
    type: String,
    // required: true,
  },

  houseNumber: {
    type: String,
    required: true,
  },

  photo: {
    type: String, // assuming we will store the file path/URL as a string
    // required: true,
  },

  userName: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    unique: true,
  },
});

// Create a model from the schema
const Member = mongoose.model("Member", memberSchema);
module.exports = Member;
