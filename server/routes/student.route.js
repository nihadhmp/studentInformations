const express = require("express");
const {
  createStudent,
  listStudents,
  deleteStudent,
  getStudent,
  updateStudent,
} = require("../controllers/student.controler");
const studentRouter = express.Router();

studentRouter.post("/create", createStudent);

studentRouter.get("/list", listStudents);

studentRouter.delete("/delete", deleteStudent);

studentRouter.get("/one", getStudent);

studentRouter.put("/update", updateStudent);

module.exports = { studentRouter };
