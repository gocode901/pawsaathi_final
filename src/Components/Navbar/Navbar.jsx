import "./Navbar.css";
import { React, useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className=" Nav-Bar flex  ">
      <nav className="flex items-center justify-between h-12 w-full lg:px-2">
        <div className="flex text-md font-bold text-gray-700 lg:flex-grow">
          <a
            href="#responsive-header"
            className="block lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-gray-700  no-underline"
          >
            Dog
          </a>
          <a
            href="#responsive-header"
            className="block mr-16 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-gray-700 no-underline"
          >
            Cat
          </a>
        </div>
        <div className="relative mx-auto text-gray-600 lg:block hidden">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <svg
                className="h-4 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 2a8 8 0 016.32 12.906l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z "
                />
              </svg>
            </span>
            <input
              className="bg-white h-10 pl-10 pr-8 rounded-full text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search something here!"
            />
          </div>
        </div>
        <div className="flex">
          <a
            href="#"
            className="block text-md w-4/5 rounded-2xl ml-5 mr-5 text-white font-bold hover:text-white bg-customColor no-underline whitespace-nowrap transition transform hover:scale-105 px-4 py-2"
          >
            Join the community
          </a>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-danger dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            INR
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                link
              </a>
            </li>
          </ul>
        </div>
        <div className=" w-10 h-10 text-center pl-2">
          <div className="relative w-10">
            <img
              className="w-10 h-10 rounded-full absolute"
              src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="profile"
            />
            <div className="w-10 h-10 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
              <img
                className="hidden group-hover:block w-8"
                src="https://www.svgrepo.com/show/33565/upload.svg"
                alt="profile"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
