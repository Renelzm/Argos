/* @ds-bundle: {"format":3,"namespace":"PoderJudicialCoahuilaDesignSystem_ecc44e","components":[{"name":"NAV","sourcePath":"astro-site/src/data/site.ts"},{"name":"NEWS","sourcePath":"astro-site/src/data/site.ts"},{"name":"SERVICES","sourcePath":"astro-site/src/data/site.ts"},{"name":"DIRECTORY","sourcePath":"astro-site/src/data/site.ts"},{"name":"TRANSPARENCIA","sourcePath":"astro-site/src/data/site.ts"},{"name":"FOOTER_COLS","sourcePath":"astro-site/src/data/site.ts"}],"sourceHashes":{"astro-site/astro.config.mjs":"1bbd39e6cdd6","astro-site/src/data/site.ts":"8cf639f2c12c","export/pjc-bundle/theme/tailwind.config.ts":"7ded4b28ebe9","export/tailwind.config.js":"eabb3fbb7416","export/tokens.ts":"ee80a88a5703","slides/deck-stage.js":"ad1c016a6256","ui_kits/website/ArticleView.jsx":"a818b766086a","ui_kits/website/DirectoryList.jsx":"08efc0ddc09a","ui_kits/website/Footer.jsx":"50bf902311f1","ui_kits/website/Header.jsx":"326cf7c47665","ui_kits/website/Hero.jsx":"9bfaacf7da25","ui_kits/website/NewsGrid.jsx":"603fa5f8cd85","ui_kits/website/Shared.jsx":"42b69f04fb80"},"inlinedExternals":[],"unexposedExports":[{"name":"config","sourcePath":"export/pjc-bundle/theme/tailwind.config.ts"},{"name":"fontFamily","sourcePath":"export/tokens.ts"},{"name":"fontSize","sourcePath":"export/tokens.ts"},{"name":"layout","sourcePath":"export/tokens.ts"},{"name":"letterSpacing","sourcePath":"export/tokens.ts"},{"name":"lineHeight","sourcePath":"export/tokens.ts"},{"name":"palette","sourcePath":"export/tokens.ts"},{"name":"radius","sourcePath":"export/tokens.ts"},{"name":"shadow","sourcePath":"export/tokens.ts"},{"name":"spacing","sourcePath":"export/tokens.ts"},{"name":"themes","sourcePath":"export/tokens.ts"},{"name":"tokens","sourcePath":"export/tokens.ts"}]} */

(() => {

const __ds_ns = (window.PoderJudicialCoahuilaDesignSystem_ecc44e = window.PoderJudicialCoahuilaDesignSystem_ecc44e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// astro-site/astro.config.mjs
try { (() => {
// https://astro.build
// Astro acepta un objeto de configuración plano; se evita la dependencia
// `astro/config` (defineConfig) para mantener el archivo libre de imports npm.
try {
  void {
    site: 'https://www.pjecz.gob.mx'
    // Sitio estático institucional. No se requieren integraciones de framework:
    // los componentes son .astro (HTML/CSS sobre el design system oficial).
  };
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "astro-site/astro.config.mjs", error: String((e && e.message) || e) }); }

// astro-site/src/data/site.ts
try { (() => {
/**
 * Datos del sitio — navegación, boletines, directorio, footer y secciones.
 * Centralizado para que el contenido se edite sin tocar los componentes.
 */

const NAV = [{
  id: 'home',
  label: 'Inicio',
  href: '/'
}, {
  id: 'boletin',
  label: 'Boletín',
  href: '/boletin'
}, {
  id: 'directorio',
  label: 'Directorio',
  href: '/directorio'
}, {
  id: 'transparencia',
  label: 'Transparencia',
  href: '/transparencia'
}, {
  id: 'tramites',
  label: 'Trámites',
  href: '/tramites'
}];
const NEWS = [{
  slug: 'acuerdos-plenarios-abril',
  cat: 'BOLETÍN',
  color: '#39444B',
  date: '24 ABR 2026',
  title: 'Acuerdos plenarios del Tribunal Superior de Justicia',
  excerpt: 'Publicación de resoluciones correspondientes al mes en curso, con efectos a partir del lunes 28 de abril.'
}, {
  slug: 'nueva-sede-civil-torreon',
  cat: 'CIVIL',
  color: '#323B6B',
  date: '23 ABR 2026',
  title: 'Nueva sede del Juzgado Cuarto de lo Civil en Torreón',
  excerpt: 'La nueva sede abrirá al público el próximo 5 de mayo con horario regular de ventanilla.'
}, {
  slug: 'protocolo-atencion-familiar',
  cat: 'FAMILIAR',
  color: '#5F2D71',
  date: '22 ABR 2026',
  title: 'Protocolo de atención a usuarios en materia familiar',
  excerpt: 'Se actualizan los lineamientos para el acompañamiento a personas en situación de vulnerabilidad.'
}, {
  slug: 'suspension-labores-1-mayo',
  cat: 'AVISO',
  color: '#486238',
  date: '21 ABR 2026',
  title: 'Suspensión de labores el 1 de mayo de 2026',
  excerpt: 'Por conmemoración del Día del Trabajo, no habrá actividad jurisdiccional ni administrativa.'
}, {
  slug: 'capacitacion-sistema-acusatorio',
  cat: 'PENAL',
  color: '#9E3182',
  date: '20 ABR 2026',
  title: 'Capacitación continua en el sistema acusatorio',
  excerpt: 'Inscripciones abiertas para magistrados y personal jurisdiccional del primer distrito judicial.'
}, {
  slug: 'informe-anual-labores-2025',
  cat: 'INSTITUCIONAL',
  color: '#4B5760',
  date: '18 ABR 2026',
  title: 'Informe anual de labores 2025',
  excerpt: 'Disponible para consulta pública en la sección de Transparencia.'
}];
const SERVICES = [{
  title: 'Consulta de expedientes',
  desc: 'Acceso a actuaciones por número y año.',
  href: '/tramites'
}, {
  title: 'Agenda de audiencias',
  desc: 'Horarios y salas por juzgado y distrito.',
  href: '/tramites'
}, {
  title: 'Trámites en línea',
  desc: 'Solicitudes, copias certificadas y más.',
  href: '/tramites'
}, {
  title: 'Transparencia',
  desc: 'Información pública, informes y normativa.',
  href: '/transparencia'
}];
const DIRECTORY = [{
  name: 'Tribunal Superior de Justicia',
  role: 'Pleno',
  head: 'Mag. Miriam Cárdenas Cantú',
  loc: 'Saltillo'
}, {
  name: 'Consejo de la Judicatura',
  role: 'Órgano de gobierno',
  head: 'Mag. Luis Efrén Ríos Vega',
  loc: 'Saltillo'
}, {
  name: 'Primer Distrito Judicial',
  role: 'Saltillo',
  head: 'Juez Presidente rotativo',
  loc: 'Saltillo'
}, {
  name: 'Segundo Distrito Judicial',
  role: 'Torreón',
  head: 'Juez Presidente rotativo',
  loc: 'Torreón'
}, {
  name: 'Tercer Distrito Judicial',
  role: 'Monclova',
  head: 'Juez Presidente rotativo',
  loc: 'Monclova'
}, {
  name: 'Instituto de Especialización Judicial',
  role: 'Capacitación',
  head: 'Dirección General',
  loc: 'Saltillo'
}];
const TRANSPARENCIA = ['Informe anual 2025', 'Presupuesto y ejercicio', 'Estadística judicial', 'Nombramientos', 'Normativa interna', 'Aviso de privacidad'];
const FOOTER_COLS = [{
  title: 'Institución',
  items: ['Historia', 'Magistrados', 'Organigrama', 'Normativa', 'Transparencia']
}, {
  title: 'Servicios',
  items: ['Consulta de expedientes', 'Agenda de audiencias', 'Trámites en línea', 'Peritos', 'Mediadores']
}, {
  title: 'Publicaciones',
  items: ['Boletín judicial', 'Gaceta', 'Acuerdos plenarios', 'Jurisprudencia', 'Informe anual']
}, {
  title: 'Contacto',
  items: ['Directorio', 'Contraloría', 'Quejas y sugerencias', 'Aviso de privacidad']
}];
Object.assign(__ds_scope, { NAV, NEWS, SERVICES, DIRECTORY, TRANSPARENCIA, FOOTER_COLS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "astro-site/src/data/site.ts", error: String((e && e.message) || e) }); }

// export/pjc-bundle/theme/tailwind.config.ts
try { (() => {
/* ==========================================================================
   Poder Judicial Coahuila — tailwind.config.ts (solo Tailwind v3)
   Si usas Tailwind v4, NO necesitas este archivo: todo vive en globals.css
   vía @theme inline. Este config es para proyectos shadcn en v3.
   ========================================================================== */

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)"
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)"
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)"
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)"
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)"
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)"
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)"
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)"
        },
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)"
        }
      },
      borderRadius: {
        lg: "calc(var(--radius) + 2px)",
        md: "var(--radius)",
        sm: "calc(var(--radius) - 2px)"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"]
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};
Object.assign(__ds_scope, { config });
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/pjc-bundle/theme/tailwind.config.ts", error: String((e && e.message) || e) }); }

// export/tailwind.config.js
try { (() => {
/**
 * Poder Judicial Coahuila — Tailwind Config
 * --------------------------------------------------------------------------
 * Genera utilidades Tailwind a partir de los tokens oficiales.
 * Incluye soporte para dark mode vía `data-theme="dark"`.
 *
 * Uso (tailwind v3):
 *   // tailwind.config.js
 *   const pjPreset = require('./design-system/tailwind.config.js');
 *   module.exports = { presets: [pjPreset], content: ['./src/**\/*.{js,ts,jsx,tsx,html}'] };
 *
 * Uso (tailwind v4):
 *   En tu CSS principal: @import "./design-system/tokens.css";
 *   Luego define un @theme con las mismas variables (ver README).
 */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Primitivos de marca (NUNCA cambian)
        pj: {
          ink: '#39444B',
          slate: '#4B5760',
          sage: '#B4B49E',
          mist: '#C6CABD',
          blue: '#323B6B',
          green: '#486238',
          purple: '#5F2D71',
          magenta: '#9E3182',
          'black-100': '#272425',
          'black-75': '#646566',
          'black-50': '#939497',
          'black-25': '#C6C7C8',
          white: '#FFFFFF'
        },
        // Roles semánticos (cambian en dark mode vía CSS vars de tokens.css)
        bg: 'var(--bg)',
        'bg-muted': 'var(--bg-muted)',
        'bg-subtle': 'var(--bg-subtle)',
        'bg-sage': 'var(--bg-sage)',
        'bg-dark': 'var(--bg-dark)',
        'bg-inverse': 'var(--bg-inverse)',
        fg: 'var(--fg)',
        'fg-muted': 'var(--fg-muted)',
        'fg-subtle': 'var(--fg-subtle)',
        'fg-faint': 'var(--fg-faint)',
        'fg-inverse': 'var(--fg-inverse)',
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
        'border-faint': 'var(--border-faint)',
        divider: 'var(--divider)',
        accent: 'var(--accent)',
        'accent-weak': 'var(--accent-weak)',
        link: 'var(--link)',
        'link-hover': 'var(--link-hover)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',
        info: 'var(--info)'
      },
      fontFamily: {
        display: ['"Arno Pro"', '"Cormorant Garamond"', '"EB Garamond"', 'Georgia', 'serif'],
        sans: ['Gotham', 'Montserrat', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', '"SF Mono"', '"JetBrains Mono"', 'Consolas', 'monospace']
      },
      fontSize: {
        '12': '0.75rem',
        '13': '0.8125rem',
        '14': '0.875rem',
        '15': '0.9375rem',
        '16': '1rem',
        '18': '1.125rem',
        '20': '1.25rem',
        '24': '1.5rem',
        '28': '1.75rem',
        '32': '2rem',
        '40': '2.5rem',
        '48': '3rem',
        '64': '4rem',
        '80': '5rem'
      },
      lineHeight: {
        tight: '1.1',
        snug: '1.25',
        normal: '1.5',
        loose: '1.7'
      },
      letterSpacing: {
        tight: '-0.01em',
        wide: '0.08em',
        wider: '0.16em'
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '24px',
        '6': '32px',
        '7': '48px',
        '8': '64px',
        '9': '96px',
        '10': '128px'
      },
      borderRadius: {
        '0': '0',
        '1': '2px',
        '2': '4px',
        '3': '6px',
        '4': '8px',
        full: '9999px'
      },
      boxShadow: {
        '1': '0 1px 0 rgba(57, 68, 75, 0.06)',
        '2': '0 2px 6px rgba(57, 68, 75, 0.08), 0 1px 0 rgba(57, 68, 75, 0.04)',
        '3': '0 8px 24px rgba(57, 68, 75, 0.10), 0 2px 4px rgba(57, 68, 75, 0.04)',
        'inset-1': 'inset 0 0 0 1px rgba(57, 68, 75, 0.10)'
      },
      maxWidth: {
        'content': '1120px',
        'content-wide': '1280px',
        'content-narrow': '720px'
      }
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/tailwind.config.js", error: String((e && e.message) || e) }); }

// export/tokens.ts
try { (() => {
/**
 * Poder Judicial Coahuila — Design Tokens (TypeScript)
 * --------------------------------------------------------------------------
 * Tokens tipados, listos para importar en cualquier framework JS/TS.
 * Compatible con styled-components, Emotion, MUI, Chakra, etc.
 *
 * Uso:
 *   import { tokens, themes, type Theme } from './design-system/tokens';
 *   const color = themes.light.fg;
 */

// =============================================================================
// CAPA 1 — PRIMITIVOS
// =============================================================================

const palette = {
  ink: '#39444B',
  slate: '#4B5760',
  sage: '#B4B49E',
  mist: '#C6CABD',
  blue: '#323B6B',
  green: '#486238',
  purple: '#5F2D71',
  magenta: '#9E3182',
  black100: '#272425',
  black75: '#646566',
  black50: '#939497',
  black25: '#C6C7C8',
  white: '#FFFFFF'
};
const fontFamily = {
  display: '"Arno Pro", "Cormorant Garamond", "EB Garamond", Georgia, "Times New Roman", serif',
  sans: '"Gotham", "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif',
  mono: 'ui-monospace, "SF Mono", "JetBrains Mono", Consolas, monospace'
};
const fontSize = {
  fs12: '0.75rem',
  fs13: '0.8125rem',
  fs14: '0.875rem',
  fs15: '0.9375rem',
  fs16: '1rem',
  fs18: '1.125rem',
  fs20: '1.25rem',
  fs24: '1.5rem',
  fs28: '1.75rem',
  fs32: '2rem',
  fs40: '2.5rem',
  fs48: '3rem',
  fs64: '4rem',
  fs80: '5rem'
};
const lineHeight = {
  tight: 1.1,
  snug: 1.25,
  normal: 1.5,
  loose: 1.7
};
const letterSpacing = {
  tight: '-0.01em',
  normal: '0',
  wide: '0.08em',
  wider: '0.16em'
};
const spacing = {
  s1: '4px',
  s2: '8px',
  s3: '12px',
  s4: '16px',
  s5: '24px',
  s6: '32px',
  s7: '48px',
  s8: '64px',
  s9: '96px',
  s10: '128px'
};
const radius = {
  r0: '0',
  r1: '2px',
  r2: '4px',
  r3: '6px',
  r4: '8px',
  full: '9999px'
};
const shadow = {
  s1: '0 1px 0 rgba(57, 68, 75, 0.06)',
  s2: '0 2px 6px rgba(57, 68, 75, 0.08), 0 1px 0 rgba(57, 68, 75, 0.04)',
  s3: '0 8px 24px rgba(57, 68, 75, 0.10), 0 2px 4px rgba(57, 68, 75, 0.04)',
  inset: 'inset 0 0 0 1px rgba(57, 68, 75, 0.10)'
};
const layout = {
  contentWidth: '1120px',
  contentWidthWide: '1280px',
  contentWidthNarrow: '720px'
};

// =============================================================================
// CAPA 2 — TEMAS SEMÁNTICOS (light / dark)
// =============================================================================

const lightTheme = {
  bg: palette.white,
  bgMuted: '#F5F5F2',
  bgSubtle: palette.mist,
  bgSage: palette.sage,
  bgDark: palette.ink,
  bgInverse: palette.black100,
  fg: palette.ink,
  fgMuted: palette.slate,
  fgSubtle: palette.black75,
  fgFaint: palette.black50,
  fgInverse: palette.white,
  border: 'rgba(57, 68, 75, 0.16)',
  borderStrong: 'rgba(57, 68, 75, 0.32)',
  borderFaint: 'rgba(57, 68, 75, 0.08)',
  divider: palette.black25,
  accent: palette.ink,
  accentWeak: palette.sage,
  link: palette.slate,
  linkHover: palette.ink,
  success: '#486238',
  warning: '#8A6D2B',
  danger: '#8A2B2B',
  info: '#323B6B'
};
const darkTheme = {
  bg: '#1A1F23',
  bgMuted: '#232A2F',
  bgSubtle: '#2C343A',
  bgSage: '#5C5C4F',
  bgDark: palette.ink,
  bgInverse: palette.white,
  fg: '#E8E6E0',
  fgMuted: '#B4B6B0',
  fgSubtle: '#8A8C87',
  fgFaint: '#5F6361',
  fgInverse: palette.ink,
  border: 'rgba(232, 230, 224, 0.14)',
  borderStrong: 'rgba(232, 230, 224, 0.28)',
  borderFaint: 'rgba(232, 230, 224, 0.06)',
  divider: 'rgba(232, 230, 224, 0.10)',
  accent: palette.sage,
  accentWeak: palette.slate,
  link: palette.mist,
  linkHover: palette.white,
  success: '#6E8A57',
  warning: '#B89048',
  danger: '#B85050',
  info: '#6873AE'
};
const themes = {
  light: lightTheme,
  dark: darkTheme
};
// =============================================================================
// EXPORT AGREGADO
// =============================================================================

const tokens = {
  palette,
  fontFamily,
  fontSize,
  lineHeight,
  letterSpacing,
  spacing,
  radius,
  shadow,
  layout,
  themes
};
Object.assign(__ds_scope, { palette, fontFamily, fontSize, lineHeight, letterSpacing, spacing, radius, shadow, layout, themes, tokens });
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/tokens.ts", error: String((e && e.message) || e) }); }

// slides/deck-stage.js
try { (() => {
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const pad2 = n => String(n).padStart(2, '0');
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
    }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    /* Tap zones for mobile — back/forward thirds like Stories.
       Transparent, no visible UI, don't block the overlay. */
    .tapzones {
      position: fixed;
      inset: 0;
      display: flex;
      z-index: 2147482000;
      pointer-events: none;
    }
    .tapzone {
      flex: 1;
      pointer-events: auto;
      -webkit-tap-highlight-color: transparent;
    }
    /* Only activate tap zones on coarse pointers (touch devices). */
    @media (hover: hover) and (pointer: fine) {
      .tapzones { display: none; }
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that connectedCallback injects
       into <head> (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      ::slotted(*:last-child) {
        break-after: auto;
        page-break-after: auto;
      }
      .overlay, .tapzones { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTapBack = this._onTapBack.bind(this);
      this._onTapForward = this._onTapForward.bind(this);
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      // Initial collection + layout happens via slotchange, which fires on mount.
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        this._fit();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Tap zones (mobile): left third = back, right third = forward.
      const tapzones = document.createElement('div');
      tapzones.className = 'tapzones export-hidden';
      tapzones.setAttribute('aria-hidden', 'true');
      tapzones.setAttribute('data-noncommentable', '');
      const tzBack = document.createElement('div');
      tzBack.className = 'tapzone tapzone--back';
      const tzMid = document.createElement('div');
      tzMid.className = 'tapzone tapzone--mid';
      tzMid.style.pointerEvents = 'none';
      const tzFwd = document.createElement('div');
      tzFwd.className = 'tapzone tapzone--fwd';
      tzBack.addEventListener('click', this._onTapBack);
      tzFwd.addEventListener('click', this._onTapForward);
      tapzones.append(tzBack, tzMid, tzFwd);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-noncommentable', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._go(this._index - 1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._go(this._index + 1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));
      this._root.append(style, stage, tapzones, overlay);
      this._canvas = canvas;
      this._slot = slot;
      this._overlay = overlay;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. Inject/update a single <head> style tag so the print
     *  sheet matches the design size and Save-as-PDF yields one slide per
     *  page with no margins. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
        document.head.appendChild(tag);
      }
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }';
    }
    _onSlotChange() {
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        // Determine a label for comment flow: prefer explicit data-label,
        // then an existing data-screen-label, then first heading, else "Slide".
        let label = slide.getAttribute('data-label');
        if (!label) {
          const existing = slide.getAttribute('data-screen-label');
          if (existing) {
            // Strip any leading number the author may have included.
            label = existing.replace(/^\s*\d+\s*/, '').trim() || existing;
          }
        }
        if (!label) {
          const h = slide.querySelector('h1, h2, h3, [data-title]');
          if (h) label = (h.textContent || '').trim().slice(0, 40);
        }
        if (!label) label = 'Slide';
        slide.setAttribute('data-screen-label', `${pad2(n)} ${label}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
    }
    _loadNotes() {
      const tag = document.getElementById('speaker-notes');
      if (!tag) {
        this._notes = [];
        return;
      }
      try {
        const parsed = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(parsed)) this._notes = parsed;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
        this._notes = [];
      }
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      if (!this._overlay) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _fit() {
      if (!this._canvas) return;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        return;
      }
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onTapBack(e) {
      e.preventDefault();
      this._go(this._index - 1, 'tap');
    }
    _onTapForward(e) {
      e.preventDefault();
      this._go(this._index + 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._go(this._index + 1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._go(this._index - 1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._go(this._index + 1, 'api');
    }
    prev() {
      this._go(this._index - 1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/deck-stage.js", error: String((e && e.message) || e) }); }

// ui_kits/website/ArticleView.jsx
try { (() => {
function ArticleView({
  article,
  onBack
}) {
  const a = article || {
    cat: "BOLETÍN",
    color: "#39444B",
    date: "24 ABR 2026",
    title: "Acuerdos plenarios del Tribunal Superior de Justicia",
    excerpt: ""
  };
  return /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 780,
      margin: "0 auto",
      padding: "64px 32px 96px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onBack,
    style: {
      display: "inline-block",
      font: "700 11px/1 var(--font-sans)",
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "#4B5760",
      marginBottom: 32,
      cursor: "pointer"
    }
  }, "\u2190 Regresar al bolet\xEDn"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    color: a.color
  }, a.cat), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 12px/1 var(--font-sans)",
      letterSpacing: ".14em",
      color: "#646566"
    }
  }, a.date, " \xB7 SALTILLO, COAH.")), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "400 52px/1.1 var(--font-display)",
      letterSpacing: "-.005em",
      color: "#39444B",
      margin: "0 0 24px"
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 22px/1.45 var(--font-display)",
      color: "#39444B",
      margin: "0 0 40px"
    }
  }, a.excerpt || "Se comunica a la ciudadanía, a los litigantes y al público en general, lo siguiente:"), /*#__PURE__*/React.createElement(RuleLine, null), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 17px/1.7 var(--font-sans)",
      color: "#39444B"
    }
  }, /*#__PURE__*/React.createElement("p", null, "Por acuerdo del Pleno del Tribunal Superior de Justicia, en su sesi\xF3n ordinaria del d\xEDa 24 de abril de 2026, se hace del conocimiento p\xFAblico la publicaci\xF3n de las resoluciones emitidas durante el mes."), /*#__PURE__*/React.createElement("p", null, "Los interesados podr\xE1n consultar el texto \xEDntegro en la secci\xF3n de ", /*#__PURE__*/React.createElement("em", null, "Transparencia y rendici\xF3n de cuentas"), " del presente portal, o bien, en la ventanilla de archivo judicial ubicada en el Palacio de Justicia de Saltillo, en horario de 9:00 a 14:00 horas."), /*#__PURE__*/React.createElement("p", null, "Lo anterior, con fundamento en los art\xEDculos 144 y 145 de la Ley Org\xE1nica del Poder Judicial del Estado."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 36,
      textAlign: "right",
      fontStyle: "italic",
      color: "#4B5760"
    }
  }, "Atentamente,", /*#__PURE__*/React.createElement("br", null), "Secretar\xEDa General de Acuerdos", /*#__PURE__*/React.createElement("br", null), "Saltillo, Coahuila de Zaragoza")));
}
window.ArticleView = ArticleView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ArticleView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DirectoryList.jsx
try { (() => {
const DIRECTORY = [{
  name: "Tribunal Superior de Justicia",
  role: "Pleno",
  head: "Mag. Miriam Cárdenas Cantú",
  loc: "Saltillo"
}, {
  name: "Consejo de la Judicatura",
  role: "Órgano de gobierno",
  head: "Mag. Luis Efrén Ríos Vega",
  loc: "Saltillo"
}, {
  name: "Primer Distrito Judicial",
  role: "Saltillo",
  head: "Juez Presidente rotativo",
  loc: "Saltillo"
}, {
  name: "Segundo Distrito Judicial",
  role: "Torreón",
  head: "Juez Presidente rotativo",
  loc: "Torreón"
}, {
  name: "Tercer Distrito Judicial",
  role: "Monclova",
  head: "Juez Presidente rotativo",
  loc: "Monclova"
}, {
  name: "Instituto de Especialización Judicial",
  role: "Capacitación",
  head: "Dirección General",
  loc: "Saltillo"
}];
function DirectoryList() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "80px 32px"
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "Directorio institucional"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "400 40px/1.1 var(--font-display)",
      color: "#39444B",
      margin: "10px 0 40px"
    }
  }, "\xD3rganos y \xE1reas"), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid rgba(57,68,75,.16)"
    }
  }, DIRECTORY.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "22px 28px",
      display: "grid",
      gridTemplateColumns: "2fr 1.2fr 1.3fr 0.8fr",
      gap: 20,
      alignItems: "center",
      borderBottom: i < DIRECTORY.length - 1 ? "1px solid rgba(57,68,75,.12)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 15px/1.3 var(--font-sans)",
      color: "#39444B"
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/1 var(--font-sans)",
      color: "#646566",
      marginTop: 4,
      letterSpacing: ".04em"
    }
  }, d.role)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px var(--font-sans)",
      color: "#4B5760"
    }
  }, d.head), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px var(--font-sans)",
      color: "#4B5760"
    }
  }, "\uD83D\uDCCD ", d.loc), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    small: true
  }, "Contactar"))))));
}
window.DirectoryList = DirectoryList;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DirectoryList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function Footer() {
  const cols = [["Institución", ["Historia", "Magistrados", "Organigrama", "Normativa", "Transparencia"]], ["Servicios", ["Consulta de expedientes", "Agenda de audiencias", "Trámites en línea", "Peritos", "Mediadores"]], ["Publicaciones", ["Boletín judicial", "Gaceta", "Acuerdos plenarios", "Jurisprudencia", "Informe anual"]], ["Contacto", ["Directorio", "Contraloría", "Quejas y sugerencias", "Aviso de privacidad"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "#272425",
      color: "#C6C7C8",
      marginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "64px 32px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(4, 1fr)",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-vertical-white.png",
    style: {
      height: 140,
      display: "block"
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 13px/1.55 var(--font-sans)",
      color: "#939497",
      marginTop: 18,
      maxWidth: 280
    }
  }, "Palacio de Justicia, Saltillo, Coahuila de Zaragoza. M\xE9xico.")), cols.map(([title, items]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 11px/1 var(--font-sans)",
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "#fff",
      marginBottom: 20
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: {
      font: "400 13px var(--font-sans)",
      color: "#C6C7C8",
      cursor: "pointer"
    }
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      paddingTop: 24,
      borderTop: "1px solid rgba(255,255,255,.12)",
      display: "flex",
      justifyContent: "space-between",
      font: "400 11px/1 var(--font-sans)",
      letterSpacing: ".08em",
      color: "#939497"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 PODER JUDICIAL DEL ESTADO DE COAHUILA DE ZARAGOZA"), /*#__PURE__*/React.createElement("span", null, "TODOS LOS DERECHOS RESERVADOS \xB7 AVISO DE PRIVACIDAD \xB7 ACCESIBILIDAD"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// Top institutional header
function Header({
  current,
  onNavigate
}) {
  const navItems = [["home", "Inicio"], ["boletin", "Boletín"], ["directorio", "Directorio"], ["transparencia", "Transparencia"], ["tramites", "Trámites"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: "1px solid rgba(57,68,75,.16)",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#272425",
      color: "#C6C7C8",
      padding: "8px 0",
      font: "400 11px/1 var(--font-sans)",
      letterSpacing: ".08em"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 32px",
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, "GOBIERNO DEL ESTADO DE COAHUILA DE ZARAGOZA"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", null, "CONTACTO"), /*#__PURE__*/React.createElement("span", null, "MAPA DEL SITIO"), /*#__PURE__*/React.createElement("span", null, "A+ A\u2212")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "22px 32px",
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal.png",
    style: {
      height: 60
    },
    alt: "Poder Judicial del Estado de Coahuila de Zaragoza"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      border: "1px solid rgba(57,68,75,.25)",
      padding: "8px 12px",
      minWidth: 260
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#939497",
      font: "400 13px var(--font-sans)"
    }
  }, "\uD83D\uDD0D Buscar expediente, acuerdo\u2026"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      borderTop: "1px solid rgba(57,68,75,.08)",
      background: "#F5F5F2"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 32px",
      display: "flex"
    }
  }, navItems.map(([id, label]) => {
    const active = current === id;
    return /*#__PURE__*/React.createElement("a", {
      key: id,
      onClick: () => onNavigate(id),
      style: {
        padding: "16px 20px",
        font: "700 12px/1 var(--font-sans)",
        letterSpacing: ".14em",
        textTransform: "uppercase",
        color: active ? "#39444B" : "#4B5760",
        cursor: "pointer",
        borderBottom: active ? "2px solid #39444B" : "2px solid transparent",
        marginBottom: -1
      }
    }, label);
  }))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "#39444B",
      color: "#fff",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/pattern-laurel-dark.png",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: .35
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1280,
      margin: "0 auto",
      padding: "96px 32px 112px",
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 11px/1 var(--font-sans)",
      letterSpacing: ".22em",
      textTransform: "uppercase",
      color: "#C6CABD",
      marginBottom: 28
    }
  }, "PODER JUDICIAL DEL ESTADO DE COAHUILA DE ZARAGOZA"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "400 64px/1.05 var(--font-display)",
      letterSpacing: "-.005em",
      margin: "0 0 24px",
      color: "#fff"
    }
  }, "Justicia pronta,", /*#__PURE__*/React.createElement("br", null), "completa e imparcial."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 18px/1.5 var(--font-sans)",
      maxWidth: 520,
      color: "#C6CABD",
      margin: "0 0 36px"
    }
  }, "Portal oficial del Tribunal Superior de Justicia y del Consejo de la Judicatura del Estado. Consulte acuerdos, tr\xE1mites y servicios con plena transparencia."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate("tramites"),
    style: {
      background: "#fff",
      color: "#39444B",
      border: "none",
      padding: "14px 26px",
      font: "700 13px/1 var(--font-sans)",
      letterSpacing: ".08em",
      textTransform: "uppercase",
      cursor: "pointer"
    }
  }, "Iniciar tr\xE1mite"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate("boletin"),
    style: {
      background: "transparent",
      color: "#fff",
      border: "1px solid rgba(255,255,255,.5)",
      padding: "13px 25px",
      font: "700 13px/1 var(--font-sans)",
      letterSpacing: ".08em",
      textTransform: "uppercase",
      cursor: "pointer"
    }
  }, "Bolet\xEDn judicial"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-vertical-white.png",
    style: {
      width: "min(360px,100%)",
      opacity: .95
    },
    alt: ""
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/NewsGrid.jsx
try { (() => {
const NEWS = [{
  cat: "BOLETÍN",
  color: "#39444B",
  date: "24 ABR 2026",
  title: "Acuerdos plenarios del Tribunal Superior de Justicia",
  excerpt: "Publicación de resoluciones correspondientes al mes en curso, con efectos a partir del lunes 28 de abril."
}, {
  cat: "CIVIL",
  color: "#323B6B",
  date: "23 ABR 2026",
  title: "Nueva sede del Juzgado Cuarto de lo Civil en Torreón",
  excerpt: "La nueva sede abrirá al público el próximo 5 de mayo con horario regular de ventanilla."
}, {
  cat: "FAMILIAR",
  color: "#5F2D71",
  date: "22 ABR 2026",
  title: "Protocolo de atención a usuarios en materia familiar",
  excerpt: "Se actualizan los lineamientos para el acompañamiento a personas en situación de vulnerabilidad."
}, {
  cat: "AVISO",
  color: "#486238",
  date: "21 ABR 2026",
  title: "Suspensión de labores el 1 de mayo de 2026",
  excerpt: "Por conmemoración del Día del Trabajo, no habrá actividad jurisdiccional ni administrativa."
}, {
  cat: "PENAL",
  color: "#9E3182",
  date: "20 ABR 2026",
  title: "Capacitación continua en el sistema acusatorio",
  excerpt: "Inscripciones abiertas para magistrados y personal jurisdiccional del primer distrito judicial."
}, {
  cat: "INSTITUCIONAL",
  color: "#4B5760",
  date: "18 ABR 2026",
  title: "Informe anual de labores 2025",
  excerpt: "Disponible para consulta pública en la sección de Transparencia."
}];
function NewsGrid({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "80px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 40,
      borderBottom: "1px solid #39444B",
      paddingBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, null, "Sala de prensa \xB7 Boletines"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "400 42px/1.1 var(--font-display)",
      color: "#39444B",
      margin: "10px 0 0"
    }
  }, "Avisos y acuerdos recientes")), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => onOpen("boletin")
  }, "Ver todos \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 32
    }
  }, NEWS.map((n, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    onClick: () => onOpen("article", n),
    style: {
      cursor: "pointer",
      background: "#fff",
      border: "1px solid rgba(57,68,75,.16)",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      transition: "border-color .2s"
    },
    onMouseEnter: e => e.currentTarget.style.borderColor = "rgba(57,68,75,.5)",
    onMouseLeave: e => e.currentTarget.style.borderColor = "rgba(57,68,75,.16)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    color: n.color
  }, n.cat), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 11px/1 var(--font-sans)",
      letterSpacing: ".14em",
      color: "#646566"
    }
  }, n.date)), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "400 22px/1.2 var(--font-display)",
      color: "#39444B",
      margin: 0
    }
  }, n.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 14px/1.55 var(--font-sans)",
      color: "#4B5760",
      margin: 0
    }
  }, n.excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      font: "700 11px/1 var(--font-sans)",
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "#39444B"
    }
  }, "Leer m\xE1s \u2192")))));
}
window.NewsGrid = NewsGrid;
window.NEWS = NEWS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/NewsGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
// Shared atoms
const {
  useState
} = React;
function Button({
  variant = "solid",
  children,
  onClick,
  small
}) {
  const base = {
    font: `700 ${small ? 11 : 13}px/1 var(--font-sans)`,
    letterSpacing: ".08em",
    textTransform: "uppercase",
    padding: small ? "8px 14px" : "12px 22px",
    cursor: "pointer",
    borderRadius: 0,
    transition: "all .2s cubic-bezier(.2,0,.2,1)"
  };
  const styles = {
    solid: {
      ...base,
      background: "#39444B",
      color: "#fff",
      border: "none"
    },
    outline: {
      ...base,
      background: "transparent",
      color: "#39444B",
      border: "1px solid #39444B"
    },
    link: {
      ...base,
      background: "transparent",
      color: "#39444B",
      border: "none",
      padding: `${small ? 6 : 8}px 4px`,
      borderBottom: "1px solid #39444B"
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    style: styles[variant],
    onClick: onClick
  }, children);
}
function Badge({
  color = "#39444B",
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: color,
      color: "#fff",
      padding: "4px 10px",
      font: "700 11px/1.2 var(--font-sans)",
      letterSpacing: ".14em",
      textTransform: "uppercase"
    }
  }, children);
}
function RuleLine({
  ornament = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: ornament ? "1fr auto 1fr" : "1fr",
      gap: 20,
      alignItems: "center",
      margin: "48px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "#39444B",
      opacity: .3
    }
  }), ornament && /*#__PURE__*/React.createElement("img", {
    src: "../../assets/star.png",
    style: {
      height: 22,
      opacity: .9
    },
    alt: ""
  }), ornament && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "#39444B",
      opacity: .3
    }
  }));
}
function Overline({
  children,
  color = "#646566"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 11px/1 var(--font-sans)",
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color
    }
  }, children);
}
Object.assign(window, {
  Button,
  Badge,
  RuleLine,
  Overline
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.NAV = __ds_scope.NAV;

__ds_ns.NEWS = __ds_scope.NEWS;

__ds_ns.SERVICES = __ds_scope.SERVICES;

__ds_ns.DIRECTORY = __ds_scope.DIRECTORY;

__ds_ns.TRANSPARENCIA = __ds_scope.TRANSPARENCIA;

__ds_ns.FOOTER_COLS = __ds_scope.FOOTER_COLS;

})();
