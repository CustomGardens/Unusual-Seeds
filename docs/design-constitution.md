# Unusual Seeds — Design Constitution

**Version:** 1.1  
**Site:** [unusual-seeds.com](https://unusual-seeds.com)  
**Status:** Source of truth for all design and implementation decisions.

This document exists to prevent design drift and preserve a coherent emotional experience across the entire site. When in doubt, defer to this constitution—not to trends, templates, or convenience.

---

## What This Site Is

**A personal digital botanical garden of ideas.**

It is **not**:

- a blog
- a startup landing page
- a tech-news site
- productivity content
- a portfolio dressed as a publication

The governing feeling:

> **“An unusual place worth exploring slowly.”**

---

## Core Emotional Tone

Every surface should feel:

| Yes | No |
|-----|-----|
| thoughtful | cyberpunk |
| optimistic | dystopian AI aesthetics |
| calming | crypto / startup vibes |
| curious | SaaS design patterns |
| slightly mysterious | fantasy overload |
| science-fiction inspired (plausible) | loud interfaces |
| hopeful future | heavy motion |
| elegant | overexplaining |
| restrained | homepage clutter |
| adult | |
| contemplative | |

**Reference moods (blend, do not literal-copy):** Blue Hour Observatory · mature solarpunk · ecological research institute · botanical conservatory · Stargate-level wonder (quiet, not action) · Carl Sagan curiosity · cabinet of curiosities (interior only).

---

## Site Philosophy

### Two layers

| Layer | Role |
|-------|------|
| **Homepage** | Invitation |
| **Interior pages** | Deeper strata of the unusual |

The homepage is **not a brochure**. It does not explain the project. It **arrives**.

Interior pages may carry more words, structure, and specificity—but never lose calm or place-ness.

### Homepage feeling

> **“I found a real place I wish existed.”**

Prioritize:

- arrival
- mystery
- atmosphere
- emotional curiosity

**Not** explanation, feature lists, or self-description.

### Slow discovery principle

The site reveals depth **gradually**.

| Zone | Unusualness |
|------|-------------|
| Homepage | **15–20%** unusual |
| Biome landing pages | moderately strange |
| Seeds (essays) | thoughtful, specific |
| Rare Specimens | most curious / rabbit-hole |

Users should feel **rewarded for exploring**. The site behaves like a botanical garden: different wings reveal different ecosystems of thought.

---

## Narrative Experience

Unusual Seeds is **spatial storytelling**.

Visitors move through a place—not a feed, not a funnel, not a product tour. Pages are rooms, wings, and paths. Content is discovered by walking, not by being told what the site is.

### Emotional arc

Users should feel:

**curious → welcomed → intrigued → rewarded**

| Stage | What happens |
|-------|----------------|
| **Curious** | The homepage image and atmosphere raise a question without answering it |
| **Welcomed** | Tone is calm, adult, invitational—never demanding or sales-driven |
| **Intrigued** | Pathways and interior pages offer small signals, not explanations |
| **Rewarded** | Deeper pages deliver specificity worth the walk |

### Progressive revelation

The site must **not explain itself immediately**.

Instead, offer:

- **signals** — a word, a hint, a visual mood
- **small invitations** — pathway plaques, quiet links, absence that implies more
- **quiet mystery** — space, restraint, things half-seen
- **progressive revelation** — meaning unfolds across pages, not in one hero block

Visitors should leave thinking:

> **“There is more here than I first noticed.”**

### Spatial storytelling rules

- Treat navigation as **movement through space** (garden → wing → specimen), not category browsing
- Let **silence and absence** do work—empty calm is not unfinished
- Prefer **one strong detail** over five adequate ones
- Interior pages may say more than the homepage, but should still **show before tell**
- Never front-load mission statements, feature lists, or “what this site is about” copy on arrival surfaces

**Test:** If a page reads like it is introducing a product, rewrite it as a place.

---

## Background Image Rule

**The background image is the main character.**

**Current source-of-truth homepage image:**

```
public/images/hero.png
```

Design **around** the image, not over it.

The image must:

- dominate emotional tone
- remain visible
- preserve atmosphere and depth
- avoid heavy overlays that flatten or obscure the scene

UI should feel **lightly placed into the world**—not pasted on top of a dark template.

Text must stay **restrained**. If copy competes with the image, remove copy.

**Implementation note:** Do not use mockup images with baked-in UI text as production heroes. Use clean landscape/architecture photography only.

---

## Homepage Rules

### Allowed on homepage

- Site title: **Unusual Seeds**
- Short tagline: **Ideas worth growing.**
- Quiet navigation (Garden · Seeds · About)
- Pathway markers (see below)

Optional: one **minimal** secondary sentence only if it adds atmosphere without explaining. Default: omit.

### Forbidden on homepage

- Large paragraphs
- “About this site” walls of text
- Keyword dumps / topic tickers
- Biome cards or card grids
- Issue badges, newsletter CTAs, feature grids
- Carl Sagan quotes (unless revisited deliberately as a rare seasonal choice)
- Footer content blocks that break immersion
- Content-heavy landing patterns

**Acceptance test:** A first-time visitor should feel invited, not informed.

---

## Pathway Markers

Pathways are the homepage’s only navigation into biomes.

**Labels (one word each):**

| Label | Biome |
|-------|--------|
| Futures | Conservatory of Futures |
| Worlds | House of Imagined Worlds |
| Earth | Earth & Ecology |
| Wander | Wonder & Wander |
| Rare | Rare Specimens |

### What they are

**Pathways in a botanical conservatory** — not buttons, not cards, not CTAs.

Evoke:

- museum labels
- conservatory plaques
- interpretive signs

**Not:**

- SaaS buttons
- landing-page tiles
- card components with shadows and padding stacks

### Behavior

- small
- quiet
- separated
- floating over the hero image
- subtle transparency / glass-like feel on interaction only
- background visible through them
- hover reveals **tiny** hint text (one short line)
- elegant, restrained

Example hints (tone reference):

- Futures → *Thoughtful systems ahead*
- Wander → *Journeys worth taking*
- Rare → *Curiosities preserved*

### Implementation guardrails

- No large hit areas styled as primary buttons
- No icon grids
- No “EXPLORE →” marketing language on homepage
- Prefer typography and spacing over boxes

---

## Biomes

Each biome is a **wing** of the garden. Tone escalates slightly from homepage to interior.

### 1. Conservatory of Futures

**Topics:** AI, local models, thoughtful technology, systems thinking, future infrastructure.

**Visual tone:** quiet observatory · ecological systems · warm technology

**Strangeness:** low–medium (grounded, adult)

---

### 2. House of Imagined Worlds

**Topics:** Science fiction, Stargate optimism, speculative futures.

**Visual reference:** ringworld / orbital imagery — peaceful scale, not battle sci-fi.

**Strangeness:** medium (slightly stranger than homepage)

---

### 3. Earth & Ecology

**Topics:** Plants, horticulture, biodiversity, climate optimism.

**Visual tone:** botanical garden energy · field notes · living systems

**Strangeness:** low (most grounded wing)

---

### 4. Wonder & Wander

**Topics:** Travel, awe, culture, beautiful places.

**Visual reference:** canal / travel imagery — contemplative, **not** tourist brochure.

**Strangeness:** medium

---

### 5. Rare Specimens

**Topics:** Rabbit holes, unusual discoveries, beautiful ideas at the margins.

**Visual tone:** cabinet of curiosities · archive · specimen labels

**Strangeness:** highest (still restrained—not chaotic)

---

## Visual System

### Typography

- **Editorial, refined, adult, readable**
- Restrained **serif** for display and titles
- Clean **sans** for navigation and UI chrome
- Avoid storybook / fairytale / fantasy display fonts
- Avoid yellow-heavy headline treatment; prefer warm off-white (parchment) on cool backgrounds

### Color

| Role | Direction |
|------|-----------|
| Ambient | Blue-hour sky (`#1a2840` → `#2d4a6a`) |
| Warmth | Conservatory window glow (`#e8c47a` at ~60–70% opacity, accents only) |
| Text | Warm off-white / parchment, not gold flood |
| Ground | Muted natural tones, ink shadows with depth preserved |

**Contrast rule:** Cool ambient + warm interior light = emotional core. Mature civilization that does not shout.

### Motion

**Subtle. Almost invisible.**

| Allowed | Avoid |
|---------|--------|
| slow ambience | flashy motion |
| light parallax (hero, sparingly) | particles |
| quiet hover transitions | heavy animation |
| optional: light intensifying over 30–60s on hero (eyes adjusting) | scroll gimmicks |

### Layout

- Whitespace is sacred
- Restraint is sacred
- Calm enough to **linger**
- Not dense · not rushed · not template-dense

---

## Navigation

### Global (quiet)

- **Home** — full arrival hero (pathways retain `id="garden"` for deep links when needed)
- **Seeds** — essay archive
- **About** — only where context is needed; not homepage clutter

Navigation should disappear into the atmosphere on the homepage.

---

## Content Types

| Type | Description |
|------|-------------|
| **Seeds** | Essays / notes (MDX). Ideas worth growing. |
| **Biomes** | Thematic wings of the garden. Each should feel authored when published. |

Writing tone: calm, curious, specific, no hype, no doom, no tech-bro breathlessness.

---

## No Placeholder Syndrome

A common failure mode in AI-assisted builds: **generic placeholder content** that makes the site feel like a template, not a place.

### Avoid

- Lorem ipsum or “content coming soon” filler paragraphs
- Generic biome blurbs that could describe any website
- Template-looking layouts (card grids, three-column features, “Explore →” CTAs everywhere)
- Default Astro/blog patterns pasted without intentional adaptation
- Dashed-border empty states that look like wireframes left in production
- Stock phrases (“welcome to our site,” “we’re passionate about…”)
- Sections added only because “every page needs one”

### Prefer

- **Intentional absence** over generic presence
- **One true sentence** over a paragraph of placeholder tone
- **Real seeds (essays)** when the archive is ready; a quiet empty archive message if not
- **Biome pages** that feel like a wing’s anteroom—even sparse—rather than a CMS stub
- Copy and layout that could only belong to Unusual Seeds

> **Better to leave a section absent than to include a generic one.**

If a wing is not ready, show less. Do not simulate fullness with filler.

---

## Acceptance Criteria

Before shipping any design or UI change, ask:

1. **Does this feel like a real place?**
2. **Does this increase curiosity?**
3. **Is this calm enough to revisit?**
4. **Are we revealing too much too quickly?**
5. **Does this preserve mystery?**
6. **Is the background still the emotional anchor?**
7. **Does this feel handcrafted rather than templated?**
8. **Does this support the narrative arc** (curious → welcomed → intrigued → rewarded)?
9. **Would removing this generic section improve the place-ness of the page?**

If any answer is no, revise or remove—not add.

---

## Anti-Patterns (Explicit)

Do not introduce without constitution amendment:

- Cyberpunk neon, glowing AI brains, red “alert” AI imagery
- Startup hero + three-column feature grid
- Glass card carousels on homepage
- Dense footer keyword marquees on homepage
- Fantasy castle / storybook illustration as default UI skin
- Full-viewport explanatory copy over hero
- Replacing `hero.png` with UI-mockup images that include baked-in text
- Heavy gradient veils that erase valley depth and sky mood
- Placeholder syndrome (see **No Placeholder Syndrome**)
- “About this project” copy on first-touch surfaces
- Immediate self-explanation that collapses mystery

---

## Technical Anchors (Implementation)

| Item | Location |
|------|----------|
| Homepage hero image | `public/images/hero.png` |
| Pathway config | `src/data/pathways.ts` |
| Biome metadata | `src/data/biomes.ts` |
| Homepage | `src/pages/index.astro` |
| Global styles | `src/styles/global.css` |
| Color tokens | `tailwind.config.mjs` |

When implementing, **read this document first**. PRs that change homepage emotion or visual hierarchy should reference which constitutional sections they serve.

---

## Amendment Process

This is a living document. Changes should be intentional:

1. Describe what emotional drift prompted the change
2. Update the relevant section
3. Bump version at top
4. Align code in the same pass

**Do not** silently erode restraint for speed or “best practices” from other site genres.

---

*Unusual Seeds — Ideas worth growing.*
