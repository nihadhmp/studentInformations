import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import axios from "axios";

function List() {
  const [students, setStudents] = useState([]);

  async function getStudents() {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/students/list"
      );
      console.log(data);
      setStudents(data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(students);

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <>
      <Navbar />
      <section className="grid grid-cols-3">
        {students.map((item) => {
          return (
            <div key={item.name} className="m-10">
              <Card students={item} />
            </div>
          );
        })}
      </section>
    </>
  );
}

export default List;
