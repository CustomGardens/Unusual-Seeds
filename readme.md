Unusual Seeds

**Ideas worth growing.**

Static site for [unusual-seeds.com](https://unusual-seeds.com)—a calm, immersive “digital botanical garden.” The homepage invites; biome pages open into themed wings; articles live under **Seeds**.

Design intent is documented in [`docs/design-constitution.md`](docs/design-constitution.md).

---

## Stack
=======
Unusual Seeds
Ideas worth growing.
Unusual Seeds

Thoughtful ideas about the future, science fiction, nature, and the worlds we might grow.
Planting ideas for tomorrow.

| Piece | Role |
|--------|------|
| [Astro](https://astro.build/) 5 | Static site, routing, MDX |
| Tailwind CSS | Utilities (global styles in [`src/styles/global.css`](src/styles/global.css)) |
| MDX | Seeds (essays under `src/content/seeds`) |

Requires **Node ≥ 18.17**.

---

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the build
npm run check    # astro check
```

---

## Site map

### Homepage

- **`/`** — Full-viewport arrival hero; persistent bottom **conservatory map** (Futures · Worlds · Earth · Wander · Rare).

### Immersive biomes

Full-bleed heroes, exhibit labels in a right-side column (Roman numerals), shared bottom wing map, transparent header, no footer (`hideFooter`). Wing map: [`src/data/pathways.ts`](src/data/pathways.ts); per-wing exhibits: `*-paths.ts` files.

| Wing | Route | Notes |
|------|--------|------|
| Futures | `/futures` | Observatory—systems, intelligence, futures |
| Worlds | `/worlds` | Imagined worlds—numbered exhibits |
| Earth | `/earth` | Earth & ecology—five ecological paths |
| Wander | `/wander` | Travel, places, horizon |
| Rare | `/rare` | Rare specimens—archive tone |

Legacy **`/biomes/[slug]`** URLs redirect to the routes above (see [`astro.config.mjs`](astro.config.mjs)).

### Interior (standard chrome)

| Route | Purpose |
|--------|---------|
| `/seeds` | Seed index |
| `/seeds/...` | Individual MDX seeds |
| `/about` | About |
| `/404` | Not found |

Biome metadata for placeholders and slugs: [`src/data/biomes.ts`](src/data/biomes.ts).

---

## Project layout

```
src/
├── components/       # Nav, plaques, footer, etc.
├── content/seeds/    # MDX content collection
├── content.config.ts # Seeds collection schema
├── data/             # pathways, biomes, immersive-pages, *-paths.ts per wing
├── layouts/          # BaseLayout
├── pages/            # Routes (*.astro)
└── styles/global.css # Hero, biome rooms, pathways, plaques
public/images/        # Hero art and assets
docs/design-constitution.md
```

Immersion detection (transparent nav): [`src/data/immersive-pages.ts`](src/data/immersive-pages.ts).

---

## Content (Seeds)

- Add MDX files under **`src/content/seeds/`**.
- Follow the schema in **`src/content.config.ts`** (frontmatter for title, biome, dates, etc.).

---

## Philosophy (short)

Slow discovery—not a SaaS landing page or hype blog. Each wing keeps **quiet optimism**, editorial typography, restrained motion, and **pathway plaques** rather than boxed UI.

For authoritative tone and visual rules, read **[`docs/design-constitution.md`](docs/design-constitution.md)**.
