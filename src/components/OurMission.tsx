"use client";

import React from "react";
import Image from "next/image";

const OurMission: React.FC = () => {
  return (
    <div className="bg-white px-6 md:px-[50px] pt-[30px] pb-[50px]">
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
          OUR MISSION{" "}
        </h2>
        <div className="w-full md:w-2/3 space-y-5">
          <p>
            Baby Kitty Rescue Committee is a nonprofit initiative founded to
            bridge gaps in essential care for newborn stray kittens in the
            Seattle, Washington area. We rescue and nurture orphaned newborn
            kittens, offering them the extensive care they need to survive and
            grow. Once they are old enough to eat on their own and regulate
            their own body temperature, they will be moved to a special lounge
            where they can greet potential human companions as they are made
            available for adoption. Our goal is to offer a service that
            complements other local animal rescues and shelters by focusing on
            only the intake and care of neonatal orphans. We want to do
            everything we can to ensure they are prepared to thrive in their
            forever homes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
