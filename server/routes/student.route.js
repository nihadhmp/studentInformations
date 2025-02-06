const express = require("express");
const {
  createStudent,
  listStudents,
  deleteStudent,
  getStudent,
} = require("../controllers/student.controler");
const studentRouter = express.Router();

studentRouter.post("/create", createStudent);

studentRouter.get("/list", listStudents);

studentRouter.delete("/delete", deleteStudent);

studentRouter.get("/edit", getStudent);

module.exports = { studentRouter };
