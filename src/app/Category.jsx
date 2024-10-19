"use client";
import React from "react";
import Slider from "react-slick";
import safe from "../img/safe.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import b1 from "../img/Inox.png";
import b2 from "../img/jaquar.png";
import b3 from "../img/kara.png";
import b4 from "../img/kohler.png";
import wood from "../img/Wood.png";
import paint from "../img/paint.png";
import brand from '../img/brands.png'

export default function Category() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // For medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full bg-[#FEF5F5] py-12 px-6 md:px-20">
        <h1 className="text-3xl md:text-4xl">
          <span className="text-red-500 font-bold">
            Wide range of Categories
          </span>
          <br />
          to choose products from
        </h1>
        <div>
          <Slider {...settings} className="mt-12 rounded">
            {[
              {
                img: safe,
                title: "Safety",
              },
              {
                img: paint,
                title: "Plumbing",
              },
              {
                img: wood,
                title: "Hardware",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded p-6 mx-2">
                <div className="flex items-center">
                  <Image src={item.img} className="w-8" />
                  <h1 className="ml-2">{item.title}</h1>
                </div>
                <p className="mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Minima nam modi repellat quos quis dolorum nobis iste
                  voluptate tenetur.
                </p>
                <p className="text-xs mt-2">Top Brand</p>
                <div className="flex space-x-3 mt-2">
                  <Image src={b1} className="w-12" />
                  <Image src={b2} className="w-12" />
                  <Image src={b3} className="w-12" />
                  <Image src={b4} className="w-12" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="w-full bg-red-900 flex justify-between px-4 md:px-12 py-10 my-10">
        <div>
          <h1 className="text-white text-2xl">2000+ Product Catalogs</h1>
          <p className="text-white">
            Want to browse what’s best for your next project? We got you
            covered!
          </p>
        </div>
        <div className="bg-[url('../img/brands.png')] bg-contain w-64 bg-no-repeat py-8">
          <button className="bg-red-600 text-white rounded px-8 py-2 hover:bg-white hover:text-red-600">
            View Catalogs
          </button>
        </div>
      </div>
    </>
  );
}
