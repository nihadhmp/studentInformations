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

const deleteStudent = async (req, res) => {
  try {
    await Students.deleteOne(req.body);
    res.status(202).json({ msg: "list have been deleted" });
  } catch (error) {
    res.status(500).json({ msg: "operation failed" });
  }
};

const getStudent = async (req, res) => {
  try {
    const data = await Students.findById(req.body);
    re.status(200).json(data);
  } catch (error) {
    res.status(500).json({ msg: "operation failed" });
  }
};

module.exports = { createStudent, listStudents, deleteStudent, getStudent };
