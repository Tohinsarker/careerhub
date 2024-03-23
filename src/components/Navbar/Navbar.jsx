import { CgProfile } from "react-icons/cg";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/jobs'>Jobs</NavLink></li>
    <li><NavLink to='/appliedjobs'>Applied Jobs</NavLink></li>
    <li><NavLink to='/statistics'>Statistics</NavLink></li>
    <li><NavLink to='/blogs'>Blogs</NavLink></li>
  </>
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content text-white mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60 text-xl font-semibold"
          >
           {links}
            <li>
              <div className="items-start gap-2 flex flex-col">
                <div className="form-control relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="input font-xl w-36 md:w-auto bg-gray-200 rounded-full pl-12"
                  />
                  <button className="btn btn-ghost btn-circle absolute">
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
                <div className="text-4xl text-black bg-btnbg rounded-full flex items-center justify-center p-1 ">
                  <CgProfile />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-semibold">FOOD PANDA</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-navbarTextColor text-xl font-semibold">
         {links}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="items-center gap-2 hidden md:flex">
          <div className="form-control relative">
            <input
              type="text"
              placeholder="Search"
              className="input inputbg font-xl w-36 md:w-auto bg-gray-200 rounded-full pl-12"
            />
            <button className="btn btn-ghost btn-circle absolute">
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
          <div className="text-4xl bg-btnbg rounded-full flex items-center justify-center p-1 ">
            <CgProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
