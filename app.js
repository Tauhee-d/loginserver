const express = require("express");
const app = express();
require("dotenv/config");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("db connected");
    else console.log("db error");
  }
);

app.use(bodyParser.json());
app.get("/bro", (req, res) => {
  res.send("Hello world");
});

const AddOutPatientRoute = require("./routes/routeAddOutPatient");
app.use("/addOP", AddOutPatientRoute);

const PaymentRoute = require("./routes/routePayment");
app.use("/payment", PaymentRoute);
app.use("/payment/id:", PaymentRoute);

const UserRoute = require("./routes/routeUser");
app.use("/user", UserRoute);

app.listen(port, () => {
  console.log("server is started");
});
