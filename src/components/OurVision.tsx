"use client";

import React from "react";
import Image from "next/image";

const OurVision: React.FC = () => {
  return (
    <div className="bg-[#f5f2f8] px-6 md:px-[50px] pt-[30px] pb-[50px]">
      <Image
        src="/woman_feeding_kitten.jpg"
        alt="Woman feeding kitten with a bottle"
        width={400}
        height={80}
        className="mx-auto mb-4"
      />
      <div className="flex flex-col md:flex-row gap-10">
        <h2 className="font-bold text-2xl w-full md:w-1/3 text-center md:text-left">
          {" "}
          OUR VISION{" "}
        </h2>
        <div className="w-full md:w-2/3 space-y-5">
          <p>
            Our vision is to build one of the Puget Sound area’s leading
            resources for nurturing feral newborn kittens and then placing them
            in loving forever homes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
