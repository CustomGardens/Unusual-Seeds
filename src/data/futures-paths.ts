/** Destinations along the Conservatory of Futures */
export interface FuturesPath {
  num: string;
  title: string;
  hint: string;
}

export const futuresPaths: FuturesPath[] = [
  { num: "I", title: "Systems", hint: "Infrastructure, networks, thoughtful design" },
  { num: "II", title: "Intelligence", hint: "AI, local models, human partnership" },
  { num: "III", title: "Technology", hint: "Tools worth building with care" },
  { num: "IV", title: "Possibility", hint: "Hopeful futures without hype" },
  { num: "V", title: "Choices", hint: "Decisions shaping tomorrow" },
];
