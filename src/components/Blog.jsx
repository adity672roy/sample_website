import React from "react";
import img1 from "../images/blog-1.webp";
import img2 from "../images/blog-2.webp";
import img3 from "../images/blog-3.webp";
import Image from "next/image";
import Title from "./Title";
import { FaCalendar } from "react-icons/fa";

const Blog = () => {
  const blog = [
    {
      img: img1,
      date: "30 June, 2022",
      btn: "Hair cutting",
      title: "We are a Haircut Salon Based in South Melbourne",
    },
    {
      img: img2,
      date: "25 June, 2022",
      btn: "Hair Color",
      title: "Online booking appoitment For Salon, Hair Salon",
    },
    {
      img: img3,
      date: "21 June, 2022",
      btn: "Lather Shave",
      title: "Customising your shave is Fun and easy",
    },
  ];
  return (
    <div className="bg-[#f7f7f7] ">
      <div className="container mx-auto   md:py-32 py-20 lg:px-20 sm:px-6 px-4">
        <div className="pb-16 container mx-auto flex  items-center justify-center  sm:text-center">
          <div className="">
            <Title
              title="Blog And Article"
              subheading="Read Our BLog and News"
              subtitle="Our Blog"
            />
          </div>
        </div>

        <div className="">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 gap-8">
            {blog.map((b, index) => (
              <div key={index} className="">
                <div>
                  <Image
                    width={820}
                    height={500}
                    src={b.img}
                    alt="blog"
                    className=""
                  />
                </div>
                <div className="py-6 px-8 border-[1px] border-gray-300 flex flex-col gap-4">
                  <div className="block xs:flex  justify-between items-center ">
                    <button className="cursor-pointer bg-[#b48e40] text-white p-2">
                      {b.btn}
                    </button>

                    <div className="flex gap-2 items-center">
                      <FaCalendar className="text-[#b48e40] text-base" />
                      <span className="cursor-pointer text-base hover:text-[#b48e40]">
                        {b.date}
                      </span>
                    </div>
                  </div>
                  <p className="text-xl cursor-pointer font-semibold hover:text-[#b48e40]">
                    {b.title}
                  </p>

                  <p className="text-lg cursor-pointer font-semibold">Read More {">>"}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
