const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    // required:true
  },
});
module.exports = mongoose.model("mUser", Userschema);
