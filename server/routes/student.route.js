const express = require("express");
const {
  createStudent,
  listStudents,
} = require("../controllers/student.controler");
const studentRouter = express.Router();

studentRouter.post("/create", createStudent);

studentRouter.get("/list", listStudents);

module.exports = { studentRouter };
