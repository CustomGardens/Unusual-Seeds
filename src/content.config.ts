import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { biomes } from "./data/biomes";

const biomeSlugs = biomes.map((b) => b.slug) as [
  (typeof biomes)[number]["slug"],
  ...(typeof biomes)[number]["slug"][],
];

const seeds = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/seeds" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    biome: z.enum(biomeSlugs),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { seeds };
