import React from "react";
import Image from "next/image";
import main from "../../img/cont.png";
import logo from "../../img/logoo.png";
import { PiDeviceMobileSpeakerFill } from "react-icons/pi";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import Header from "../Header";

export default function Page() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row pt-[180px] px-4 md:px-[100px] space-y-10 md:space-y-0 md:space-x-5">
        <div className="text-center w-full md:w-1/2">
          <h1 className="text-[28px] md:text-[35px] font-semibold">Got Questions?</h1>
          <p className="text-red-600">
            Fill in the details and we'll get in touch with you shortly!
          </p>
          <Image src={main} className="mt-[30px] w-full h-auto" alt="Contact" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-gray-500">I Want To *</h1>
          <div className="flex items-center">
            <input
              id="supplier-radio"
              type="radio"
              value="supplier"
              name="colored-radio"
              className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500"
            />
            <label htmlFor="supplier-radio" className="ms-2 text-sm text-gray-900 font-bold">
              Join Our Supplier Base
            </label>
            <input
              id="partner-radio"
              type="radio"
              value="partner"
              name="colored-radio"
              className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 ml-5"
            />
            <label htmlFor="partner-radio" className="ms-2 text-sm text-gray-900 font-bold">
              Become a Partner
            </label>
          </div>
          <div className="w-full flex flex-col mt-5">
            <input
              type="text"
              placeholder="Name"
              className="border-b-2 py-3 my-3"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border-b-2 py-3 my-3"
            />
            <input
              type="text"
              placeholder="Email"
              className="border-b-2 py-3 my-3"
            />
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900"></label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <button className="bg-red-600 text-white rounded px-5 py-2 my-[30px] w-full md:w-auto">
            Send Message
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row px-4 md:px-[100px] justify-between">
        <div className="w-full md:w-[30%] text-center mt-[100px] mb-10">
          <Image src={logo} className="mx-auto" alt="Logo" />
          <h1 className="text-gray-500">You can reach out to us at:</h1>
          <div className="flex text-red-600 space-x-2 mt-7 justify-center">
            <FaMobileScreenButton />
            <h1>+91 80708 80707</h1>
          </div>
          <div className="flex text-red-600 space-x-3 justify-center">
            <h1>For Sale</h1>
            <FaEnvelope />
            <h1>sales@mistry.store</h1>
          </div>
          <div className="flex text-red-600 space-x-3 justify-center">
            <h1>For Marketing</h1>
            <FaEnvelope />
            <h1>marketing@mistry.store</h1>
          </div>
          <h1 className="text-[20px] md:text-[25px] font-bold mt-7">
            Plot No. 24, CRPF Road Sector 61 Gurugram - 122011
          </h1>
        </div>
        <div className="w-full md:w-[50%]">
          <iframe
            className="w-full h-[250px] md:h-[400px] mt-[50px] rounded"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </div>
    </>
  );
}
