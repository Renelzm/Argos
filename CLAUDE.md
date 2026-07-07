# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

**Arg.os** — an early-stage Nuxt 4 marketing/portal site for an AI-solutions company that sells the same underlying technology to two distinct audiences via two site sections:

- **Gobierno** (`/gobierno`) — public sector: citizen service automation, territorial routing, media monitoring, citizen chatbots, digital modernization.
- **Empresas** (`/empresas`) — enterprise: API/ERP integration, workflow automation, lead-gen/prospecting bots, sales scheduling bots.

The full module/product breakdown for both verticals lives in `app/pre-templates/modulos-proyectados.md` — read it before writing copy or building out section pages, since the positioning ("el gobierno compra orden social; la empresa compra eficiencia técnica") drives tone and content differences between the two funnels.

Site content is in Spanish (`app.head.htmlAttrs.lang: 'es'` in `nuxt.config.ts`).

The project is a very thin skeleton right now: most pages are single-element placeholders (`<h1>gobierno</h1>`, etc.) and `layouts/default.vue` just renders a `<slot />` under a literal "Layout" heading — none of this reflects final design intent, it's scaffolding.

## Commands

```bash
npm run dev       # start dev server at http://localhost:3000
npm run build     # production build
npm run generate  # static site generation
npm run preview   # preview a production build locally
```

There is no lint or test tooling configured in this repo yet (no ESLint/Vitest config, no test scripts in `package.json`). Don't assume `npm run lint` or `npm test` exist.

## Architecture

- **Nuxt 4 app-dir layout**: source lives under `app/` (not the repo root) — `app/app.vue`, `app/layouts/`, `app/pages/`, `app/assets/`.
- **Routing** is filesystem-based via `app/pages/**/index.vue` (standard Nuxt page routing — no custom router config).
- **Components auto-import** is configured with `pathPrefix: false` (`nuxt.config.ts`), so components dropped into `app/components/` (directory doesn't exist yet) are globally available by their bare filename, not prefixed by subfolder path.
- **Styling**: Tailwind CSS v4 + `@nuxt/ui` (v4), wired via CSS-only imports in `app/assets/css/main.css` (`@import "tailwindcss"; @import "@nuxt/ui";`) rather than the legacy `tailwind.config.js` approach. The `@nuxtjs/tailwindcss` devDependency is present but the `@nuxt/ui` Nuxt module (which bundles its own Tailwind integration) is the one actually registered in `nuxt.config.ts`'s `modules`.
- **SSR is enabled** (`ssr: true`).

## `app/pre-templates/`

This directory is **design/reference material, not live application code** — nothing here is imported by the Nuxt app.

- `modulos-proyectados.md` — product/business context, see above.
- `Arg.os Portal.dc.html` + `support.js` — a standalone HTML/JS prototype of the landing page funnel (public-vs-enterprise split hero), built in a proprietary `.dc.html` "design doc" format rendered by a bundled React runtime (`support.js`, which is generated — the header says "do not edit"). Treat this as a visual/interaction reference when implementing the real Nuxt pages, not as code to wire in directly.
- `_ds/poder-judicial-coahuila-design-system-*/` — a full institutional brand/design system (colors, type, fonts, UI kit, slide templates) for an unrelated client (Poder Judicial del Estado de Coahuila). This is reference material for a different brand's conventions — do not apply its tokens or voice guidelines to Arg.os pages unless explicitly asked to.
