import config from "@/lib/auth.config";
import { defineConfig } from "drizzle-kit";

// import { config } from "dotenv";
// import { defineConfig } from "drizzle-kit";

// config({ path: ".env" });

// export default defineConfig({
//   out: "./migrations",
//   schema: "./src/db/schema.ts",
//   dialect: "postgresql",
//   dbCredentials: {
//     url: process.env.DATABASE_URL!,
//   },
// });

let sslmode = ""; 
if (config.APP_ENV === "production") {
  sslmode = "?sslmode=require";
}

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./migrations",
  driver: "pg", 
  dbCredentials: {
    connectionString: config.POSTGRES_URL + sslmode, 
  }, 
  verbose: true, 
  strict: true, 
})
