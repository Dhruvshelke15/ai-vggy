import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_wrYOshV80bQe@ep-icy-term-a8p2pywq-pooler.eastus2.azure.neon.tech/ai-vggy?sslmode=require',
  },
});
