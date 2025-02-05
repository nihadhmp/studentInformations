import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="w-screen py-4 bg-amber-900 flex items-center ">
        <div className="ml-24 text-xl flex gap-16 ">
          <Link
            className={
              location.pathname !== "/"
                ? "py-2 px-4 text-amber-50 border border-amber-50 rounded-full text-xl"
                : "py-2 px-4 text-amber-900 bg-amber-50 border border-amber-50 rounded-full text-xl"
            }
            to="/"
          >
            Home
          </Link>
          <Link
            className={
              location.pathname !== "/list"
                ? "py-2 px-4 text-amber-50 border border-amber-50 rounded-full text-xl"
                : "py-2 px-4 text-amber-900 bg-amber-50 border border-amber-50 rounded-full text-xl"
            }
            to="/list"
          >
            Students
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
