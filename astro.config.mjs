// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel"; // ✅ gunakan adapter vercel yang benar

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      API_URL: envField.string({
        access: "public",
        context: "server",
      }),
    },
  },

  output: "static", // ✅ tetap server karena vercel/serverless mendukungnya

  adapter: vercel(), // ✅ ini menggantikan `node()`

  integrations: [tailwind()],

  server: {
    host: "0.0.0.0",
    port: 4321,
  },
});
