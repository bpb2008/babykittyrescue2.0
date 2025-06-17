"use client";

import React from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="flex flex-row justify-center">
      <ul className="flex flex-row bg-[#DCCAE3] justify-center w-[1000px]">
        <li className="hover:bg-[#FAE489] py-[25px] px-[20px]">
          <Link href="/" passHref>
            HOME
          </Link>
        </li>
        <li className="hover:bg-[#FAE489] py-[25px] px-[20px]">
          <Link href="/about" passHref>
            ABOUT US
          </Link>
        </li>
        <li className="hover:bg-[#FAE489] py-[25px] px-[20px]">
          <Link href="/adopt" passHref>
            ADOPT
          </Link>
        </li>
        <li className="hover:bg-[#FAE489] py-[25px] px-[20px]">
          <Link href="/volunteer" passHref>
            VOLUNTEER
          </Link>
        </li>
        <li className="hover:bg-[#FAE489] py-[25px] px-[20px]">
          <Link href="/resources" passHref>
            RESOURCES
          </Link>
        </li>
        <li className="hover:bg-[#FAE489] py-[25px] px-[20px]">
          <Link href="/donate" passHref>
            DONATE
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
