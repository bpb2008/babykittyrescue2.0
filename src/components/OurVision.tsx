"use client";

import React from "react";

const OurVision: React.FC = () => {
  return (
    <div className="bg-[#f5f2f8] flex flex-col items-center px-[50px] pt-[30px] pb-[50px]">
      <img
        src="/woman_feeding_kitten.jpg"
        alt="Woman feeding kitten with a bottle"
        className="w-3/4 h-1/4"
      />
      <div className="flex flex-row gap-10 m-10">
        <h2 className="font-bold text-2xl"> OUR VISION </h2>
        <div className="">
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
