import React, { useContext, useEffect, useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { FaUser } from "react-icons/fa";

import "./Header.css";
import { Link } from "react-router-dom";
import { myContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const [theme, setTheme] = useState("Light");
  const toggleTheme = () => {
    if (theme === "Light") {
      setTheme("Dark");
    } else {
      setTheme("Light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const { user, logOut } = useContext(myContext);
  const handelLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };

  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md  text-black md:text-white bg-gradient-to-r from-red-900 via-red-800 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800  rounded-lg  px-5 py-2.5 text-center ">
      <nav className=" w-full">
        <div
          onClick={() => setOpen(!open)}
          className="h-10 w-10 text-black md:text-white-500 md:hidden "
        >
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>

        <ul
          className={`md:flex p-5 justify-between z-50   md:static absolute ${
            open ? "top-70" : "top-[-420px]"
          } duration-500 ease-in }`}
        >
          <div className=" hidden   md:block ">
            <Link
              to="/"
              className="w-full font-bold text-xl sm:text-3xl block flex"
            >
              <AcademicCapIcon className="h-15 w-10 text-black md:text-white bg-cyan-400 rounded-xl hover:bg-white hover:text-cyan-600 transition delay-150 duration-300 ease-in-out"></AcademicCapIcon>
              <h1 className="text-cyan-400 mx-2"> Pro</h1>Skill
            </Link>
          </div>

          <div className=" flex  flex-col md:flex-row gap-6 mt-2  bg-blue-300 rounded-lg md:bg-transparent p-10 md:p-0">
            <Link
              className="font-bold hover:text-cyan-600 text-black md:text-white border border-white bg-white md:bg-transparent md:border-0  rounded-lg text-center transition delay-150 duration-150 ease-in-out"
              to="/"
            >
              Home
            </Link>
            <Link
              className="font-bold hover:text-cyan-600 text-black md:text-white border border-white bg-white md:bg-transparent md:border-0  rounded-lg text-center "
              to="/courses"
            >
              Courses
            </Link>

            <Link
              className="font-bold hover:text-cyan-600 text-black md:text-white border border-white bg-white md:bg-transparent md:border-0  rounded-lg text-center "
              to="/blog"
            >
              Blog
            </Link>
            <Link
              className="font-bold hover:text-cyan-600 text-black md:text-white border border-white bg-white md:bg-transparent md:border-0  rounded-lg text-center "
              to="/faq"
            >
              Contact
            </Link>
          </div>
          <div className="flex gap-6">
            <div className="hidden md:block">
              {user?.photoURL ? (
                <img
                  className=" rounded-full"
                  style={{ height: "50px" }}
                  src={user?.photoURL}
                  alt={user?.displayName}
                  title={user?.displayName}
                />
              ) : (
                <FaUser
                  className="mt-2 w-10 h-8"
                  title={user?.displayName}
                ></FaUser>
              )}
            </div>
            <div className="mt-1">
              {user?.uid ? (
                <button
                  onClick={handelLogOut}
                  type="button"
                  className=" hidden md:block text-black md:text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-8 py-2 text-center mr-2 mb-2"
                >
                  Log Out
                </button>
              ) : (
                <Link to="/login">
                  <button
                    type="button"
                    className=" hidden md:block text-black md:text-white bg-gradient-to-r from-cyan-400 via-cyan-400 to-cyan-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-cyan-400 font-medium rounded-lg text-base px-8 py-2 text-center mr-2 mb-2"
                  >
                    Log In
                  </button>
                </Link>
              )}
            </div>
            <button className="font-bolder  hidden md:block rounded-full border p-2 bg-slate-400" onClick={toggleTheme}>{theme}</button>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
