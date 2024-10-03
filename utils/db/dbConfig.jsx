import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { schema } from "./schema"; // Adjust this import path as necessary

// Ensure DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in the environment variables");
}

// Create the SQL connection
const sql = neon(process.env.DATABASE_URL);

// Create the database instance
export const db = drizzle(sql, { schema });
