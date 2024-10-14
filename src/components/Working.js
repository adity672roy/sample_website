import React from "react";
import YoutubeVideo from "./YoutubeVideo"; 
import { RiArrowRightDoubleFill } from "react-icons/ri";

const Working = () => {
  return (
    <div className="lg:flex ">
      <YoutubeVideo />

      <div
        className="lg:w-2/5 bg-[#b48e40] text-white xl:px-20 sm:px-10 px-4
        sm:py-10 py-20 flex flex-col justify-center"
      >
        <h1 className="sm:text-5xl text-4xl font-semibold px-2">Working Hours</h1>
        <p className="text-base font-sans py-8">
          Fusce id lorem risus. Duis mattis, nulla et placerat pretium, purus ex
          luctus nisi.
        </p>

        <div className="pb-8 ">
          <div className="sm:text-2xl text-xl flex justify-between items-center border-b-2 border-dotted border-white/40">
            <p className="pb-4">Monday</p>
            <p>9: AM - 6: PM</p>
          </div>
          <div  className="sm:text-2xl text-xl flex justify-between items-center border-b-2 border-dotted border-white/40">
            <p className="py-4">Thursday</p>
            <p>11: AM - 8: PM</p>
          </div>
          <div  className="sm:text-2xl text-xl flex justify-between items-center border-b-2 border-dotted border-white/40">
            <p className="py-4">Wednesday</p>
            <p>6: AM - 4: PM</p>
          </div>
        </div>
<div>
        <button class="hover-circle !border-2 !border-white !py-4">
          <p className="relative z-10 button-text lg:text-base text-sm flex items-center">
           BOOKING APPOINTMENT
            <RiArrowRightDoubleFill className="font-semibold text-2xl  pb-1" />
          </p>
        </button>
</div>
      </div>

    </div>
  );
};

export default Working;
