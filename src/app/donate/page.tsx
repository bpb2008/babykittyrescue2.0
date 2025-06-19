"use client";

import React from "react";
import Donation from "@/components/Donation";

const Donate: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col justify-between text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/kittens_in_basket.jpg')] bg-cover bg-center grayscale z-0" />
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 md:px-16">
        <div className="flex flex-col lg:flex-row justify-around items-center w-full max-w-7xl gap-12">
          <div className="text-center lg:text-left lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              EVEN YOUR SMALLEST <br />
              CONTRIBUTION CAN MAKE <br />A BIG DIFFERENCE.
            </h2>
          </div>
          <div className="lg:w-1/2">
            <Donation />
          </div>
        </div>
      </div>
      <div className="relative z-10 bg-white text-center py-4 text-black text-sm">
        Baby Kitty Rescue Committee is a 501(c)(3) nonprofit corporation.
      </div>
    </div>
  );
};

export default Donate;
