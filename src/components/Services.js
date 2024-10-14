"use client";
import Image from "next/image";
import React, { useState } from "react";
import Title from "./Title";
import services from "../images/services.webp";
import services1 from "../images/services-1.webp";
import services2 from "../images/services-2.webp";
import services3 from "../images/services-3.webp";
import services4 from "../images/services-4.webp";
import services5 from "../images/services-5.webp";
import services6 from "../images/services-6.webp";
import services7 from "../images/services-7.webp";
import services8 from "../images/services-8.webp";
import services9 from "../images/services-9.webp";
import services10 from "../images/services-10.webp";
import services11 from "../images/services-11.webp";
import services12 from "../images/services-12.webp";
import smain from "../images/smain.webp";
import Button from "./Button";
import { IoCheckmark } from "react-icons/io5";

const Services = () => {
  const allServices = [
    { img: services1, img2: services7, title: "Trend Haircut" },
    { img: services2, img2: services8, title: "Hair Washing" },
    { img: services3, img2: services9, title: "Hair Color" },
    { img: services4, img2: services10, title: "Facial Hair Trim" },
    { img: services5, img2: services11, title: "Lather Shave" },
    { img: services6, img2: services12, title: "Head Massage" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(3);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="bg-[#f7f7f7] relative">
      <div className="container mx-auto md:py-40 py-20 sm:px-0  px-4">
        <Image
          src={services}
          alt="scissors"
          width={350}
          height={350}
          className="absolute -bottom-3 right-0"
        />

        <div className="pb-16 container mx-auto flex  items-center justify-center  sm:text-center">
          <div className="lg:max-w-[50%]">
            <Title
              title="Our Services"
              subheading="Popular Hair Cutting And salon"
              subtitle="Services"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {allServices.map((s, index) => (
            <div
              key={index}
              onClick={() => handleSelect(index)}
              className={`flex flex-col justify-center items-center gap-4 h-48 w-48 cursor-pointer 
            ${
              selectedIndex === index
                ? "bg-[#b48e40] text-white"
                : "bg-white text-black"
            }`}
            >
              {selectedIndex === index ? (
                <Image src={s.img2} alt="scissors" width={60} height={60} />
              ) : (
                <Image src={s.img} alt="scissors" width={60} height={60} />
              )}
              <p className="font-semibold text-xl">{s.title}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-10 gap-4 xl:px-24 lg:px-10 pt-20 ">
          <div>
            <Image src={smain} width={630} height={416} alt="about w-full" />
          </div>

          <div className="">
            <p className="sm:text-4xl text-3xl font-semibold pb-4 lg:max-w-[90%] max-w-[80%]"  >
              Best Facial Hair Trim At  Home Treatment
            </p>
            <p className="sm:text-lg text-base font-sans pb-6 pt-4">
              Phasellus vitae purus ac urna consequat facilisis a vel leo.
              Maecenas hendrerit lacinia mollis. Fusce in leo lectus. Phasellus
              leo mi, pellentesque nec risus malesuada, volutpat porta ligula.
            </p>

            <span className="flex sm:gap-4 gap-2 items-center text-lg sm:py-4 py-3 font-medium">
              <IoCheckmark className="border rounded-full bg-[#dac79f]  text-[#b48e40]
                xs:w-7 xs:h-7 w-5 h-5 "
              />
              Easy to use salon special offer navigation
            </span>
            <span className="flex sm:gap-4 gap-2 items-center text-lg pb-10 font-medium">
              <IoCheckmark className="border rounded-full bg-[#dac79f] text-[#b48e40] 
              xs:w-7 xs:h-7 w-5 h-5"
              />
              We care about our customers satisfaction
            </span>

            <Button text="BOOKING APPOINTMENT" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
