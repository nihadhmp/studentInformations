import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";

function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "http://localhost:3000/api/students/create",
      { name, age, phone }
    );
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <section className="h-screen flex justify-center bg-amber-50 items-center">
        <div className="w-1/3">
          <form className="flex flex-col bg-amber-900 items-center py-12 px-10 rounded-xl gap-8">
            <h2 className="text-amber-50 font-medium text-7xl">Welcome</h2>
            <input
              placeholder="Name"
              type="text"
              className="bg-amber-50 px-6 py-4 rounded-xl border w-full border-black text-amber-900"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="Age"
              type="number"
              className="bg-amber-50 px-6 py-4 rounded-xl border w-full border-black text-amber-900"
              onChange={(e) => setAge(e.target.value)}
            />

            <input
              placeholder="Phone"
              type="number"
              className="bg-amber-50 px-6 py-4 rounded-xl border w-full border-black text-amber-900"
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              className="bg-amber-950 w-2/3 text-amber-100 text-xl font-medium py-3 border border-black rounded-xl "
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;
