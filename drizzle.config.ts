import "@/drizzle/envConfig";
import { defineConfig } from "drizzle-kit";

console.log(process.env.POSTGRES_URL!)

export default defineConfig({
  schema: "./drizzle/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
