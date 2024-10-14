import React from "react";
import { IoCallOutline } from "react-icons/io5";
import Title from "./Title";
import Button from "./Button";
import Image from "next/image";
import Img from '../images/working.webp'

const Booking = () => {
  return (
    <div className="bg-black md:py-10 relative">
        <Image src={Img} height={1000} alt="bg" className="absolute h-full top-0 left-0 object-cover -z-0" />
      <div className="container mx-auto flex flex-wrap justify-between md:gap-0 gap-10 py-20 sm:px-20  px-4">
        <div className="md:w-3/5 text-white ">
          <Title
            title="Booking Now"
            subheading="Book your appointment online And call our salon"
            subtitle="Booking"
          />

          <Button text="BOOKING APPOINTMENT" />
        </div>

        <div className="md:w-2/5 flex md:justify-end justify-center z-10">
          <div
            className=" bg-white h-64 w-64 flex flex-col items-center gap-6
         justify-center "
          >
            <div className="p-5 rounded-full bg-[#f7f4ec]">
              <IoCallOutline className="text-[#b48e40] text-6xl " />
            </div>
            <div>
              <p className="text-base text-center">Call Now</p>
              <p className="cursor-pointer hover:text-[#b48e40] text-2xl font-semibold">
                +123 (568) 584
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
