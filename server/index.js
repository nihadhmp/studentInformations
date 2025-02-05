// server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { studentRouter } = require("./routes/student.route");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(cors());
// to read json data for server
app.use(express.json());

app.use("/api/students", studentRouter);

mongoose
  .connect(process.env.CON_STRING)
  .then(() => {
    console.log("Database Connection Successfull");
  })
  .catch(() => {
    console.log("Database Connection ERROR");
  });

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
