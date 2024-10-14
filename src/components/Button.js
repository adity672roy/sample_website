import React from "react";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const Button = ({ text }) => {
  return (
    <>
      <button class="hover-circle ">
        <p className="relative z-10 button-text lg:text-base  flex items-center">
          {text}
          <RiArrowRightDoubleFill className="font-semibold text-2xl  pb-1" />
        </p>
      </button>
    </>
  );
};

export default Button;
