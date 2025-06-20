"use client";

import React from "react";

const Adopt: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="h-screen bg-[url('/kittens_in_basket.jpg')] grayscale-80 bg-cover bg-center bg-fixed"></section>
      <div className="flex flex-col items-center">
        <main className="bg-[#f5f2f8] w-full flex flex-col items-center py-[100px]">
          <div className="flex flex-col w-[300px] bg-white px-[50px] py-[50px] shadow-lg">
            <h2 className="text-[#221a20] text-[20px] font-bold mb-[20px] font-stretch-110%">
              COMING SOON
            </h2>
            <p>
              Check back later to see our kittens that are available for
              adoption!
            </p>
            <p className="mt-[10px]">August 2, 2021</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Adopt;
