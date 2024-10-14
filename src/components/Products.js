import React from "react";
import Title from "./Title";
import Product1 from "../images/products-1.webp";
import Product2 from "../images/products-2.webp";
import Product3 from "../images/products-3.webp";
import Product4 from "../images/products-4.webp";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const Products = () => {
  const products = [
    { img: Product1, price: "$56.00" },
    { img: Product2, price: "$51.63" },
    { img: Product3, price: "$63.20" },
    { img: Product4, price: "$37.67" },
  ];
  return (
    <div className="container mx-auto sm:py-20 py-10 sm:px-0 px-4">
      <div className="pb-10 container mx-auto flex  items-center justify-center  sm:text-center">
        <div className=" sm:max-w-[60%]">
          <Title
            title="Our Products"
            subheading="Evoke the experience of one of our barber shops"
            subtitle="Products"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 ">
        {products.map((p, index) => (
          <div key={index}>
            <div>
              <Image
                width={250}
                height={250}
                src={p.img}
                alt="Products"
                className=""
              />
            </div>
            <div className="flex flex-col items-center gap-2 py-6">
              <p className="flex gap-1 justify-center pt-2">
                <FaStar className="text-[#b48e40] text-lg" />
                <FaStar className="text-[#b48e40] text-lg" />
                <FaStar className="text-[#b48e40] text-lg" />
                <FaStar className="text-[#b48e40] text-lg" />
                <FaStar className="text-gray-300 text-lg" />
              </p>
              <p className="text-xl font-semibold hover:text-[#b48e40]">
                New Fresh Wash
              </p>
              <p className="text-lg font-semibold text-[#b48e40]">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
