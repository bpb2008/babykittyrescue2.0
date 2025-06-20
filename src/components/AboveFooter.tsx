"use client";

import React from "react";
import Image from "next/image";
import Newsletter from "./Newsletter";
import QuickLinks from "./QuickLinks";
import Contact from "./Contact";

const AboveFooter: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between px-6 md:px-[50px] py-[30px] gap-6 md:gap-0 text-center md:text-left">
      <Image
        src="/Baby_Kitty_Logo.png"
        width={170}
        height={170}
        className="mb-4 md:mb-0"
        alt="Baby Kitty Rescue Logo"
      />
      <QuickLinks />
      <Contact />
      <Newsletter />
    </div>
  );
};

export default AboveFooter;
