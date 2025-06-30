"use client";

import React from "react";
import ShareButtons from "@/components/ShareButtons";

const Feeding: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="h-screen bg-[url('/kitten_in_hand2.jpg')] bg-cover bg-center bg-fixed grayscale-80 w-full" />
      <main className="bg-[#f5f2f8] w-full flex flex-col items-center px-4 lg:px-8 py-10">
        <div className="w-full max-w-screen-lg flex flex-col lg:flex-row gap-10">
          <article className="bg-white p-6 md:p-10 shadow-md rounded-md flex-1">
            <h1 className="text-[#221a20] text-2xl font-bold mb-2">
              What to feed a newborn kitten?
            </h1>
            <p className="text-sm text-gray-600 mb-6">August 3, 2021</p>

            <section className="space-y-6 text-base text-[#221a20]">
              <div>
                <h2 className="font-bold text-xl mb-2">Kittens Have Formula</h2>
                <p>
                  Newly born cats, like every other being, thrive best on their
                  mother’s milk. However, some unfortunate creatures like
                  abandoned or orphaned kittens, need a replacement. That is why
                  we have kitten formula, such as kitten milk replacer (KMR).
                </p>
                <p>
                  You need formula and an appropriate bottle with elongated
                  nipple. Just don’t try feeding them Goat milk—it causes
                  diarrhea in kittens.
                </p>
              </div>

              <div>
                <h2 className="font-bold text-xl mb-2">Feeding Frequency</h2>
                <p>
                  To use KMR, follow the label’s quantities strictly to avoid
                  health concerns.
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>First 10 days: every 2 hours</li>
                  <li>11–18 days: every 4 hours</li>
                  <li>2½ to 4 weeks: every 5–6 hours</li>
                  <li>4 weeks+: 2–3 times a day (start weaning)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-bold text-xl mb-2">Early Foods</h2>
                <p>
                  Start mixing wet food with formula and use a bottle. Teach
                  latching by gently pulling the nipple. Gradually mix in dry
                  food and offer water.
                </p>
              </div>
            </section>

            <div className="mt-10">
              <ShareButtons
                title="What To Feed A Newborn Kitten"
                url="https://babykittyrescue.vercel.app/resources/feeding"
              />
            </div>
          </article>

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

export default Feeding;
