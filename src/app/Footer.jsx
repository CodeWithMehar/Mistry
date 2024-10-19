import React from "react";
import Image from "next/image";
import logo from "../img/fot1.svg";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdForwardToInbox } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import f from "../img/facebook.svg";
import i from "../img/instagram.svg";
import l from "../img/linkedin.svg";
import y from "../img/youtube.svg";
import w from "../img/whatsapp.svg";

export default function Footer() {
  return (
    <>
      <div className="w-full bg-[#333333] py-[70px] px-[30px] flex flex-wrap justify-between">
        <div className="w-full md:w-[25%] mb-5">
          <Image src={logo} className="w-full" alt="Footer Logo" />
        </div>
        <div className="w-full md:w-[25%] mb-5">
          <ul className="flex flex-col space-y-5 mt-5 text-white">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Partner with Us</li>
            <li>FAQ's</li>
            <li>Expert Inspection Services</li>
          </ul>
        </div>
        <div className="w-full md:w-[25%] mb-5">
          <ul className="flex flex-col space-y-5 mt-5 text-white">
            <li>Privacy Policy</li>
            <li>Return Policy</li>
            <li>Terms & Conditions</li>
            <li>Shipping & Delivery Policy</li>
            <li>FAQ's</li>
            <li>Expert Inspection Services</li>
          </ul>
        </div>
        <div className="w-full md:w-[25%] mb-5">
          <ul className="flex flex-col space-y-5 mt-5 text-white">
            <li className="text-[25px]">Contact Us</li>
            <li className="flex">
              <MdOutlinePhoneInTalk className="text-[25px] mr-3" /> +91 80708
              80707
            </li>
            <li className="flex">
              <MdForwardToInbox className="text-[25px] mr-3" /> Marketing :
              markting5151@gmail.com
            </li>
            <li className="flex">
              <MdForwardToInbox className="text-[25px] mr-3" /> Sales :
              sales5151@gmail.com
            </li>
            <li className="flex">
              <FaMapMarkerAlt className="text-[25px] mr-3" />
              <p className="text-sm">
                003, Ground Floor, Bestech Business Center Tower, Sector 48,
                Basdhahpur Sohna Road, Gurugram, Haryana, 122018
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full bg-[#333333] pb-10 px-[30px] flex flex-wrap justify-between items-center">
        <h1 className="text-white text-center md:text-left">
          Copyright © 2023 Infraequity Technologies Private Limited
        </h1>
        <div className="flex space-x-5 mt-5 md:mt-0">
          <Image src={f} alt="Facebook" />
          <Image src={i} alt="Instagram" />
          <Image src={y} alt="YouTube" />
          <Image src={w} alt="WhatsApp" />
          <Image src={l} alt="LinkedIn" />
        </div>
      </div>
    </>
  );
}
