"use client";
import blogImage from "../../img/blog.jpg";
import logo from "../../img/logo2.svg";
import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import bpage from "../../img/bpage2.jpeg";
import bpage2 from "../../img/blog1.webp";

export default function Page() {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-between items-center py-4 px-4">
        <div>
          <Image src={logo} className="w-[200px] md:w-[250px]" alt="Logo" />
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <IoSearchSharp className="text-[25px] mr-3" />
          <input
            type="text"
            placeholder="Search Blogs"
            className="border-b-2 placeholder:text-black placeholder:text-[15px] w-full md:w-auto"
          />
        </div>
      </div>
      <div
        className="w-full bg-cover py-[100px] h-[300px] md:h-[400px] mb-[5%]"
        style={{ backgroundImage: `url(${blogImage.src})` }}
      >
        <div className="ml-auto md:ml-[55%]">
          <h1 className="text-[20px] md:text-[30px] font-thin text-white text-left">
            Mistry.store is one stop solution for all <br />
            building material needs. <br /> We guarantee Best Prices across{" "}
            <br /> Building Materials in NCR.
          </h1>
        </div>
      </div>
      <div className="w-full text-center">
        <h1 className="text-[30px] md:text-[40px] font-thin">Blogs</h1>
        <h1 className="text-[20px] md:text-[25px] font-thin">
          All Posts <br />
          Select My Designer By Mistry.Store
        </h1>
       
        <div className="grid grid-cols-1 md:grid-cols-2 py-[30px] px-[10px] md:px-[170px] gap-5">
          {[bpage, bpage2].map((image, index) => (
            <div
              key={index}
              className="w-full h-[250px] md:h-[350px] bg-cover"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="w-full h-full bg-black opacity-60 p-5 flex flex-col justify-end">
                <h1 className="text-white text-left">Mistry.store</h1>
                <h1 className="text-white text-left">24 June 2024 . 2 min</h1>
                <p className="text-white text-left text-[20px] md:text-[25px] mt-2">
                  How ‘Select my Designer’ simplifies your search for an ideal
                  interior designer?
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-[30px] px-[10px] md:px-[170px] gap-5">
          {[bpage, bpage2].map((image, index) => (
            <div
              key={index}
              className="w-full h-[250px] md:h-[350px] bg-cover"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="w-full h-full bg-black opacity-60 p-5 flex flex-col justify-end">
                <h1 className="text-white text-left">Mistry.store</h1>
                <h1 className="text-white text-left">24 June 2024 . 2 min</h1>
                <p className="text-white text-left text-[20px] md:text-[25px] mt-2">
                  How ‘Select my Designer’ simplifies your search for an ideal
                  interior designer?
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-[30px] px-[10px] md:px-[170px] gap-5">
          {[bpage, bpage2].map((image, index) => (
            <div
              key={index}
              className="w-full h-[250px] md:h-[350px] bg-cover"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="w-full h-full bg-black opacity-60 p-5 flex flex-col justify-end">
                <h1 className="text-white text-left">Mistry.store</h1>
                <h1 className="text-white text-left">24 June 2024 . 2 min</h1>
                <p className="text-white text-left text-[20px] md:text-[25px] mt-2">
                  How ‘Select my Designer’ simplifies your search for an ideal
                  interior designer?
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-[30px] px-[10px] md:px-[170px] gap-5">
          {[bpage, bpage2].map((image, index) => (
            <div
              key={index}
              className="w-full h-[250px] md:h-[350px] bg-cover"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="w-full h-full bg-black opacity-60 p-5 flex flex-col justify-end">
                <h1 className="text-white text-left">Mistry.store</h1>
                <h1 className="text-white text-left">24 June 2024 . 2 min</h1>
                <p className="text-white text-left text-[20px] md:text-[25px] mt-2">
                  How ‘Select my Designer’ simplifies your search for an ideal
                  interior designer?
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-[30px] px-[10px] md:px-[170px] gap-5">
          {[bpage, bpage2].map((image, index) => (
            <div
              key={index}
              className="w-full h-[250px] md:h-[350px] bg-cover"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="w-full h-full bg-black opacity-60 p-5 flex flex-col justify-end">
                <h1 className="text-white text-left">Mistry.store</h1>
                <h1 className="text-white text-left">24 June 2024 . 2 min</h1>
                <p className="text-white text-left text-[20px] md:text-[25px] mt-2">
                  How ‘Select my Designer’ simplifies your search for an ideal
                  interior designer?
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-[30px] px-[10px] md:px-[170px] gap-5">
          {[bpage, bpage2].map((image, index) => (
            <div
              key={index}
              className="w-full h-[250px] md:h-[350px] bg-cover"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="w-full h-full bg-black opacity-60 p-5 flex flex-col justify-end">
                <h1 className="text-white text-left">Mistry.store</h1>
                <h1 className="text-white text-left">24 June 2024 . 2 min</h1>
                <p className="text-white text-left text-[20px] md:text-[25px] mt-2">
                  How ‘Select my Designer’ simplifies your search for an ideal
                  interior designer?
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-[30px] px-[10px] md:px-[170px] gap-5">
          {[bpage, bpage2].map((image, index) => (
            <div
              key={index}
              className="w-full h-[250px] md:h-[350px] bg-cover"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="w-full h-full bg-black opacity-60 p-5 flex flex-col justify-end">
                <h1 className="text-white text-left">Mistry.store</h1>
                <h1 className="text-white text-left">24 June 2024 . 2 min</h1>
                <p className="text-white text-left text-[20px] md:text-[25px] mt-2">
                  How ‘Select my Designer’ simplifies your search for an ideal
                  interior designer?
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Repeat similar structure for more posts */}
        {/* You can map over an array of blog post data to generate posts dynamically */}
      </div>
    </>
  );
}
