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
              Help Kittens Socialize
            </h1>
            <p className="text-sm text-gray-600 mb-6">August 3, 2021</p>

            <section className="space-y-6 text-base text-[#221a20]">
              <div>
                <p className="mb-4">
                  With kittens, you need to be watchful. Spitting, hissing, and
                  hiding are all expressions of fear, not signs of aggression
                  and must be treated with care. That’s why it’s important to
                  help your litter feel comfortable around other people and
                  animals.
                </p>
                <p>Here are a few tips on how you can begin the process. </p>
                <h2 className="font-bold text-xl mb-2 mt-4">
                  Familiarize Them with Sounds
                </h2>
                <p>
                  Leave the crate in a busy part of home, try leaving the TV or
                  radio on, so they can hear and familiarize themselves with
                  sounds of other people and animals.
                </p>
              </div>

              <div>
                <h2 className="font-bold text-xl mb-2">
                  Reward Good Behavior{" "}
                </h2>
                <p>
                  Start rewarding good behavior early and reinforce by giving
                  them treats, hugs, snuggles and more.
                </p>
              </div>

              <div>
                <h2 className="font-bold text-xl mb-2">Food Friends</h2>
                <p>
                  Feed the young ones with spoon and try petting them while they
                  eat. Let them associate you with food. To make new friends
                  begin introducing them with food and rewards.
                </p>
              </div>

              <div>
                <h2 className="font-bold text-xl mb-2">Playtime</h2>
                <p>
                  Find the toys they love and play with them, every day. Take
                  time to socialize each of the kittens in a litter individually
                  and slowly start taking them out.
                </p>
              </div>

              <div>
                <h2 className="font-bold text-xl mb-2">Introduce Friends</h2>
                <p>
                  Once they are familiar with the household party, its time to
                  socialize them with other people and pets. Take them to a park
                  and let them explore under your watchful eye.
                </p>
              </div>
            </section>

            <div className="mt-10">
              <ShareButtons
                title="Help Kittens Socialize"
                url="https://babykittyrescue.vercel.app/resources/socialize"
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
