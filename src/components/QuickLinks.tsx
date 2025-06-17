"use client";

import React from "react";
import Link from "next/link";

const QuickLinks: React.FC = () => {
  return (
    <div>
      <h3 className="text-[#221a20] text-[20px] font-bold mb-[20px] font-stretch-110%">
        QUICK LINKS
      </h3>
      <ul>
        <li>
          <Link href="/about" passHref>
            About Us
          </Link>
        </li>
        <li>
          <Link href="/adopt" passHref>
            Adopt
          </Link>
        </li>
        <li>
          <Link href="/volunteer" passHref>
            Volunteer
          </Link>
        </li>
        <li>
          <Link href="/donate" passHref>
            Donate Now
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
