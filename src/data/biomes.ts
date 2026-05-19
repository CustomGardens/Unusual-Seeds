/**
 * Site biomes — single source of truth for navigation and placeholder pages.
 */
export type BiomeSlug =
  | "conservatory-of-futures"
  | "house-of-imagined-worlds"
  | "earth-and-ecology"
  | "wonder-and-wander"
  | "rare-specimens";

export interface Biome {
  slug: BiomeSlug;
  title: string;
  shortTitle: string;
  description: string;
  /** Slightly more unusual — used on homepage cards only */
  cardNote: string;
  placeholder: string;
}

export const biomes: Biome[] = [
  {
    slug: "conservatory-of-futures",
    title: "Conservatory of Futures",
    shortTitle: "Futures",
    description:
      "Technology, intelligence, and the choices shaping tomorrow — explained with clarity.",
    cardNote: "Forecasting without spectacle.",
    placeholder:
      "Essays and notes on future thinking — without hype or doom.",
  },
  {
    slug: "house-of-imagined-worlds",
    title: "House of Imagined Worlds",
    shortTitle: "Fiction",
    description:
      "Science fiction and imagined civilizations that help us see our own world.",
    cardNote: "Maps of worlds that never were.",
    placeholder:
      "Books, shows, and ideas worth exploring from imagined futures.",
  },
  {
    slug: "earth-and-ecology",
    title: "Earth & Ecology",
    shortTitle: "Ecology",
    description:
      "Living systems, climate optimism, and our place on a biodiverse planet.",
    cardNote: "Field notes from a world still being understood.",
    placeholder:
      "Nature writing grounded in curiosity and care.",
  },
  {
    slug: "wonder-and-wander",
    title: "Wonder & Wander",
    shortTitle: "Wonder",
    description:
      "Places, cultures, and journeys that restore a sense of scale.",
    cardNote: "Coordinates for the curious.",
    placeholder:
      "Journeys and discoveries from the edges of the map.",
  },
  {
    slug: "rare-specimens",
    title: "Rare Specimens",
    shortTitle: "Specimens",
    description:
      "Unusual ideas, rabbit holes, and discoveries from the margins.",
    cardNote: "Catalogued for the archive.",
    placeholder:
      "Curious finds worth preserving in the archive.",
  },
];

export function getBiome(slug: string): Biome | undefined {
  return biomes.find((b) => b.slug === slug);
}
