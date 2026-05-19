/** Full-bleed biome pages — transparent nav, no footer */
export const immersivePaths = new Set([
  "/",
  "/worlds",
  "/earth",
  "/wander",
  "/futures",
  "/rare",
]);

export function isImmersivePath(pathname: string): boolean {
  return immersivePaths.has(pathname.replace(/\/$/, "") || "/");
}
