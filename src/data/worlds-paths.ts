/** Exhibits in the House of Imagined Worlds wing */
export interface WorldsPath {
  num: string;
  title: string;
  hint?: string;
}

export const worldsPaths: WorldsPath[] = [
  { num: "I", title: "Stargate Optimism" },
  { num: "II", title: "Solarpunk Without the Costume" },
  { num: "III", title: "The Future as a Place Worth Visiting" },
];
