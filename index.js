const express = require("express");
const cors = require("cors");
const connectDB = require("./src/helpers/connection");
const steps = require("./src/routes/steps");
const { Schema } = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/steps", steps);

connectDB
  .then((port) => {
    app.listen(port, () => {
      //   console.log(port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
