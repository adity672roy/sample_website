"use client";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { BsArrowUp } from "react-icons/bs";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScroll = () => {
    const scrolled = window.scrollY;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrolled / documentHeight) * 100;
    setProgress(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: true,
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-10 h-10
         bg-transparent "
        style={{
          background: `conic-gradient(#b48e40 ${progress}%, transparent ${progress}%) `,
          borderRadius: "50%",
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-transparent 
        transition-all duration-300">
          <BsArrowUp className="bg-white border-1 border-white p-2 rounded-full
          text-[#b48e40] text-4xl" />
        </div>
      </button>
    )
  );
};

export default ScrollToTop;
