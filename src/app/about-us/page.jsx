import React from "react";
import Image from "next/image";
import main from "../../img/aboutmain.png";
import about2 from "../../img/about2.jpg";
import brid from "../../img/brid.png";
import house from "../../img/house.png";
import boy from "../../img/boy.png";
import f1 from "../../img/founder1.png";
import f2 from "../../img/founder2.png";
import { MdArrowForwardIos } from "react-icons/md";
import Header from "../Header";

export default function Page() {
  return (
    <>
      <Header />
      <div className="w-full pt-[300px] px-4 md:px-10 lg:px-[100px] flex flex-col md:flex-row md:mt-[-180px]">
        <div className="w-full md:w-[50%] flex justify-center">
          <Image src={main} className="w-[400px] md:w-full" />
        </div>
        <div className="w-full md:w-[50%] flex flex-col justify-center items-start md:items-start">
          <h1 className="text-[32px] md:text-[50px] mt-[70px] font-semibold text-center md:text-left">
            An Exclusive Platform for all{" "}
            <span className="text-red-600">Home-Interior Professionals</span>
          </h1>
          <button className="bg-red-500 mt-10 text-white py-3 px-7 rounded-lg">
            Partner With Us !
          </button>
        </div>
      </div>
      
      <div className="w-full px-4 md:px-10 lg:px-[100px] flex flex-col md:flex-row pt-[100px]">
        <div className="w-full md:w-[50%]">
          <h1 className="text-red-500 font-bold text-[24px] md:text-[28px]">About Us</h1>
          <p className="text-gray-500 text-[16px] md:text-[18px]">
            Introducing Mistry.Store, India's first organized platform that
            simplifies building material purchases for home-building
            professionals like Architects, Interior Decorators, Contractors & 
            Skilled workers. <br />
            <br />A comprehensive platform dealing in over 100+ brands across
            Plywood & Boards, Hardware & Tools, Electricals & Lights, Paints & 
            Chemicals, Sanitary & Plumbing.
          </p>
        </div>
        <div className="w-full md:w-[50%] mb-[50px] flex justify-center">
          <Image src={about2} className="w-[500px] mt-[-50px] md:w-full" />
        </div>
      </div>
      
      <div className="w-full p-4 md:p-[50px] flex flex-col md:flex-row">
        <div className="w-full md:w-[50%] flex justify-center">
          <Image src={brid} className="w-full md:w-[80%]" />
        </div>
        <div className="w-full md:w-[50%] flex flex-col justify-center">
          <h1 className="text-[30px] md:text-[40px] text-red-500 py-[30px] font-bold">
            Bridging the Gap
          </h1>
          <hr />
          <p className="text-gray-500 text-[18px] md:text-[20px] mt-[20px]">
            The Indian home-building industry is already a $25+ billion market and
            growing very fast. While this creates an exciting opportunity for
            home interior professionals, they also have to deal with an
            extremely fragmented sourcing ecosystem. Depending upon the size of
            the professionals business, they face issues of price opacity,
            dealing with multiple vendors, poor customer service and ad-hoc
            earnings.
          </p>
          <p className="text-red-600 text-[16px] md:text-[18px] my-[20px] font-semibold">
            We, at Mistry.Store understand these issues and bring a one-stop
            shop that simplifies building material purchases for home interior
            professionals like interior designers, architects, contractors, and
            skilled workers.
          </p>
        </div>
      </div>
      
      <div className="w-full text-center px-4 md:px-[100px] py-[50px]">
        <h1 className="font-bold text-[24px] md:text-[30px]">
          We are building an ecosystem that is not only efficient but
          sustainable for a long-term partnership.
        </h1>
        <hr />
        <h1 className="text-red-500 font-bold my-5 text-[20px] md:text-[25px]">
          Mistry.Store Set-Up
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-[25%] flex justify-center">
            <Image src={house} className="w-[80%] md:w-full" />
          </div>
          <div className="w-full md:w-[25%] mt-[20px] md:mt-[60px] text-left">
            <p>
              Mistry.Store has one of the largest set-ups in NCR to serve all
              professionals. We have a 20,000 sq. ft. warehouse and sampling
              area in Gurugram catering to all your needs.
            </p>
          </div>
          <div className="w-full md:w-[25%] flex justify-center">
            <Image src={boy} className="w-[80%] md:w-full" />
          </div>
          <div className="w-full md:w-[25%] mt-[20px] md:mt-[60px] text-left">
            <p>
              Mistry.Store has one of the largest set-ups in NCR to serve all
              professionals. We have a 20,000 sq. ft. warehouse and sampling
              area in Gurugram catering to all your needs.
            </p>
          </div>
        </div>
        <button className="bg-red-500 text-white py-3 px-5 rounded-lg mt-7">
          Partner With Us!
        </button>
        <h1 className="text-red-500 font-bold my-10 text-[30px]">
          Meet the Founders
        </h1>

        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-x-20 md:space-y-0">
          <div className="w-full md:w-[40%] flex flex-col items-center">
            <Image src={f1} className="w-[300px]" />
            <h1 className="font-bold text-[20px] md:text-[25px]">
              Vaibhav Poddar | Co-Founder
            </h1>
            <p className="text-gray-500 text-center">
              Vaibhav has spent over 15 years in consulting and building
              businesses for companies like McKinsey & Co., Max Healthcare, and
              Antara Assisted Care (Max India Group)
            </p>
          </div>
          <div className="w-full md:w-[40%] flex flex-col items-center">
            <Image src={f2} className="w-[300px]" />
            <h1 className="font-bold text-[20px] md:text-[25px]">
              Vaibhav Poddar | Co-Founder
            </h1>
            <p className="text-gray-500 text-center">
              Vaibhav has spent over 15 years in consulting and building
              businesses for companies like McKinsey & Co., Max Healthcare, and
              Antara Assisted Care (Max India Group)
            </p>
          </div>
        </div>
      </div>
      
      <div className="w-full py-[50px] px-4 md:px-[100px] flex flex-col md:flex-row space-x-0 md:space-x-10">
        <div className="flex flex-col">
          <h1 className="text-gray-500 font-bold">Become a Mistry Partner</h1>
          <h1 className="text-[32px] md:text-[38px] text-gray-600 font-bold">
            Interested to Know More?
            <br />
            Sign up today and become a{" "}
            <span className="text-red-600">Mistry Partner!</span>
          </h1>
        </div>
        <div className="bg-red-600 w-[50px] h-[50px] rounded-full cursor-pointer flex items-center justify-center">
          <MdArrowForwardIos className="text-white text-[35px]" />
        </div>
      </div>
    </>
  );
}
