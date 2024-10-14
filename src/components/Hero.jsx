import React from "react";
import Button from "./Button";
import img from "../images/banner-2.webp";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-black relative">
      <Image
        width={600}
        height={500}
        src={img}
        alt="banner"
        className="hidden xl:block absolute z-30  bottom-0 right-0"
      />
      <div className="lg:px-20 sm:px-10 px-4 pt-20 h-screen flex flex-col md:gap-12 gap-8 justify-center md:items-start items-center">
        <div className="text-white md:text-start text-center">
          <h5 className="text-[#b48e40] text-lg font-semibold">
            Welcome to Our Barbex
          </h5>
          <h1 className="lg:w-2/3 lg:text-7xl md:text-6xl sm:text-5xl text-4xl  font-bold py-4">
            Best Haircut Salon in the City
          </h1>
        </div>

        <Button text="Read More" />
      </div>
    </div>
  );
};

export default Hero;
