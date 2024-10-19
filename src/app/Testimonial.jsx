"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import blog from "../img/blog.webp";
import blog1 from "../img/blog1.webp";
import blog2 from "../img/blog2.webp";
import Image from "next/image";
import mi1 from "../img/mi1.jpeg";
import mi2 from "../img/mi2.jpg";
import mi3 from "../img/mi3.jpg";
import Header from "./Header";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <div className="w-full bg-[#F3F3F3] py-10 px-5 overflow-hidden"> {/* Add overflow-hidden */}
        <h1 className="text-3xl font-semibold my-5 text-center">
          What our Professionals say about us!
        </h1>
        <Slider {...settings} className="slide2">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="p-4">
              <h3 className="text-center font-bold">Ashok Sharma</h3>
              <h3 className="text-sm text-center">New Delhi</h3>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ipsum explicabo nam expedita illo architecto eaque sequi
                cumque. Alias, inventore saepe iusto sit qui cum neque
                doloribus odit quae similique provident? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Id totam quia
                necessitatibus eius, repudiandae nam adipisci reprehenderit!
                Necessitatibus, ratione quae laboriosam iste magni facilis,
                praesentium eius debitis reprehenderit perspiciatis tempore!
              </p>
            </div>
          ))}
        </Slider>
      </div>
      {/* blog section */}
      <div className="w-full py-10 px-5">
        <h1 className="text-3xl mb-5 font-bold text-center">Blogs</h1>
        <div className="flex flex-wrap justify-between">
          {[blog, blog1, blog2].map((image, index) => (
            <div key={index} className="w-full md:w-[30%] rounded-xl shadow-xl mb-4">
              <Image src={image} className="rounded-xl" layout="responsive" width={500} height={300} />
              <p className="font-bold text-lg py-4 px-5">
                How ‘Select my Designer’ simplifies your search for an ideal interior designer?
              </p>
              <p className="px-5 py-2 font-bold text-red-600 flex items-center justify-center">
                Read More <IoIosArrowRoundForward className="text-lg ml-1" />
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* news section */}
      <div className="w-full py-10 px-5 bg-[#F3F3F3]">
        <h1 className="text-3xl mb-5 font-bold text-center">Mistry.Store in News</h1>
        <div className="flex flex-wrap justify-between">
          {[mi3, mi1, mi2].map((image, index) => (
            <div key={index} className="w-full md:w-[30%] rounded-xl shadow-xl mb-4">
              <Image src={image} className="rounded-xl" layout="responsive" width={500} height={300} />
              <p className="font-bold text-lg py-4 px-5">
                How ‘Select my Designer’ simplifies your search for an ideal interior designer?
              </p>
              <p className="px-5 py-2 font-bold text-red-600 flex items-center justify-center">
                Read More <IoIosArrowRoundForward className="text-lg ml-1" />
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
