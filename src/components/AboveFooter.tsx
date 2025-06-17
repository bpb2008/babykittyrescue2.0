"use client";

import React from "react";
import Newsletter from "./Newsletter";
import QuickLinks from "./QuickLinks";
import Contact from "./Contact";

const AboveFooter: React.FC = () => {
  return (
    <div className="flex flex-row justify-between px-[50px] py-[30px]">
      <img
        src="/Baby_Kitty_Logo.png"
        className="w-[170px] h-[170px]"
        alt="Baby Kitty Rescue Logo"
      />
      <QuickLinks />
      <Contact />
      <Newsletter />
    </div>
  );
};

export default AboveFooter;
