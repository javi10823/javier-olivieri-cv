# CLAUDE.md

Guidance for working in this repo.

## What this is

Javier Olivieri's personal CV. **Single source of truth, two outputs:** a live web page and an auto-generated PDF, both built from one typed data file.

## The one rule that matters

**Edit `src/data/cv.ts`. Everything else renders from it.** The web page and the PDF are two views over the same typed `cv` object. Do not hand-edit HTML in components to change content, and never hand-edit `public/cv.pdf` — it is regenerated.

## Architecture

```
src/data/cv.ts  ─►  Astro build  ─►  dist/index.html      ─► Netlify (web)
                                ─►  dist/print/index.html  ─► Playwright ─► public/cv.pdf (committed)
```

- `src/data/cv.ts` — the typed `cv` object + its types. Single source of truth.
- `src/pages/index.astro` — public web view (Hero, Portfolio, Contact form, …).
- `src/pages/print.astro` — print-optimized route rendered to PDF by Playwright.
- `src/components/*.astro` — section components. Many take a `variant: "web" | "print"` prop and render differently per surface.
- `src/layouts/Base.astro` — shared `<html>`, fonts, meta; `printMode` toggles print styles.
- `src/styles/global.css` — Tailwind v4 `@theme` tokens (palette, fonts, accents) shared by web + print.
- `scripts/generate-pdf.ts` — starts `astro preview`, loads `/print` in headless Chromium, exports A4 PDF.

Web vs print differ by which components render and their `variant`, not by duplicated data. The web shows portfolio cards + contact form; print drops those and adds Languages.

## Commands

```bash
pnpm install
pnpm dev            # dev server at localhost:4321
pnpm build          # production build → dist/
pnpm generate-pdf   # regenerate public/cv.pdf (needs `pnpm exec playwright install chromium` once)
```

Requires Node 22+.

## Content model notes (`src/data/cv.ts`)

- `header` — name, headline, contact fields, availability. `website` is optional; when empty it is omitted from every render (Hero, Contact, PrintHeader all guard on it).
- `experience[]` — reverse-chronological; **newest entry goes first in the array**. Renders in full on both web and print (no cap).
- Tags are `{ label, teal? }`; `teal: true` highlights a tag.
- `summary` strings support `**bold**` inline markdown (see `renderInline` in `Hero.astro`).

## CI / deploy

- Push to `main` → GitHub Actions (`.github/workflows/build.yml`) builds, regenerates `public/cv.pdf` via Playwright, and commits it back with `chore: update cv.pdf [skip actions]`.
- `[skip actions]` (not `[skip ci]`) is deliberate: it stops the bot commit from re-triggering Actions while still letting Netlify deploy the refreshed PDF.
- Netlify watches `main` and redeploys on every push (human + bot). End-to-end refresh ~60–90s.
- Live web: https://cv-javier-olivieri-ai-consultant.netlify.app/

## Gotchas

- After changing content, verify the **PDF still fits/paginates well** — adding experience entries or bullets grows the print output.
- `public/cv.pdf` changes will show in `git status` after `pnpm generate-pdf`; committing it locally is fine, but CI regenerates it anyway on push.
