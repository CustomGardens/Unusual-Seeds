/** Destinations along the Wander shoreline path */
export interface WanderPath {
  num: string;
  title: string;
  hint: string;
}

export const wanderPaths: WanderPath[] = [
  { num: "I", title: "Places", hint: "Landscapes, cities, hidden locations" },
  { num: "II", title: "Gardens & Nature", hint: "Botanical spaces, conservation" },
  { num: "III", title: "Journeys", hint: "Travel, perspective, quiet discovery" },
  { num: "IV", title: "Wonder", hint: "Astronomy, serendipity, the unusual" },
  { num: "V", title: "Culture", hint: "Architecture, food, local beauty" },
];
