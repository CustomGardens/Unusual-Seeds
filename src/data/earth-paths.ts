/** Ecological destinations along the Earth conservatory path */
export interface EarthPath {
  num: string;
  title: string;
  hint: string;
}

export const earthPaths: EarthPath[] = [
  { num: "I", title: "Biodiversity", hint: "Species, systems, strange biology" },
  { num: "II", title: "Climate & Hope", hint: "Restoration, adaptation, bright futures" },
  { num: "III", title: "Human Systems", hint: "Food, cities, coexistence" },
  { num: "IV", title: "Wonder", hint: "Hidden phenomena, living science" },
  { num: "V", title: "Travel & Place", hint: "Rainforests, gardens, conservation" },
];
