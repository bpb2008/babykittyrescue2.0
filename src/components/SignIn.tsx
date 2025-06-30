"use client";

import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="bg-[#221a20] text-white px-4 py-2 rounded-md hover:bg-[#332b30] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Sign In With Google
    </button>
  );
};

export default SignIn;
