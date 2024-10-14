import React from "react";

const Title = ({ title, subheading, subtitle }) => {
  return (
    <>
      <div className="relative py-8 flex flex-col gap-4">
        <p className="z-10 text-[#b48e40] text-lg font-semibold">{title}</p>
        <p className="z-10  md:text-5xl sm:text-4xl text-3xl  font-semibold">{subheading}</p>
        <p className="absolute top-0 left-0   text-[#e5e7eb61] -z-0 md:text-9xl sm:text-8xl text-5xl">
          {subtitle}
        </p>
      </div>
    </>
  );
};

export default Title;
