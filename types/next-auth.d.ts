import NextAuth from "next-auth";

// What I originally had...
// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: string; 
//       name?: string | null; 
//       email?: string | null;
//       image?: string | null; 
//     };
//   }

//   interface User {
//     id: string; 
//     name?: string | null; 
//     email?: string | null
//   }
// }

//What is in the tutorial... 

declare module "next-auth" {
  interface Session {
    user: {
      id: string; 
      name: string; 
    }
  }
}
