"use client";

import React from "react";
import AboveFooter from "./AboveFooter";
import LoginPage from "@/app/routes/login/page";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <AboveFooter />
      <footer className="flex flex-col md:flex-row bg-[#221a20] text-white py-6 px-6 md:pl-[50px] md:pr-[20px] justify-between items-center gap-6 md:gap-0 text-center md:text-left">
        <p>Copyright 2021 Baby Kitty Rescue. All Rights Reserved.</p>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-[30px]">
          <LoginPage />
          <ul className="flex gap-[15px]">
            <li>
              <Link href="https://www.facebook.com/babykittyrescue">
                <Facebook />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/babykittyrescue">
                <Instagram />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@babykittyrescuecommittee6888">
                <Youtube />
              </Link>
            </li>
          </ul>
          <button
            onClick={handleScrollToTop}
            title="Back to top"
            className="bg-[#DCCAE3] p-[8px] rounded-xs"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
