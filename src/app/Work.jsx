import React from "react";
import phon from "../img/ph.svg";
import card from "../img/ca.svg";
import note from "../img/no.svg";
import box from "../img/box.svg";
import bag from "../img/bag.svg";
import car from "../img/car.svg";
import Image from "next/image";
import phone from '../img/phoneimg.png'
import g from '../img/gogl.png';
import a from '../img/app.png';

export default function Work() {
  return (
    <>
      <div className="bg-[#FEF5F5] w-full py-[40px] text-center">
        <h1 className="text-gray-400 text-[25px] font-light">Here’s how</h1>
        <h1 className="text-[35px] text-black font-bold">Mistry.Store works</h1>
        <h1 className="text-gray-400 text-[22px]">All your home building materials, just a few steps away!</h1>
        <div className="flex flex-col md:flex-row mt-5">
          <div className="w-full md:w-[49%] pt-[40px]">
            <div className="flex flex-col items-end">
              <Image src={phon} className="w-[50px]" />
              <h1 className="bg-red-600 text-white rounded w-[25px] mt-20">2</h1>
              <h1 className="text-black pt-3 font-bold">Document Submission</h1>
              <p className="text-gray-400 text-right pr-7">
                Submit the required documents with your RM & get enrolled in the smart credit program
              </p>
            </div>
            <div className="flex flex-col items-end mt-[60px]">
              <Image src={card} className="w-[50px]" />
              <h1 className="bg-red-600 text-white rounded w-[25px] mt-20">4</h1>
              <h1 className="text-black pt-3 font-bold">Search & Send Your Requirements</h1>
              <p className="text-gray-400 text-right pr-7">
                Submit the required documents with your RM & get enrolled in the smart credit program
              </p>
            </div>
            <div className="flex flex-col items-end mt-[60px]">
              <Image src={bag} className="w-[50px]" />
              <h1 className="bg-red-600 text-white rounded w-[25px] mt-20">6</h1>
              <h1 className="text-black pt-3 font-bold">Get Delivery Support</h1>
              <p className="text-gray-400 text-right pr-7">
                Submit the required documents with your RM & get enrolled in the smart credit program
              </p>
            </div>
          </div>

          <div className="hidden md:block w-[5px] bg-red-600 mx-5"></div>

          <div className="w-full md:w-[49%]">
            <div className="flex flex-col items-start">
              <h1 className="bg-red-600 text-white rounded w-[25px] ml-7 mt-10">1</h1>
              <h1 className="text-black pt-3 font-bold">Get in touch</h1>
              <p className="text-gray-400 text-left pl-7">
                First, get in touch with Mistry.Store to be assigned a dedicated Relationship Manager (RM)
              </p>
            </div>
            <div className="flex flex-col items-start mt-[40px]">
              <Image src={note} className="w-[50px] ml-7" />
              <h1 className="bg-red-600 text-white rounded w-[25px] ml-7 mt-20">3</h1>
              <h1 className="text-black pt-3 font-bold">Credit Limit Setup and Approval</h1>
              <p className="text-gray-400 text-left pl-7">
                Your RM will assist in setting up a credit line with our partner institutions. Once approved, you are ready to order
              </p>
            </div>
            <div className="flex flex-col items-start mt-[40px]">
              <Image src={car} className="w-[50px] ml-7" />
              <h1 className="bg-red-600 text-white rounded w-[25px] ml-7 mt-20">5</h1>
              <h1 className="text-black pt-3 font-bold">Order Your Materials</h1>
              <p className="text-gray-400 text-left pl-7">
                Place your order easily through the app and get timely delivery
              </p>
            </div>
            <div className="flex flex-col items-start mt-[40px]">
              <Image src={box} className="w-[50px] ml-7" />
              <h1 className="bg-red-600 text-white rounded w-[25px] ml-7 mt-20">6</h1>
              <h1 className="text-black pt-3 font-bold">Get Delivery Support</h1>
              <p className="text-gray-400 text-left pl-7">
                Our team will ensure you get all the support needed for delivery
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-5">
          <button className="bg-red-600 text-white rounded mt-7 mb-3 px-6 py-2">Sign Up Now</button><br />
          <a href="" className="underline text-red-600">Know More</a>
        </div>
      </div>
      {/* download app */}
      <div className="w-full py-[100px] px-[10%] flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-[65%]">
          <h1 className="text-red-600 text-[30px] md:text-[40px] font-bold mt-14">Mistry.Store Download the App Now!</h1>
          <h1 className="text-[30px] md:text-[40px] text-black">to get exclusive offers</h1>
          <div className="flex mt-5">
            <Image src={g} className="w-[150px] mx-[10px]" />
            <Image src={a} className="w-[150px] mx-[10px]" />
          </div>
        </div>
        <div className="w-full md:w-[35%] mt-5 md:mt-0">
          <Image src={phone} className="w-[100%]" />
        </div>
      </div>
    </>
  );
}
