"use client";

import React from "react";
import NavBar from "./NavBar";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full">
      <Link href="/" passHref>
        <img
          className="my-[20px] w-[170px] h-[170px] object-cover mx-auto"
          src="/Baby_Kitty_Logo.png"
          alt="Baby Kitty Rescue Logo"
        />
      </Link>
      <NavBar />
    </header>
  );
};

export default Header;
