/** Specimens along the Rare archive path */
export interface RarePath {
  num: string;
  title: string;
  hint: string;
}

export const rarePaths: RarePath[] = [
  { num: "I", title: "Rabbit Holes", hint: "Deep dives worth the afternoon" },
  { num: "II", title: "Margins", hint: "Ideas from the edges" },
  { num: "III", title: "Curiosities", hint: "Strange and beautiful finds" },
  { num: "IV", title: "Archives", hint: "Worth preserving" },
  { num: "V", title: "Specimens", hint: "Unusual discoveries catalogued" },
];
