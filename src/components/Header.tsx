"use client";

import React from "react";
import NavBar from "./NavBar";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="w-full">
      <Link href="/" passHref>
        <Image
          src="/Baby_Kitty_Logo.png"
          alt="Baby Kitty Rescue Committee Logo"
          width={170}
          height={170}
          className="my-[20px]object-cover mx-auto"
        />
      </Link>
      <NavBar />
    </header>
  );
};

export default Header;
