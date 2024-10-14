import React from "react";
import img1 from "../images/testimonial-1.webp";
import img2 from "../images/testimonial-2.webp";
import img3 from "../images/testimonial.webp";
import quote from "../images/quote.webp";
import Image from "next/image";
import Title from "./Title";
import { FaStar } from "react-icons/fa";
import Button from "./Button";

const Testimonial = () => {
  const testimonial = [
  
    { img: img1, name: "Devin Booker" },
    { img: img2, name: "Michelle Yeoh" },
  ];
  return (
    <div className="bg-[#f7f7f7] relative">
      <Image
        src={img3}
        alt="testimonial"
        width={350}
        height={350}
        className="absolute -bottom-3 right-0"
      />

      <div className="container mx-auto flex lg:flex-row flex-col  gap-10 md:py-32 py-20 lg:px-20 sm:px-6 px-4">
        <div className="lg:w-1/3 ">
          <Title
            title="Testimonial"
            subheading="What Our Customer Say's"
            subtitle="Testimonial"
          />

          <p className="text-xl font-sans pb-14">
            Barber Trading Style and Proven Strategy to Make a Living
          </p>

          <Button text="WRITE REVIEW" />
        </div>

        <div className="lg:w-2/3  pt-6">
          <div className="flex sm:flex-row flex-col md:gap-8 gap-4">
            {testimonial.map((t, index) => (
              <div
                key={index}
                className="relative z-10 bg-white flex flex-col gap-10 items-center justify-center sm:py-20 sm:px-6 py-6 px-8"
              >
                 
                <Image
                  width={140}
                  height={140}
                  src={quote}
                  alt={t.name}
                  className="absolute"
                />
                <Image
                  width={100}
                  height={100}
                  src={t.img}
                  alt={t.name}
                  className=""
                />
                <p className="sm:text-xl text-lg text-center font-sans ">
                  Proin vel ipsum id risus ultrices scelerisque. Suspendisse
                  mattis sit amet leo vel convallis.
                </p>
                <div className="text-center">
                  <p className="flex gap-1 justify-center">
                    <FaStar className="text-[#b48e40] text-xl" />
                    <FaStar className="text-[#b48e40] text-xl" />
                    <FaStar className="text-[#b48e40] text-xl" />
                    <FaStar className="text-[#b48e40] text-xl" />
                    <FaStar className="text-gray-300 text-xl" />
                  </p>
                  <p className="text-xl font-semibold pt-2">{t.name}</p>
                  <p className="text-sm pt-2">Regular User</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
 





    </div>
  );
};

export default Testimonial;
