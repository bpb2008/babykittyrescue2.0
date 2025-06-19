"use client";

import React from "react";
import Donation from "./Donation";

const HomePage: React.FC = () => {
  return (
    <div>
      <section className="h-screen bg-[url('/kittens_in_basket.jpg')] grayscale-80 bg-cover bg-center bg-fixed" />
      <main className="bg-white">
        <section className="bg-[#f5f2f8] p-16 mt-[-100px]" />
        <section className="bg-white flex px-4 py-8 justify-center">
          <iframe
            src="https://www.youtube.com/embed/vgEJJ72DXio"
            title="Baby Kitty Rescue Committee Mission"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full max-w-3xl h-[300px] md:h-[500px] border-none"
          ></iframe>
        </section>
        <div className="flex flex-col md:flex-row gap-4 bg-[#f5f2f8] w-full pt-6 pb-10 md:px-[100px]">
          <div className="bg-white shadow-xs px-[15px] py-[15px]">
            {[
              {
                title: "Community Partnership",
                desc: "We collaborate with other animal rescue & shelters in the Puget Sound region to focus on rescuing only the homeless newborn kittens.",
              },
              {
                title: "Care",
                desc: "We provide specialized neonatal care to the orphaned kittens until they grow from infants to more than 8-week old, adoptable kittens.",
              },
              {
                title: "Furever Home",
                desc: "We also create socializing opportunities for these little ones to prepare them for a gentle transition to their furever homes.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="bg-white shadow-xs px-6 py-6 rounded-md text-center md:text-left"
              >
                <h3 className="font-bold mb-2">{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <Donation />
          </div>
          <div className="bg-[#DCCAE3] w-full lg:w-1/2 px-6 py-12 lg:px-[100px] lg:py-[100px]">
            {[
              {
                title: "Kitten Care & Medical Support",
                desc: "With your support, we can provide the best quality care for our kittens. This includes: medical expenses, kitten milk replacement (KMR) formula, kitten food, litter, and toys.",
              },
              {
                title: "Shelter Housing & Supplies",
                desc: "Additionally, your generous support will help us keep our facilities up and running. This will ensure that we can provide a safe space for rescued kittens.",
              },
              {
                title: "Operations & Equipment",
                desc: "Lastly, your donation can help us to purchase equipment and hire staff to continue improving our operations and ensuring that we can expand to help rescue more kittens.",
              },
            ].map(({ title, desc }, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <img className="mx-auto mb-4" alt="" /> {/* Placeholder */}
                <h3 className="font-bold mb-2">{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
