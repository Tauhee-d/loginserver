const express = require("express");
const router = express.Router();
const modelUser = require("../models/mUser");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  if (!name || !email || !password || !confirmPassword) {
    res.status(400).send({
      error: "missing required values",
    });
    return;
  }
  const filter = { email: email };
  try {
    const user = await modelUser.findOne(filter);
    if (user) {
      res.status(406).send({
        error: "email already exists",
      });
      return;
    }
    const encrpt = bcrypt.hashSync(password, 15);
    const saveUser = new modelUser({
      name: name,
      email: email,
      password: encrpt,
    });
    await saveUser.save();
    res.status(201).send({
      message: "Registrattion Done",
    });
  } catch (err) {
    res.status(500).send({
      error: err.message,
    });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send({
      message: "missing required values",
    });
    return;
  }
});

module.exports = router;
