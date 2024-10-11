const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]

});


memberSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
  }

  next();
})


memberSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log("error", error);
  }
}

// Create a model from the schema
const Member = mongoose.model("Member", memberSchema);
module.exports = Member;
