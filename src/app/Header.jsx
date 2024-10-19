"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../img/logo.svg";
import logo2 from "../img/logo2.svg";
import img1 from "../img/img1.svg";
import img2 from "../img/img2.svg";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full lg:w-[1100px] mx-auto py-4 px-4 lg:px-6 rounded-2xl mt-4 bg-black bg-opacity-25 z-50 fixed top-0 left-0 right-0">
          <div className="flex flex-wrap justify-between items-center">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Image src={logo} className="w-[120px] lg:w-[150px]" alt="Logo" />
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex space-x-6 text-white font-light">
              <ul className="flex space-x-4 lg:space-x-6">
                <li>
                  <a href="/" className="hover:font-extrabold">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about-us" className="hover:font-extrabold">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="hover:font-extrabold">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:font-extrabold">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden flex items-center">
              <button onClick={handleMenuToggle} className="text-white">
                {/* Hamburger icon */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            {/* Icon Section */}
            <div className="hidden lg:flex items-center space-x-3">
              <Image src={img1} alt="Icon 1" />
              <Image src={img2} alt="Icon 2" />
            </div>

            {/* Login Button */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handleModalToggle}
                className="text-white bg-red-600 hover:bg-white hover:text-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-black bg-opacity-75 rounded-lg p-4 mt-2">
              {/* Close Icon */}
              <div className="flex justify-end">
                <button onClick={handleMenuToggle} className="text-white">
                  {/* Close (Cross) icon */}
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ul className="space-y-2 text-white mt-2">
                <li>
                  <a href="/" className="block hover:font-extrabold">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about-us" className="block hover:font-extrabold">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="block hover:font-extrabold">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/blog" className="block hover:font-extrabold">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Modal Section */}
        {isModalOpen && (
          <div
            id="default-modal"
            aria-hidden="true"
            className="fixed inset-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50 overflow-y-auto"
          >
            <div className="relative p-4 w-full max-w-lg lg:max-w-4xl bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                <Image src={logo2} />
                <button
                  onClick={handleModalToggle}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="flex flex-col lg:flex-row justify-between mt-5">
                {/* Left Section */}
                <div className="lg:w-1/2">
                  <h1 className="text-2xl lg:text-4xl">Hey there!</h1>
                  <p className="text-lg lg:text-xl">
                    We are thrilled to welcome you on-board with Mistry.
                  </p>
                </div>

                {/* Right Section */}
                <div className="lg:w-[40%] bg-gray-100 h-auto lg:h-[80vh] shadow-md rounded mt-4 lg:mt-0 p-5">
                  <h1 className="text-xl lg:text-2xl font-bold">
                    Register with us
                  </h1>
                  <p className="mb-5 lg:mb-10">
                    Login/Signup using your phone number & experience a
                    simplified way of purchasing building materials.
                  </p>
                  <label htmlFor="">Phone Number</label>
                  <input
                    type="number"
                    placeholder="+91 | Phone Number"
                    className="placeholder:pl-1 placeholder:text-black p-3 w-full mt-3 rounded border"
                  />
                  <button className="w-full bg-red-500 rounded py-2 text-white text-lg lg:text-xl mt-10 lg:mt-[160px]">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
