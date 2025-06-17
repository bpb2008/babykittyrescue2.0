"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <button
      className="border border-[#DCCAE3] bg-[#221a20] text-white px-4 py-2 rounded hover:bg-[#DCCAE3] hover:text-black transition-colors duration-300"
      onClick={() => signIn("google")}
    >
      Admin Login
    </button>
  );
}
