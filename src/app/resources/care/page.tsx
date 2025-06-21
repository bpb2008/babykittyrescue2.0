" use client";

import React from "react";
import ShareButtons from "@/components/ShareButtons";

const Care: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="h-screen bg-[url('/kitten_in_hand2.jpg')] bg-cover bg-center bg-fixed grayscale-80 w-full" />
      <main className="bg-[#f5f2f8] w-full flex flex-col items-center px-4 lg:px-8 py-10">
        <div className="w-full max-w-screen-lg flex flex-col lg:flex-row gap-10">
          {/* Article */}
          <article className="bg-white p-6 md:p-10 shadow-md rounded-md flex-1">
            <h1 className="text-[#221a20] text-2xl font-bold mb-2">
              Neonatal Care For Kittens
            </h1>
            <p className="text-sm text-gray-600 mb-6">August 3, 2021</p>

            <section className="space-y-6 text-base text-[#221a20]">
              <div>
                <p className="mb-4">
                  Taking care of kittens aged 0 days up to 4 weeks old, is
                  called neonatal care and is the hardest part of caregiving
                  routine. Nature has a process of mothers taking care of
                  newborns, but with orphaned kittens, humans have to share the
                  responsibility.{" "}
                </p>
                <h2 className="font-bold text-xl mb-2">Bedding & Heating</h2>
                <p>
                  Warming the kitten up is essential as newborn kittens cannot
                  control their body temperatures and chills can be
                  life0threatening for them.
                </p>
                <p>
                  Craft a soft bedding with a heating pad covered with a
                  blanket. Ensure some space for kittens to step away. Keep them
                  away from water to prevent chills. Only clean with a damp
                  washcloth and immediately dry with towel or hair dryer on low.
                </p>
              </div>

              <div>
                <h2 className="font-bold text-xl mb-2">Feeding</h2>
                <p>
                  Kitten formula is easily available. Warm the KMR lightly, and
                  use kitten bottles, with elongated nipples and punch your own
                  holes in them with a sterilized pin so it drips out easily.
                  Adjust the holes with every kittens needs.
                </p>
                <p>
                  Hold or place kittens on their stomachs and tilt the bottle so
                  less air gets in. Do not feed kittens on their backs.
                </p>
              </div>

              <div>
                <h2 className="font-bold text-xl mb-2">Cleaning</h2>
                <p>
                  Always sterilize feeding bottles, nipples and wash hands.
                  Kitten formula is super sticky, so use a warm damp washcloth
                  to clean kittens after feeding. Dry them if necessary.
                </p>
              </div>

              <div>
                <h2 className="font-bold text-xl mb-2">Burping</h2>
                <p>
                  Kittens on formula need burping. Slide them over your shoulder
                  or put them on their stomachs and gently pat until you hear
                  them burp it out.
                </p>
              </div>

              <div>
                <h2 className="font-bold text-xl mb-2">Excretion</h2>
                <p>
                  Newborns need help to excrete, after every feeding. A warm,
                  moist cotton ball, or cloth rubbed gently around anal area
                  will stimulate urination & excretion. If your little ones have
                  trouble defecating, check with a veterinarian.
                </p>
                <p>
                  Litter training can begin at 4 weeks, with a small, shallow
                  litter pan with non-clumping litter.{" "}
                </p>
              </div>

              <div>
                <h2 className="font-bold text-xl mb-2">Health Check</h2>
                <p>
                  Kittens can easily get fleas or diarrhea or even upper
                  respiratory infections causing a tallow discharge or
                  difficulty breathing/eating. In such cases, immediately see a
                  vet and follow their advice.
                </p>
              </div>
            </section>

            <div className="mt-10">
              <ShareButtons
                title="Neonatal Care For Kittens"
                url="https://babykittyrescue.vercel.app/resources/care"
              />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/3">
            <div className="bg-white p-6 shadow-md rounded-md">
              <h2 className="font-bold text-lg mb-4">Recent Posts</h2>
              <ul className="space-y-2 text-blue-700">
                <li>• Neonatal Care for Kittens</li>
                <li>• Help Kittens Socialize</li>
                <li>• Our Mission</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Care;
