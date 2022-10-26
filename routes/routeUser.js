const express = require("express");
const router = express.Router();
const modelUser = require("../models/mUser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

    bcrypt.hash(password, 15, function (err, hash) {
      if (err) {
        return res.send({
          message: "something wrong, Try later",
          error: err,
        });
      } else {
        const saveUser = new modelUser({
          name: name,
          email: email,
          password: hash,
        });
        saveUser.save();
        res.status(201).send({
          message: "Registrattion Done",
        });
      }
    });
  } catch (err) {
    res.status(500).send({
      error: err.message,
    });
  }
});

// login
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send({
      message: "missing required values",
    });
    return;
  }
  const filter = { email: email };
  try {
    const user = await modelUser.findOne(filter);
    if (!user) {
      res.status(404).send({
        error: "no user with this email",
      });
      return;
    }
    bcrypt.compare(password, user.password, function (err, result) {
      if (result) {
        const token = jwt.sign({ id: user._id }, "secret", {
          expiresIn: "365 days",
        });
        res.status(200).send({
          token: token,
          message: "Sucessfull loged in",
        });
      } else {
        res.status(406).send({
          error: "password does not match",
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
});

module.exports = router;
