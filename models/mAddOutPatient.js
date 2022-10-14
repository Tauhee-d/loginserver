const mongoose = require("mongoose");

const addOPscheme = mongoose.Schema({
  patientID: {
    type: String,
    required: true,
  },
  uniqueHID: {
    type: String,
    required: true,
  },
  fName: {
    type: String,
  },
  lName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  gName: {
    type: String,
    required: true,
  },
  gEmail: {
    type: String,
    required: true,
  },
  gPhone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  pin: {
    type: Number,
    required: true,
  },
  doctorID: {
    type: String,
    required: true,
  },
  departmentID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("addOP", addOPscheme);
