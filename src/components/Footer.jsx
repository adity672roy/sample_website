import Image from "next/image";
import React from "react";
import logo from "../images/logo.webp";
import footer from "../images/footer.webp";
import { TbHandClick } from "react-icons/tb";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaSnapchat,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black">
         <Image
              src={footer}
              width={300}
              height={308}
              alt="footer"
              className="absolute left-0 bottom-4 h-auto w-auto"
            />
      <div className=" lg:container mx-auto sm:px-10">
        <div className="flex lg:flex-row flex-col justify-between py-20 gap-4  items-center">
          <div className="flex flex-col lg:items-start items-center gap-8 ">
            <Image
              src={logo}
              width={180}
              height={90}
              alt="logo"
              className="cursor-pointer"
            />
            <div className="text-lg text-white flex flex-wrap sm:justify-start justify-center lg:gap-8 md:gap-6 gap-4">
              <span className="hover:text-[#b48e40]  cursor-pointer ">
                Trend Haircut
              </span>
              <span className="hover:text-[#b48e40] cursor-pointer ">
                Hair Washing
              </span>
              <span className="hover:text-[#b48e40] cursor-pointer ">
                Hair Coloring{" "}
              </span>
              <span className="hover:text-[#b48e40] cursor-pointer ">
                Facial hair Trim
              </span>
            </div>
          </div>

          <div className="flex items-center px-2">
            <input
              type="text"
              placeholder="Email"
              className="sm:p-6 p-4 w-[95%]  bg-transparent border-[1px] border-white/20"
            />
            <button className="bg-[#b48e40] sm:p-7 p-5 ">
              <TbHandClick className="text-white  text-xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-4 justify-between items-center py-10 sm:px-16 px-4 border-t-[1px] border-white/20">
        <p className="text-white font-sans text-base text-center">
          Copyright © 2022 <span className="text-[#b48e40]">ThemeOri </span>{" "}
          Website by Barbex
        </p>
        <div className="text-white text-base flex gap-4 items-center">
          <FaFacebookF className="hover:text-[#b48e40] cursor-pointer" />
          <FaInstagram className="hover:text-[#b48e40] cursor-pointer" />
          <FaSnapchat className="hover:text-[#b48e40] cursor-pointer" />
          <FaTwitter className="hover:text-[#b48e40] cursor-pointer" />
          <FaPinterest className="hover:text-[#b48e40] cursor-pointer" />
          <FaYoutube className="hover:text-[#b48e40] cursor-pointer" />
          <FaLinkedin className="hover:text-[#b48e40] cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
