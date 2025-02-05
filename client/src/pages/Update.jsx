import Navbar from "../components/Navbar";

function Update() {
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
              placeholder="Name"
              type="text"
              className="bg-amber-50 px-6 py-4 rounded-xl border w-full border-black text-amber-900"
            />

            <input
              placeholder="Age"
              type="number"
              className="bg-amber-50 px-6 py-4 rounded-xl border w-full border-black text-amber-900"
            />

            <input
              placeholder="Phone"
              type="number"
              className="bg-amber-50 px-6 py-4 rounded-xl border w-full border-black text-amber-900"
            />
            <button className="bg-amber-950 w-2/3 text-amber-100 text-xl font-medium py-3 border border-black rounded-xl ">
              Update
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Update;
