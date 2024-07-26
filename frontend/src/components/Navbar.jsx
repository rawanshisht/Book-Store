import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar bg-teal-900">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-50 rounded-box z-[1] w-52 p-2 shadow"
          >
            <Link to="/home" className=" text-teal-900 mt-2">
              Browse Books
            </Link>
            <Link to="" className=" text-teal-900 mt-2">
              About us
            </Link>
            <Link to="" className=" text-teal-900 mt-2">
              Contact us
            </Link>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl  text-gray-100">
          Book Shop
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">
          <Link to="/home" className=" text-gray-100 mt-2">
            Browse Books
          </Link>
          <Link to="" className=" text-gray-100 mt-2">
            About us
          </Link>
          <Link to="" className=" text-gray-100 mt-2">
            Contact us
          </Link>
        </ul>
      </div>
      <div className="navbar-end h-4">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      {/* <div className="navbar-end">
        <a className="btn bg-gray-50 ">Button</a>
      </div> */}
    </div>
  );
};

export default Navbar;
