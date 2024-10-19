import Image from "next/image";
import bg1 from "../img/bg.gif";
import h1 from "../img/h1.svg";
import h2 from "../img/h2.svg";
import h3 from "../img/h3.svg";
import h4 from "../img/h4.svg";
import order from "../img/o.svg";
import b from "../img/b.svg";
import arrow from "../img/2ar.svg";
import main from "../img/main.svg";
import c1 from "../img/c1.svg";
import c2 from "../img/c2.svg";
import c3 from "../img/c3.svg";
import c4 from "../img/c4.svg";
import ss from "../img/ss.png";
import Work from "./Work";
import { FaArrowRight } from "react-icons/fa";
import Category from "./Category";
import Testimonial from "./Testimonial";
import Header from "./Header";

export default function Home() {
  return (
    <>
   <Header/>
   <div className="bg-[url('../img/bg.gif')] bg-cover bg-no-repeat h-[130vh] mt-[-30px] -z-20">
  <div className="w-full h-[130vh] bg-red-600 -z-30 bg-opacity-40">
    <div className="pt-[150px] md:pt-[230px] w-full md:w-[1100px] mx-auto text-white px-4 md:px-0">
      <h1 className="text-[28px] md:text-[40px] font-bold">
        Unlock Smart Credit for Seamless Sourcing
      </h1>
      <p className="py-6 md:py-10 text-[14px] md:text-[16px]">
        Scale Your Projects with India’s First Interest-Free Credit along with
        Simplified <br className="hidden md:block" /> Material Purchases, exclusively
        for Interior Professionals
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm md:text-base">
        <div>
          <Image src={h1} />
          <h1 className="pt-3">
            Interest-Free <br />
            Credit up to 60 <br /> days
          </h1>
        </div>
        <div>
          <Image src={h2} />
          <h1 className="pt-3">
            Enjoy <br /> Guaranteed <br /> Savings
          </h1>
        </div>
        <div>
          <Image src={h3} />
          <h1 className="pt-3">
            Unlock Business <br /> Growth
          </h1>
        </div>
        <div>
          <Image src={h4} />
          <h1 className="pt-3">
            Build Market <br /> Reputation
          </h1>
        </div>
      </div>
      <div className="mt-5 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5">
        <button className="bg-red-500 rounded py-2 px-5 text-[14px]">
          Sign Up For Credit
        </button>
        <a className="underline text-white pl-5">Know More</a>
      </div>
    </div>
    <div className="flex justify-between px-5 mt-10 md:mt-0">
      <Image
        src={b}
        className="bg-red-500 rounded-full p-2 fixed top-[83vh] left-[20px] md:left-[50px] w-[50px] md:w-[60px] z-[9999]"
      />
      <Image
        src={order}
        className="bg-red-600 p-2 md:p-3 h-[50px] md:h-[60px] w-[50px] md:w-[60px] rounded-3xl mt-5 fixed top-[80vh] right-[20px] md:right-[50px] z-[9999]"
      />
    </div>
  </div>
</div>

<div className="relative w-full">
  <Image
    src={ss}
    className="w-full md:w-[900px] h-[120px] rounded-3xl absolute right-0 top-[100vh] mb-5"
  />
</div>

<div className="w-full flex flex-col md:flex-row justify-between mt-[100px] px-4 md:px-[38px] bg-[#F3F3F3] py-[20px]">
  <div className="w-full md:w-[470px]">
    <Image src={main} className="w-full md:w-[470px] h-auto" />
  </div>
  <div className="mt-10 md:mt-0">
    <div className="flex items-start space-x-3 md:space-x-5">
      <Image src={arrow} className="w-[40px] h-[40px]" />
      <h1 className="text-[20px] md:text-[28px] font-light mt-[12px]">
        <span className="text-red-600 font-bold">Mistry.Store</span> is
        Redefining the <br className="hidden md:block" />
        <span className="font-bold">Building Material Industry</span> with{" "}
        <span className="font-bold">Credit Line</span>
      </h1>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 md:mt-[100px] text-center">
      <div>
        <Image src={c1} />
        <h1>Seamless Sourcing</h1>
      </div>
      <div>
        <Image src={c2} />
        <h1>Safe & Secure Payments</h1>
      </div>
      <div>
        <Image src={c3} />
        <h1>100% Authentic Products</h1>
      </div>
      <div>
        <Image src={c4} />
        <h1>Dedicated Relationship Manager</h1>
      </div>
    </div>
    <div className="mt-10 md:mt-[60px] flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-5 ml-0 md:ml-[200px]">
      <button className="bg-red-500 rounded py-3 w-full md:w-[170px] text-[14px]">
        Sign Up For Credit
      </button>
      <a className="underline text-red-600 pl-5">Know More</a>
    </div>
  </div>
</div>

      <Category />
      <Work />
      <Testimonial/>
    </>
  );
}
