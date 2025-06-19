"use client";

import React from "react";
import WhoWeAre from "@/components/WhoWeAre";
import OurMission from "@/components/OurMission";
import OurVision from "@/components/OurVision";

const About: React.FC = () => {
  return (
    <div>
      <section className="h-screen bg-[url('/kittens_in_basket.jpg')] grayscale-80 bg-cover bg-center bg-fixed"></section>
      <main>
        <WhoWeAre />
        <OurMission />
        <OurVision />
      </main>
    </div>
  );
};

export default About;
