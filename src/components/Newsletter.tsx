"use client";

import React, { useState } from "react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "There was an error subscribing.");
      }
      setSubmitted(true);
      setError("");
    } catch (error: any) {
      setError(error.message || "Failed to subscribe");
    }
  };

  return (
    <div className="w-[300px]">
      <h3 className="text-[#221a20] text-[20px] font-bold mb-[20px] font-stretch-110%">
        NEWSLETTER
      </h3>
      <p>
        Feel the kitty love in your life. Get to know the adoption
        opportunities, volunteer positions and more with our newsletter.
      </p>

      {submitted ? (
        <p className="mt-4 text-green-700 font-semibold">
          Thanks for signing up! 🐾
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex mt-[18px]">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#221a20] bg-[#f5f2f8] px-[20px] py-[10px] flex-1 rounded-l-md"
          />
          <button
            type="submit"
            className="bg-[#221a20] text-white px-[20px] py-[10px] flex items-center justify-center rounded-r-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </form>
      )}

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Newsletter;
