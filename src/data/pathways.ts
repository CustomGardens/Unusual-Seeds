import type { BiomeSlug } from "./biomes";

/** One-word garden entrances on the homepage hero */
export interface Pathway {
  slug: BiomeSlug;
  label: string;
  hint: string;
  /** Custom route when biome has a dedicated wing page */
  href?: string;
}

export const pathways: Pathway[] = [
  {
    slug: "conservatory-of-futures",
    label: "Futures",
    hint: "Thoughtful systems ahead",
    href: "/futures",
  },
  {
    slug: "house-of-imagined-worlds",
    label: "Worlds",
    hint: "Stories that illuminate",
    href: "/worlds",
  },
  {
    slug: "earth-and-ecology",
    label: "Earth",
    hint: "Living systems honored",
    href: "/earth",
  },
  {
    slug: "wonder-and-wander",
    label: "Wander",
    hint: "Journeys worth taking",
    href: "/wander",
  },
  {
    slug: "rare-specimens",
    label: "Rare",
    hint: "Curiosities preserved",
    href: "/rare",
  },
];

export function pathwayHref(pathway: Pathway): string {
  return pathway.href ?? `/biomes/${pathway.slug}`;
}
