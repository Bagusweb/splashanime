// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

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

  output: "server",

  adapter: node({
    mode: "standalone",
  }),

  integrations: [tailwind()],

  server: {
    host: "0.0.0.0",
    port: 4321,
  },
});
