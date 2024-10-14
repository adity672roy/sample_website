"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import Link from "next/link";
import logo from "../images/logo.webp";
import { IoMenuSharp, IoSearchOutline } from "react-icons/io5";
import Button from "./Button";

const Navbar = () => {
  const links = [
    { name: "Home", list: ["Home 01", "Home 02", "Home 03"] },
    {
      name: "Pages",
      list: ["About", "Price", "Team", "Services", "Services Detail"],
    },
    {
      name: "Shop",
      list: ["Product Page", "Product Detail", "Cart", "Checkout"],
    },
    { name: "Blogs", list: ["Blog Grid", "Blog Standard", "Blog Details"] },
    { name: "Contact", list: [] },
  ];

  const [scrollHeader, setScrollHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeader);
    return () => {
      window.removeEventListener("scroll", changeHeader);
    };
  }, []);

  return (
    <header
      className={`${
        scrollHeader ? "scroll-header" : ""
      } absolute top-0 left-0 w-full z-50   flex justify-center items-center`}
    >
      <nav className="container xs:px-0 px-4 flex justify-between items-center">
        <Link href="/" onClick={scrollTop}>
          <Image
            src={logo}
            width={180}
            height={90}
            alt="logo"
            className="cursor-pointer"
          />
        </Link>

        <div className="hidden lg:flex justify-between items-center gap-10">
          <ul className="flex items-center gap-10">
            {links.map((link, index) => (
              <li
                className="relative cursor-pointer"
                key={link.name}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="lg:py-12 py-8 text-base hover:text-[#b48e40] font-semibold flex items-center text-white">
                  {link.name}
                  {link.list.length > 0 && (
                    <span className="ml-2 text-base">
                      {hoveredIndex === index ? "-" : "+"}
                    </span>
                  )}
                </div>
                {hoveredIndex === index && link.list.length > 0 && (
                  <ul className="absolute left-0 z-10 w-60 bg-white shadow-lg transition-opacity duration-300">
                    {link.list.map((subLink, subIndex) => (
                      <li key={subIndex} className="p-4 text-base">
                        <Link
                          href="#"
                          className="block text-black hover:text-[#b48e40]"
                        >
                          {subLink}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <IoSearchOutline className="text-white text-xl " />

          <Button text="BOOKING NOW" />
        </div>
      </nav>
      <div
        className="lg:hidden py-8 xs:pr-0 pr-4 cursor-pointer relative"
        onClick={() => setShowMenu(!showMenu)}
      >
        <IoMenuSharp className="text-white text-2xl " />
      </div>

      <div className="lg:hidden w-[90%] absolute top-20 left-1/2 transform -translate-x-1/2 bg-white">
        {showMenu && (
          <div>
            <ul className="flex flex-col">
              {links.map((link, index) => (
                <li className="relative" key={link.name}>
                  <div
                    className="text-base flex justify-between items-center hover:text-[#b48e40] font-semibold p-4"
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                  >
                    <span>{link.name}</span>
                    {link.list.length > 0 && (
                      <span className="text-base text-white bg-[#b48e40] py-2 px-4 hover:text-white">
                        {expandedIndex === index ? "-" : "+"}
                      </span>
                    )}
                  </div>
                  {expandedIndex === index && link.list.length > 0 && (
                    <ul className="bg-white pl-6">
                      {link.list.map((subLink, subIndex) => (
                        <li key={subIndex} className="p-4 text-base">
                          <Link
                            href="#"
                            className="block text-black hover:text-[#b48e40]"
                          >
                            {subLink}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
