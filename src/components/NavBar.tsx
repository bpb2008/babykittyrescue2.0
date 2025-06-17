"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT US" },
    { href: "/adopt", label: "ADOPT" },
    { href: "/volunteer", label: "VOLUNTEER" },
    { href: "/resources", label: "RESOURCES" },
    { href: "/donate", label: "DONATE" },
  ];

  return (
    <nav className="bg-[#DCCAE3]">
      <ul className="hidden md:flex justify-center w-full max-w-[1000px] mx-auto">
        {navLinks.map(({ href, label }) => (
          <li
            key={href}
            className="hover:bg-[#FAE489] py-[25px] px-[20px] text-center"
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden flex justify-end p-4">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-[#DCCAE3]">
          {navLinks.map(({ href, label }) => (
            <li
              key={href}
              className="w-full text-center py-[20px] border-t border-white hover:bg-[#FAE489]"
            >
              <Link href={href} onClick={() => setIsOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
