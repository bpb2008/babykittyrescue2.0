"use client";

import React from "react";
import AboveFooter from "./AboveFooter";
import LoginPage from "@/app/routes/login/page";

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
      <footer className="flex flex-row bg-[#221a20] text-white py-[20px] pl-[50px] pr-[20px] justify-between">
        <p>Copyright 2021 Baby Kitty Rescue. All Rights Reserved.</p>
        <div className="flex flex-row gap-[30px]">
          <LoginPage />
          <ul className="flex flex-row gap-[15px]">
            <li>FB</li>
            <li>IG</li>
            <li>YT</li>
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
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
            {/* Needs to link to top of page */}
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
