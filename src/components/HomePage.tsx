"use client";

import React from "react";
import Donation from "./Donation";

const HomePage: React.FC = () => {
  return (
    <div>
      <section className="h-screen bg-[url('/kittens_in_basket.jpg')] grayscale-80 bg-cover bg-center bg-fixed"></section>
      <main className="bg-white">
        <section className="bg-[#f5f2f8] p-70 mt-[-100px]"></section>
        <section className="bg-white flex flex-row p-[10px] justify-center">
          <iframe
            src="https://www.youtube.com/embed/vgEJJ72DXio"
            title="Baby Kitty Rescue Committee Mission"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-4/5 h-[600px] border-none"
          ></iframe>
        </section>
        <div className="flex flex-row gap-[15px] bg-[#f5f2f8] w-full pt-[15px] pb-[30px] px-[100px]">
          <div className="bg-white shadow-xs px-[15px] py-[15px]">
            <h3>Community Partnership</h3>
            <p>
              We collaborate with other animal rescue & shelters in the Puget
              Sound region to focus on rescuing only the homeless newborn
              kittens.
            </p>
          </div>
          <div className="bg-white shadow-xs px-[15px] py-[15px]">
            <h3>Care</h3>
            <p>
              We provide specialized neonatal care to the orphaned kittens until
              they grow from infants to more than 8-week old, adoptable kittens.
            </p>
          </div>
          <div className="bg-white shadow-xs px-[15px] py-[15px]">
            <h3>Furever Home</h3>
            <p>
              We also create socializing opportunities for these little ones to
              prepare them for a gentle transition to their furever homes.
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <Donation />
          <div className="bg-[#DCCAE3] px-[100px] py-[100px]">
            <div className="mb-[20px]">
              <img />
              <h3 className="font-bold mb-[10px]">
                Kitten Care & Medical Support
              </h3>
              <p>
                With your support, we can provide the best quality care for our
                kittens. This includes: medical expenses, kitten milk
                replacement (KMR) formula, kitten food, litter, and toys.
              </p>
            </div>
            <div className="mb-[20px]">
              <img />
              <h3 className="font-bold mb-[10px]">
                Shelter Housing & Supplies
              </h3>
              <p>
                Additionally, your generous support will help us keep our
                facilities up and running. This will ensure that we can provide
                a safe space for rescued kittens.
              </p>
            </div>
            <div>
              <img />
              <h3 className="font-bold mb-[10px]">Operations & Equipment</h3>
              <p>
                Lastly, your donation can help us to purchase equipment and hire
                staff to continue improving our operations and ensuring that we
                can expand to help rescue more kittens.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
