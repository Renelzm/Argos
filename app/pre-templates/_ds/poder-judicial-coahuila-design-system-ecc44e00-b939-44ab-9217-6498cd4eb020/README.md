# Poder Judicial del Estado de Coahuila — Design System

An institutional brand system for the **Poder Judicial del Estado de Coahuila de Zaragoza** (Judicial Branch of the State of Coahuila de Zaragoza, Mexico). This system encodes the official logotype, authorized color palette, support elements, typographic voice, and UI foundations used across the court's public-facing surfaces and internal products.

> Visual direction: **Moderno, sobrio, minimalista, imponente.**
> Modern but rooted. Sober in color and typography. Minimalist in layout. Imposing through restraint, whitespace, and institutional symbols — never through ornament or volume.

---

## Source Materials Provided

All originals live in `uploads/` and were processed into `assets/` and `fonts/`.

| File | Content | What we extracted |
|---|---|---|
| `uploads/Colores Autorizados.pdf` | 3 pages — authorized color palette and logotype color applications | 12 brand colors with Pantone refs + hex (see `colors_and_type.css`); 6 logo/bg combinations extracted into `assets/logo-on-*.png` |
| `uploads/Alementos de Apoyo.pdf` | 3 pages — support visual elements | Prismatic 6-point star (`assets/star.png`), heraldic eagle (`assets/crest-eagle.png`), laurel branch (`assets/laurel.png`). All received directly from the Instituto with full transparency. |laurel.png`) |
| `uploads/Patrones.pdf` | 3 pages — branded patterns | Sage star-floret pattern, solid sage field, dark-teal laurel-wave pattern (`assets/pattern-*.png`) |
| `uploads/Gotham-Book.otf` | Primary sans — book weight | `fonts/Gotham-Book.otf` |
| `uploads/Gotham-Bold.otf` | Primary sans — bold weight | `fonts/Gotham-Bold.otf` |
| `uploads/ArnoPro-Caption.otf` | Display serif (used in wordmark) | `fonts/ArnoPro-Caption.otf` |
| `uploads/Helvetica.ttc` | System fallback for body/UI | `fonts/Helvetica.ttc` |
| `uploads/Logotipo Oficial Poder Judicial Coa 2024-0{1-4}.png` | Official logotype applications (provided by Instituto de Especialización Judicial) | Vertical + horizontal logos in positive and negative, downsized to `assets/logo-{vertical,horizontal}{,-white}.png`. These are the canonical applications — use them instead of reconstructions. |

---

## Brand & Product Context

The **Poder Judicial de Coahuila** is the judicial branch of one of the 32 federative states of Mexico. Like all Mexican state judiciaries, it operates under a dignified, formal identity inherited from federal and pre-revolutionary heraldic traditions:

- **The crest** is a stylized Mexican eagle (águila, wings spread) atop a ribbon, flanked by two laurel branches and crowned by a semicircle of seven stars, with a six-point star emblem at the base. This is NOT the federal Mexican coat of arms — it is a judicial heraldic variant.
- **The wordmark** pairs the crest with *"PODER JUDICIAL · COAHUILA DE ZARAGOZA"* set in a classic display serif (Arno Pro).
- **"Coahuila de Zaragoza"** is the full official name of the state (Zaragoza was added in honor of General Ignacio Zaragoza, a Coahuilense).
- Core digital surfaces typically include: a **public website** (news, announcements, directory, transparency, court calendars, service requests), **court-facing portals** (e-filing, case tracking), **formal publications** (boletín judicial, gaceta, annual reports), and **institutional decks** (protocol events, training materials).

This design system is primarily scoped to **public-facing web + presentation materials**, since that is the level of fidelity the provided brand package supports. UI kit recreations for deep internal portals (e.g. tramitación electrónica) would require access to the actual in-production products.

---

## Index — what's where

```
.
├── README.md                         ← you are here
├── SKILL.md                          ← agent entry point (Claude Skills)
├── colors_and_type.css               ← drop-in CSS tokens + type roles
├── fonts/                            ← Gotham, Arno Pro, Helvetica
├── assets/                           ← logo variants, crest, star, laurel, patterns
├── preview/                          ← design-system card previews (auto-registered)
├── ui_kits/
│   └── website/                      ← public website recreation + components
└── slides/                           ← institutional slide templates (16:9)
```

---

## CONTENT FUNDAMENTALS

**Voice.** Institutional, reverent, and precise — the voice of a court, not a brand. The Poder Judicial speaks *on behalf of the state*, not to sell or persuade. Copy defaults to the **third person or impersonal** (*"El Poder Judicial informa…"*, *"Se comunica que…"*, *"Es de interés público…"*), and uses the formal *"usted"* when addressing citizens.

**Casing.**
- **ALL CAPS** for labels, overlines, navigational tabs, and the wordmark (*PODER JUDICIAL · COAHUILA DE ZARAGOZA*). Track it wide (~0.16em).
- **Title Case** in Spanish follows sentence convention — capitalize only the first word and proper nouns (*"Boletín judicial de marzo"*, NOT *"Boletín Judicial De Marzo"*).
- Honor all diacritics: á, é, í, ó, ú, ñ, ü. Never substitute plain letters.

**Tone.** Sober. Never casual, never celebratory, never marketing-y.
- ✓ *"Acuerdos y resoluciones publicadas el 24 de abril de 2026."*
- ✗ *"¡Mira las últimas novedades del Poder Judicial!"*

**Emoji.** **Never.** Emoji are incompatible with the institutional register.

**Numbers, dates, names.**
- Dates in long form: *"24 de abril de 2026"*. Avoid slashes in prose.
- Court names, titles, and officer honorifics are spelled in full on first use: *"Magistrado Presidente"*, *"Consejo de la Judicatura"*, *"Tribunal Superior de Justicia del Estado"*.
- Case/expediente numbers use the official format (e.g. *123/2026*) and are always in monospace or a clearly distinct style.
- Prefer *"Ciudadano / Ciudadana"* or *"Usuario de servicios"* over *"cliente"* or *"user"*.

**Copy examples**

| Context | ✓ Preferred | ✗ Avoid |
|---|---|---|
| Hero headline | Justicia pronta, completa e imparcial. | Bienvenido al mejor tribunal de Coahuila 🎉 |
| Call to action | Iniciar trámite | ¡Empieza ahora! |
| Announcement | Se informa a la ciudadanía… | Oye, te contamos que… |
| Closing | Atentamente, el Poder Judicial del Estado de Coahuila de Zaragoza. | Saludos :) |

**Vocabulary cheatsheet.** Prefer: *acuerdo, resolución, expediente, actuación, promoción, vista pública, despacho, acervo, boletín, gaceta, protocolo, usuario de servicios, ciudadanía, trámite, servicio, transparencia, rendición de cuentas.* Avoid: *cliente, producto, flujo, app, dashboard, onboarding, impactar, accionable* (anglicisms and product-speak are out of register).

---

## VISUAL FOUNDATIONS

### Color
Four **official** logotype colors (the ink–slate–sage–mist quartet), four **accent** colors in the 6105 C family used for categorical applications (navy, forest, purple, magenta), and a **4-step neutral gray scale** derived from Pantone Black. Whites are pure; near-whites are warmed slightly (`#F5F5F2`).

- **Default background**: white or mist (`#C6CABD` at very low opacity, or full-bleed for hero contexts).
- **Default ink**: `#39444B` (the crest color) — *never* pure black for body text.
- **Accent colors are used sparingly and categorically** — e.g. to differentiate court divisions, year-in-review sections, or event verticals. They never appear as decorative gradient fills.
- **No forbidden combinations**: per the Colores Autorizados document, the logo must NOT appear on pure black, pure white, red, bright blue, light blue, or light purple — only on the approved backgrounds (ink, sage, navy 6105C, green 6105C, purple 6105C, magenta 6105C).

### Type
- **Display serif — Arno Pro (Caption).** Used for the wordmark, all major headings, and pull quotes. Gives the weight and classicism befitting a court. Set at generous leading (1.1–1.25).
- **Sans — Gotham (Book / Bold).** Used for body, UI, navigation, and labels. Geometric, modern, neutral. No italics in UI.
- **No hierarchy below 12px.** Captions are 12px minimum on screen.
- **Labels / overlines** are always Gotham Bold, ALL CAPS, 12–13px, tracked to ~0.16em.
- **Wordmark pairing is locked**: serif "PODER JUDICIAL" over smaller sans "COAHUILA DE ZARAGOZA" — never rearrange.

### Spacing
8-point grid (`--space-2` is the atom). Section rhythm on marketing/public surfaces uses `--space-8` (64) or `--space-9` (96) between major blocks. Content widths: 720 (narrow reading), 1120 (default), 1280 (wide marketing).

### Backgrounds
- **Solid white** is the default canvas.
- **Solid sage (`#C6CABD` / `#B4B49E`)** is the secondary ceremonial canvas — used for hero panels, section breaks, and document covers.
- **Solid dark (`#39444B` / `#272425`)** for inverse sections.
- **Patterns** (`assets/pattern-*.png`) are used only as ceremonial/decorative surfaces — document covers, landing hero backgrounds, endpapers. They tile and are kept at very low visual weight (the pattern motifs are themselves monochromatic and low-contrast).
- **Never use multicolor gradients.** A very subtle single-hue top-to-bottom fade (e.g. `#F5F5F2 → white`) is acceptable.
- **Photography** (when used) is warm, desaturated, architectural — court buildings, ceremony shots, historic interiors. Never stock-y lifestyle imagery. Black-and-white is acceptable and often preferable.

### Motion & interaction
- **Easing**: prefer slow, linear-ish ease-out curves — `cubic-bezier(0.2, 0.0, 0.2, 1)` at 200–320ms. No bounces, no overshoot.
- **Fades and position shifts only** — never scale pop-ins or rotate-ins.
- **Hover**: slight darkening (shift toward `--pj-ink`) or a 1px border appearance. Never glow or shadow inflation.
- **Press**: fill-color darken by ~8%. No scale transform.
- **Focus**: visible 2px ring in `--pj-ink` at 2px offset — accessibility is non-negotiable for a public institution.

### Borders, shadows, radii
- **Borders** are the dominant container device: 1px `rgba(57,68,75,0.16)` hairlines define cards, input fields, dividers. Heavier `rgba(57,68,75,0.32)` for emphasis.
- **Shadows** are rare and very subtle — `--shadow-1` / `--shadow-2` only. Never drop a shadow to "float" a card unless it's a modal or dropdown. The brand favors the flat, matte look of printed court documents.
- **Radii** are small: 2–4–8px. **Never fully-rounded** except for a deliberate capsule badge or avatar. The default is **square corners**, honoring the crest's architectural formality.

### Transparency & blur
Used sparingly. A tinted overlay on hero imagery (`rgba(57,68,75,0.55)`) is the one canonical pattern. Avoid glassmorphism, frosted panels, and backdrop blur in UI chrome.

### Layout rules
- **Strong left-align** grid with generous hanging margins. Centered layout reserved for ceremonial pages (cover pages, announcements).
- **Fixed elements**: a top institutional bar (crest + wordmark on left) is the common anchor. Full-bleed sections alternate with contained sections.
- **Rule lines** (1px hairlines above/below sections) are a signature device — they echo the printed boletín.

### Imagery color vibe
Warm, desaturated, muted. Black-and-white is on-brand. Prints, ceremony photographs, and architectural details are preferred over portraits.

---

## ICONOGRAPHY

The brand does **not** ship a bespoke icon set, so this system uses **Lucide** (via CDN, 1.5px stroke) as the primary UI icon font. Lucide's thin, geometric line style matches Gotham's personality and is visually subordinate to the crest and heraldic elements.

**Heraldic marks vs. UI icons — keep separated.** The eagle-and-laurel crest, the six-point star (`assets/star.png`), and the laurel branch (`assets/laurel.png`) are **ceremonial marks**, not icons. They belong in hero panels, document covers, slide templates, and seals — never inline with body text, never as functional toggles, never at small sizes (<64px).

**Rules:**
- **UI icons — Lucide, 1.5px stroke, 20–24px.** Use for navigation, buttons, form affordances, and informational inline glyphs. Pulled from `https://cdn.jsdelivr.net/npm/lucide@latest`. Always monochromatic in `currentColor`, inheriting the surrounding text color.
- **Emoji — never.** Out of register for an institutional surface.
- **Unicode glyphs** (•, ·, →, —, §, ¶) are acceptable as typographic accents in prose but not as replacements for icons.
- **Star mark (`assets/star.png`)** — a signature decorative element. Use as a bullet, section-break ornament, or page-ornament. Size 16–32px for inline; 120px+ for ceremonial display.
- **Laurel (`assets/laurel.png`)** — use only as a large ornamental flourish (e.g. above document titles), never inline.
- **Full crest** — use the official vertical logo (`assets/logo-vertical.png`) when you need the complete wordmark-over-crest lockup. Keep at 160px+ for legibility of the eagle detail.

**Substitution flag.** Lucide is a substitution; the brand has no documented icon system. A bespoke set matching the heraldic linework would be the ideal next step — please flag if you'd like options explored.

---

## Font substitution notes

All 4 primary fonts were provided: **Gotham Book, Gotham Bold, Arno Pro Caption, Helvetica (TTC)**. No substitutions were needed.

If these fonts ever need to be replaced for web-licensing reasons, the closest Google Fonts matches are:
- **Gotham → Montserrat** (weight 400/700)
- **Arno Pro → Cormorant Garamond** (weight 400) or **EB Garamond** (weight 400)
- **Helvetica → Inter** or system-ui

`colors_and_type.css` already includes these as fallback stacks.

---

## How to use this system

1. **Link the CSS**: `<link rel="stylesheet" href="colors_and_type.css">`
2. **Use the tokens**: `color: var(--fg)`, `background: var(--bg-sage)`, etc.
3. **Use the type classes**: `<h1 class="display-1">`, `<p class="lede">`, `<span class="overline">`.
4. **Reach for assets** from `assets/` — never redraw the crest, star, or laurel.
5. **Consult `ui_kits/website/`** for component patterns, and `slides/` for presentation layouts.
6. **When in doubt, subtract.** Sobrio y imponente — not decorated.
