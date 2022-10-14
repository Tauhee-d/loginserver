const express = require("express");
const router = express.Router();
const modelPatient = require("../models/mAddOutPatient");
// const { serverError, bodyError, notFoundError } = require('../Exceptions/ServerError ')

router.post("/", async (req, res) => {
  console.log(req.body);
  console.log("running");

  const {
    patientID,
    uniqueHID,
    fName,
    lName,
    email,
    phone,
    age,
    weight,
    gender,
    gName,
    gEmail,
    gPhone,
    address,
    city,
    state,
    country,
    pin,
    doctorID,
    departmentID,
  } = req.body;

  if (
    !patientID ||
    !uniqueHID ||
    !fName ||
    !lName ||
    !email ||
    !phone ||
    !age ||
    !weight ||
    !gender ||
    !gName ||
    !gEmail ||
    !gPhone ||
    !address ||
    !city ||
    !state ||
    !country ||
    !pin ||
    !doctorID ||
    !departmentID
  ) {
    // console.log("body values are missing");
    return res.status(400).send({
      error: "body values are missing",
    });
    // return;
  }
  try {
    const insertedData = await modelPatient.insertMany(req.body);
    return res.status(201).json(insertedData);
  } catch (error) {
    return res.status(500).send({
      error: error.message,
    });
  }
});
router.get("/", async (req, res) => {
  try {
    const pateints = await modelPatient.find();
    res.status(200).json(pateints);
  } catch (err) {
    res.status(500).send({
      error: err.message,
    });
  }
});

module.exports = router;
