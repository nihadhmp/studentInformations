const { Students } = require("../models/student.model");

const createStudent = async (req, res) => {
  try {
    const { name, age, phone } = req.body;
    const doc = await Students.create({ name, age, phone });
    res.status(200).json({ msg: "Document Created", doc });
    console.log(doc);
  } catch (error) {
    res.status(500).json({ msg: "internal server error" });
  }
};

const listStudents = async (req, res) => {
  const data = await Students.find();
  res.status(200).json(data);
};

module.exports = { createStudent, listStudents };
