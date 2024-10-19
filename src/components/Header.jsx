import React from "react";
import { Link } from "react-router-dom";
import Signin from "./auth/Signin";

const Header = () => {
  return (
    <div>
      <header className="text-white bg-white body-font drop-shadow-lg rounded-lg">
        <div className="container mx-auto gap-5  flex flex-wrap p-1 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="https://t4.ftcdn.net/jpg/07/55/63/19/360_F_755631914_ywbLJokVMiHJgd99s0BEEcx4PUPZOrZY.jpg"
              alt=""
              width={80}
              className="rounded-full"
            />
            <Link to={"/"}>
              <span className="bg-gradient-to-r from-black via-orange-500 to-red-900 bg-clip-text text-xl font-extrabold text-transparent sm:text-2xl	">
                Bawarchi™
              </span>
            </Link>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center hover:cursor-pointer text-gray-500 font-bold  hover:border-black">
            <a className="mr-5  hover:text-gray-900 ">All Recipes</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <div className="flex gap-4">
            <Link to="/Signin">
              <h2 className="inline-flex items-center text-black font-bold border-2 hover:border-black py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
                SignIn
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </h2>
            </Link>
            <Link to={"Signup"}>
              <h2 className="inline-flex items-center text-black font-bold border-2 hover:border-black py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
                SignUp
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </h2>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
