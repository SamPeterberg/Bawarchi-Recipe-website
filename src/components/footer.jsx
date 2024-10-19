import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-50 drop-shadow-lg rounded-lg shadow m-4 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-800 sm:text-center ">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Bawarchi™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500  sm:mt-0">
            <li>
              <a className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <Link to={"/Contact"}>
                <h2 className="hover:underline">Contact</h2>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
