import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/singlestore/driver";

const sql = neon(process.env.DRIZZLE_DB_URL);
export const db = drizzle(sql);