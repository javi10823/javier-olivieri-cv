# Javier Olivieri — CV

[![Build](https://github.com/javi10823/javier-olivieri-cv/actions/workflows/build.yml/badge.svg)](https://github.com/javi10823/javier-olivieri-cv/actions/workflows/build.yml)
[![Deployed on Netlify](https://img.shields.io/badge/deploy-netlify-00c7b7?logo=netlify&logoColor=white)](https://cv-javier-olivieri-ai-consultant.netlify.app/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Made with Astro](https://img.shields.io/badge/built%20with-Astro-ff5d01?logo=astro&logoColor=white)](https://astro.build)

**Single source of truth, two outputs: web + auto-generated PDF.**

> _Screenshot placeholder — TODO: add a hero shot of the deployed site._

## Why this exists

A CV is a living document. The web version drifts away from the PDF, the PDF drifts away from the LinkedIn copy, and three months later none of them say the same thing. This repo collapses that into one editable surface: every field — bullets, metrics, testimonials, stack — lives in a single typed TypeScript object, and the build emits both a static web page and a `cv.pdf` file from it. Edit once, both outputs update on the next push.

## How it works

```
┌────────────────────┐
│  src/data/cv.ts    │  single source of truth (TypeScript, typed)
└──────────┬─────────┘
           │
           ▼
   ┌───────────────┐
   │  Astro build  │
   └──────┬────┬───┘
          │    │
          │    └──────────►  /print  ──►  Playwright (Chromium)  ──►  public/cv.pdf
          │
          └────────────────►  /index.html  (the deployed website)
```

- The web page (`/`) renders from the same data as `/print`, but with full nav, scroll-spy, hover states, contact form, and portfolio cards.
- The print page (`/print`) is a separate route optimized for A4: tighter spacing, no nav, no form, page-break hints, and an extra Languages section.
- A GitHub Actions workflow runs the build + PDF generation on every push to `main` and commits the regenerated `cv.pdf` back to the repo. Netlify autodeploys.

## Tech stack

- **Astro** — static site generator, content-first
- **TypeScript** (strict) — typed data model, no `any`
- **Tailwind v4** — design tokens via `@theme`, base styles colocated with the rest
- **Playwright** — headless Chromium for PDF export with backgrounds preserved
- **GitHub Actions** — CI that rebuilds the PDF on every content change
- **Netlify** — static hosting with auto-deploy on push to `main`

## Project structure

```
.
├── public/
│   └── cv.pdf                  # generated artifact, committed to the repo
├── scripts/
│   └── generate-pdf.ts         # Playwright PDF exporter
├── src/
│   ├── data/
│   │   └── cv.ts               # ← THE single source of truth
│   ├── components/             # Astro components (Hero, Stack, Experience, …)
│   ├── layouts/
│   │   └── Base.astro          # shared <html>, fonts, meta
│   ├── pages/
│   │   ├── index.astro         # public web CV
│   │   └── print.astro         # A4-optimized print route
│   └── styles/
│       └── global.css          # design tokens + component CSS
├── .github/workflows/build.yml # CI: build site, regenerate PDF, commit
├── astro.config.mjs
└── package.json
```

## Local development

Requires Node 22+ and pnpm 8+.

```bash
pnpm install                           # install dependencies
pnpm dev                               # http://localhost:4321
pnpm build                             # build static site → dist/
pnpm exec playwright install chromium  # one-time browser download
pnpm generate-pdf                      # spin up preview, render /print, write public/cv.pdf
```

## How to update the CV

**Edit `src/data/cv.ts`. Push. Done.**

That's the whole flow. The data file is fully typed, so the editor will guide you for every field. No HTML, no markdown, no tracking which page each section lives on. Push to `main` and the workflow regenerates `public/cv.pdf`, then Netlify ships the new web version.

## Deployment

| Surface | URL                                              | Trigger                                   |
| ------- | ------------------------------------------------ | ----------------------------------------- |
| Web     | `cv-javier-olivieri-ai-consultant.netlify.app`   | Push to `main` → Netlify auto-build       |
| PDF     | `/cv.pdf` on the same domain (also in repo)     | Push to `main` → CI regenerates + commits |

The CI workflow:

1. Checkout, install pnpm + Node 22.
2. `pnpm install` and `pnpm build`.
3. Install Chromium for Playwright.
4. Run `pnpm generate-pdf` (boots the preview server, exports A4 PDF, kills server).
5. If `public/cv.pdf` changed, commit it back with `[skip ci]` to avoid feedback loops.
6. Netlify detects the push and redeploys the site (with the updated PDF).

## License

[MIT](LICENSE) — Javier Olivieri, 2026.

---

Built by [Javier Olivieri](https://devlabs.dev) · [LinkedIn](https://linkedin.com/in/javierolivieri) · [devlabs.dev](https://devlabs.dev)
