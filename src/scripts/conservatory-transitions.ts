/** Immersive wing paths — transitions only between these routes */
const IMMERSIVE = new Set(["/", "/worlds", "/earth", "/wander", "/futures", "/rare"]);

function pathKey(pathname: string): string {
  return pathname.replace(/\/$/, "") || "/";
}

function linkTargetPath(href: string): string | null {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return null;
  }
  try {
    const url = new URL(href, window.location.origin);
    if (url.origin !== window.location.origin) return null;
    return pathKey(url.pathname);
  } catch {
    return null;
  }
}

/** Only immersive ↔ immersive uses view transitions; other links full navigate */
export function applyTransitionLinkScope(): void {
  const from = pathKey(window.location.pathname);

  document.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((anchor) => {
    const href = anchor.getAttribute("href");
    if (!href) return;

    const to = linkTargetPath(href);
    if (to === null) return;

    if (IMMERSIVE.has(from) && IMMERSIVE.has(to)) {
      anchor.removeAttribute("data-astro-reload");
    } else {
      anchor.setAttribute("data-astro-reload", "");
    }
  });
}

export function scrollHomeToTop(): void {
  const path = pathKey(window.location.pathname);
  if (path === "/" && !window.location.hash) {
    window.scrollTo(0, 0);
  }
}

export function initConservatoryTransitions(): void {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  applyTransitionLinkScope();
  scrollHomeToTop();

  document.addEventListener("astro:page-load", () => {
    applyTransitionLinkScope();
    scrollHomeToTop();
  });

  window.addEventListener("pageshow", () => {
    scrollHomeToTop();
  });
}

initConservatoryTransitions();
