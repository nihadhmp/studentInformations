import axios from "axios";

import { Link } from "react-router-dom";

function Card({ students }) {
  const handleDelete = async () => {
    const { data } = await axios.delete(
      "http://localhost:3000/api/students/delete",
      { _id: students._id }
    );
    console.log(data);
  };

  return (
    <>
      <section className="w-full bg-amber-900 py-5 px-6 rounded-xl">
        <div className="h-full items-center flex text-amber-50 font-medium justify-center  text-2xl gap-5">
          <ul className="flex flex-col gap-7">
            <li>Name</li>
            <li>Age</li>
            <li>Phone</li>
          </ul>
          <ul className="flex flex-col gap-7">
            <li>:</li>
            <li>:</li>
            <li>:</li>
          </ul>
          <ul className="flex flex-col gap-7">
            <li>{students.name}</li>
            <li>{students.age}</li>
            <li>{students.phone}</li>
          </ul>
        </div>
        <div className="flex gap-5 mt-5">
          <Link
            to={`/update/${students._id}`}
            className="py-2 px-4 text-amber-900 bg-amber-50 border border-amber-50 rounded-full text-xl"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="py-2 px-4 text-amber-900 bg-amber-50 border border-amber-50 rounded-full text-xl"
          >
            Delete
          </button>
        </div>
      </section>
    </>
  );
}

export default Card;
