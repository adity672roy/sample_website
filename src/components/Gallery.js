import React from "react";
import img1 from "../images/instagram-1.webp";
import img2 from "../images/instagram-2.webp";
import img3 from "../images/instagram-3.webp";
import img4 from "../images/instagram-4.webp";
import img5 from "../images/instagram-5.webp";
import img6 from "../images/instagram-6.webp";
import Image from "next/image";

const Gallery = () => {
  const Gallery = [img1, img2, img3, img4, img5, img6];
  return (
    <div className=" flex justify-center sm:px-10 px-4">
    
      <div className="grid lg:grid-cols-6 sm:grid-cols-3 gap-2">
        {Gallery.map((g, index) => (
            <div key={index}>
          <Image  width={300} height={300} src={g} alt="gallery" className="" />
          </div>
        ))}
      </div>

      <div className="h-screen bg-black"></div>
    </div>
  );
};

export default Gallery;
