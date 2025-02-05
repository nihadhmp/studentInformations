const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  phone: Number,
});

const Students = mongoose.model("student", studentSchema);

module.exports = { Students };
