"use client";

import React, { useState } from "react";
import Thumbnail from "../images/working.webp";
import Image from "next/image";

const YoutubeVideo = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="lg:w-3/5  ">
      {!isVideoPlaying ? (
        <div className="relative cursor-pointer" onClick={playVideo}>
          <Image
            width={850}
            height={970}
            src={Thumbnail}
            alt="YouTube Thumbnail"
            className="lg:h-screen w-full"
          />
          
           
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute rounded-full border-2 border-white w-24 h-24 animate-ping"></div>
            <div className="absolute rounded-full border-2 border-white w-32 h-32 animate-ping delay-100"></div>

      
            <button className="relative z-10 bg-white rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-16 h-16 text-[#b48e40]"
                viewBox="0 0 16 16"
              >
                <path d="M6.271 11.691V4.309a.5.5 0 0 1 .757-.429l5.367 3.691a.5.5 0 0 1 0 .858l-5.367 3.691a.5.5 0 0 1-.757-.429z" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div
          className="relative overflow-hidden"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/0WC-tD-njcA?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default YoutubeVideo;
