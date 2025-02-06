import axios from "axios";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Update() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState(0);
  const [id, setId] = useState(0);
  const { studentId } = useParams();
  console.log(studentId);

  const getStudent = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/students/one?id=${studentId}`
      );
      console.log(data);
      setName(data.name);
      setAge(data.age);
      setPhone(data.phone);
      setId(data._id);
    } catch (error) {
      console.log(error);
    }
  };

  const updateStudent = async () => {
    try {
      const { data } = await axios.put(
        "http://localhost:3000/api/students/update",
        {
          name: name,
          age: age,
          phone: phone,
          _id: id,
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateStudent();
  };

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <>
      <Navbar />
      <section className=" h-screen flex justify-center bg-amber-50 items-center">
        <div className="w-1/3">
          <form className="flex flex-col bg-amber-900 items-center py-12 px-10 rounded-xl gap-8">
            <h2 className="text-amber-50 font-medium text-5xl">
              Update Details
            </h2>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="bg-amber-50 px-6 py-4 rounded-xl border w-full border-black text-amber-900"
            />

            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
              className="bg-amber-50 px-6 py-4 rounded-xl border w-full border-black text-amber-900"
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              className="bg-amber-50 px-6 py-4 rounded-xl border w-full border-black text-amber-900"
            />
            <button
              className="bg-amber-950 w-2/3 text-amber-100 text-xl font-medium py-3 border border-black rounded-xl "
              onClick={handleUpdate}
            >
              Update
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Update;
