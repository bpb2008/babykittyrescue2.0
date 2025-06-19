"use client";

import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <div className="bg-[#f5f2f8] px-6 md:px-[50px] pt-[30px] pb-[50px]">
      <img
        src="/woman_feeding_kitten.jpg"
        alt="Woman feeding kitten with a bottle"
        className="w-full md:w-3/4 h-auto mx-auto mb-10"
      />
      <div className="flex flex-col md:flex-row gap-10">
        <h2 className="font-bold text-2xl w-full md:w-1/3 text-center md:text-left">
          {" "}
          WHO WE ARE{" "}
        </h2>
        <div className="w-full md:w-2/3 space-y-5">
          <p>
            When a stray cat becomes pregnant, the kittens she bears may become
            orphaned, requiring special attention.
          </p>
          <p>
            Separated before weaning from their mothers, these vulnerable
            neonatal kittens require around-the-clock bottle feeding and other
            care. Often, this kind of support is unavailable at local animal
            shelters experiencing strained resources. This makes saving newborn
            feral kittens extremely difficult.
          </p>
          <p>
            We founded the Baby Kitty Rescue Committee to bridge gaps in support
            for newborn stray kittens in the Seattle, Washington area by
            offering them essential neonatal care. We take in and nurture
            newborn stray kittens, offering them the extensive care they need to
            survive and grow into healthy 8-week-old weaned kittens. Once they
            are old enough to eat on their own and regulate their own body
            temperature, they will be moved to a special lounge where they can
            greet potential human companions as they are made available for
            adoption. We also educate the community on how to handle stray
            newborn kittens and their mothers while providing volunteer
            opportunities for animal lovers who want to learn how to care for
            orphaned neonatal kittens.
          </p>
          <p>
            Baby Kitty Rescue Committee was founded by Angela Truong, whose
            volunteer work in the neonatal ward of Austin Pets Alive sparked a
            dream to open her own rescue focusing on neonatal kittens. Our goal
            is to offer a unique service that complements other animal rescues
            and shelters by maintaining a laser focus on only intaking and
            caring for neonatal orphans. We want to ensure that they are
            comfortable in an environment similar to a home to prepare them to
            live with their forever families. As we grow, we hope to replicate
            our model in surrounding cities, with a larger vision to achieve
            no-kill status and save every feral newborn kitten we can.
          </p>
          <p>
            Baby Kitty Rescue Committee is a 501(c)(3) nonprofit corporation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
