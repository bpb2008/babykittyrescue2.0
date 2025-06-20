"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Newsletter from "@/components/Newsletter";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Resources: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="h-screen bg-[url('/kittens_in_basket.jpg')] grayscale-80 bg-cover bg-center bg-fixed"></section>
      <div className="flex flex-col items-center">
        <main className="bg-[#f5f2f8] w-full flex flex-col lg:flex-row justify-between px-6 lg:px-[100px]">
          <div className="flex flex-col gap-[30px] w-full lg:w-2/3">
            <Link href="/resources/feeding">
              <div className="flex flex-col w-full max-w-[500px] px-6 py-10 break-words">
                <Image
                  src="/kitten_in_hand2.jpg"
                  alt="striped kitten being held by a human"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
                <h3 className="text-[#221a20] text-[20px] font-bold mb-[20px] font-stretch-110%">
                  WHAT TO FEED A NEWBORN KITTEN?
                </h3>
                <p>
                  Check back later to see our kittens that are available for
                  adoption!
                </p>
                <p className="mt-[10px]">READ MORE</p>
              </div>
            </Link>
            <Link href="/resources/care">
              <div className="flex flex-col w-full max-w-[500px] px-6 py-10 break-words">
                <Image
                  src="/kitten_in_hand.jpg"
                  alt="tiny cat in the palm of a human hand"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
                <h3 className="text-[#221a20] text-[20px] font-bold mb-[20px] font-stretch-110%">
                  NEONATAL CARE FOR KITTENS
                </h3>
                <p>
                  Check back later to see our kittens that are available for
                  adoption!
                </p>
                <p className="mt-[10px]">READ MORE</p>
              </div>
            </Link>
            <Link href="/resources/socialize">
              <div className="flex flex-col w-full max-w-[500px] px-6 py-10 break-words">
                <Image
                  src="/neonatal.jpg"
                  alt="a brown kitten held in human hands"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
                <h3 className="text-[#221a20] text-[20px] font-bold mb-[20px] font-stretch-110%">
                  HELP KITTENS SOCIALIZE
                </h3>
                <p>
                  Check back later to see our kittens that are available for
                  adoption!
                </p>
                <p className="mt-[10px]">READ MORE</p>
              </div>
            </Link>
          </div>
          <aside className="bg-[#f5f2f8] bg-fixed bg-[length:100%_100%] p-[30px] w-full lg:w-[360px] mt-8 lg:mt-0">
            <div>
              <Image
                src="/kitten_handoff.jpg"
                alt="a human child handing a tiny kitten to an adult"
                width={360}
                height={240}
                className="w-full mb-6 h-auto"
              />
              <div className="flex flex-col items-center">
                <Image
                  src="/Baby_Kitty_Logo_Transparent.png"
                  alt="Baby Kitty Rescue Logo"
                  width={170}
                  height={170}
                  className="w-[170px] h-[170px]"
                />
                <ul className="flex flex-row justify-center gap-[15px] mt-[10px]">
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
                  <li>
                    <Link href="https://www.twitter.com/babykittyrescue">
                      <Twitter />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[300px] mt-[50px]">
              <Newsletter />
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default Resources;
