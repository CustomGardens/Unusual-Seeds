import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://unusual-seeds.com",
  integrations: [mdx(), tailwind({ applyBaseStyles: false })],
  redirects: {
    "/biomes/house-of-imagined-worlds": "/worlds",
    "/biomes/earth-and-ecology": "/earth",
    "/biomes/wonder-and-wander": "/wander",
    "/biomes/conservatory-of-futures": "/futures",
    "/biomes/rare-specimens": "/rare",
  },
});
