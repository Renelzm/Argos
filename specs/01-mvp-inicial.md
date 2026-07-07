# 01 — MVP Inicial (Shell & Home)

**Estado:** Aprobado
**Dependencias:** Ninguna (primer spec del proyecto)
**Fecha:** 2026-07-05

**Objetivo:** Reemplazar el layout placeholder y las páginas actuales por un shell global (header responsivo con menú hamburguesa y toggle de modo claro/oscuro, footer) y una página de inicio con el hero split Gobierno/Empresa, replicando fielmente el copy, los colores y la interacción del prototipo `Arg.os Portal.dc.html`, usando componentes e íconos de `@nuxt/ui`.

## Scope

**Incluye:**

- Reescritura completa de `app/layouts/default.vue`: header sticky + footer globales que envuelven todas las páginas (incluyendo `/gobierno`, `/empresas`, `/nosotros`).
- **Header:** logo (ícono SVG multicolor + wordmark "Arg.Os" tal como aparece en el prototipo HTML, vía componente reutilizable), nav con 3 links (Sector Público → `/gobierno`, Empresa → `/empresas`, Quiénes somos → `/nosotros`), menú hamburguesa colapsable en mobile, y **toggle de modo claro/oscuro** (usando el soporte de color mode de `@nuxt/ui`), **iniciando siempre en modo claro**.
- **Footer:** logo + tagline, columna "Plataforma" (links a `/gobierno` y `/empresas`), columna "Contacto" (mailto + ancla `#contacto`), columna "Institucional" (links placeholder "Políticas" / "Boletín informativo", sin funcionalidad real todavía), línea de copyright. Se apila a una columna en mobile. Debe verse correctamente en ambos modos (claro/oscuro).
- **Página de inicio** (`app/pages/index.vue`), en este orden, con el copy en español tal cual el prototipo:
  1. Banda de hero con logo + wordmark "Arg.Os" + tagline.
  2. Hero split Gobierno/Empresa con efecto hover-grow (adaptado a mobile: se apila verticalmente, el hover se reemplaza por comportamiento táctil razonable).
  3. Franja de tags rápidos ("Chatbots omnicanal", "Sistemas de control", etc.) construida con el componente **`<UMarquee>`** de `@nuxt/ui` (scroll continuo en vez de fila estática con wrap).
  4. Sección "Arquitectura No Invasiva" (promesa técnica) con grid de 3 columnas.
  5. Grid "Soluciones Destacadas" (8 tarjetas de producto).
  6. Sección de métricas "antes/después" (4 tarjetas).
- Íconos vía `Icon` de `@nuxt/ui` con colección Lucide (`i-lucide-*`), sin dependencia nueva de íconos.
- Tipografías Space Grotesk + Inter vía `@nuxt/fonts` (self-hosted).
- Tokens de color (teal gobierno `#007389`, azul empresa `#1a5ccb`, acento rosa `#d81b60`, neutrales) como theme de Tailwind v4 (`@theme` en `main.css`), con variantes válidas para modo claro y oscuro.
- Navegación real con `<NuxtLink>` entre `/`, `/gobierno`, `/empresas`, `/nosotros` (SPA, sin recarga completa).
- Nueva página placeholder `app/pages/nosotros/index.vue` (mínima, ej. `<h1>nosotros</h1>`), igual de simple que las placeholders actuales de `gobierno`/`empresas`.
- Responsive completo desde el inicio (mobile, tablet, desktop).

**No incluye (queda para specs futuros):**

- Contenido real de `/gobierno`, `/empresas` y `/nosotros` más allá del placeholder — specs 02, 03 y 04.
- Páginas/modales de detalle de módulo (`isDetail` en el prototipo) y los widgets interactivos de demo (mapa territorial, monitoreo de medios, preview de chatbot) — pertenecen a las secciones Gobierno/Empresa, no al Home.
- Funcionalidad real de formularios o CTAs ("Agendar demostración", "Boletín informativo") — quedan como links/anclas sin backend.
- Persistencia de la preferencia de modo oscuro entre sesiones (ej. localStorage) — por ahora, **siempre inicia en claro** en cada carga.
- SEO, analítica, sistema de gestión de contenido.

## Data model

Este spec no introduce estructuras de datos nuevas ni persistencia. Todo el contenido (links de nav, tags del marquee, tarjetas de producto, métricas antes/después) es contenido estático definido directamente en los componentes Vue (arrays literales en `<script setup>`), sin backend, API ni almacenamiento. Se omite esta sección.

## Implementation plan

1. **Fundamentos de theming.** Registrar `@nuxt/fonts` en `nuxt.config.ts` (ya está presente como dependencia transitiva de `@nuxt/ui`, se añade explícita a `package.json` y a `modules`) configurado para Space Grotesk + Inter. Declarar los tokens de color (teal gobierno, azul empresa, rosa acento, neutrales) como `@theme` en `app/assets/css/main.css`, con variantes `dark:` compatibles con Tailwind v4. Configurar el color mode de `@nuxt/ui` para que la preferencia por defecto sea `light` (evitando que arranque en modo oscuro por preferencia del sistema).
   - *Sistema funcional:* las páginas placeholder actuales siguen renderizando, ahora con fuentes y tokens disponibles.

2. **Componente de logo.** Crear `app/components/LogoMark.vue` que reproduzca el ícono SVG multicolor y el wordmark "Arg.Os" tal como aparecen en `Arg.os Portal.dc.html`, parametrizable en tamaño, para reutilizarlo en header, footer y home.

3. **Header global.** Construir `app/components/SiteHeader.vue`: logo + wordmark, sticky, nav de escritorio (3 links con `NuxtLink` + íconos Lucide vía `Icon` de `@nuxt/ui`), `UColorModeButton` para alternar claro/oscuro, y menú hamburguesa para mobile con los mismos 3 links.

4. **Footer global.** Construir `app/components/SiteFooter.vue`: logo + tagline, 3 columnas de links (Plataforma, Contacto, Institucional), línea de copyright, responsive (1 columna en mobile).

5. **Ensamblar el layout.** Reescribir `app/layouts/default.vue` para renderizar `SiteHeader` + `<slot />` + `SiteFooter`, eliminando el placeholder actual (`<h2>Layout</h2>`).
   - *Sistema funcional:* `/`, `/gobierno` y `/empresas` ya se ven con header/footer reales.

6. **Placeholder `/nosotros`.** Crear `app/pages/nosotros/index.vue` mínima (`<h1>nosotros</h1>`), para que el link del nav/footer no rompa la navegación.

7. **Home — hero + split funnel.** Construir en `app/pages/index.vue` la banda de hero (logo + wordmark + tagline) y el split Gobierno/Empresa con el efecto hover-grow, adaptado a mobile (apilado vertical, sin hover, tap normal vía `NuxtLink`).

8. **Home — franja de tags con `UMarquee`.** Reemplazar la fila estática de tags del prototipo por `<UMarquee>` con los 8 tags e íconos correspondientes.

9. **Home — secciones restantes.** Agregar la sección "Arquitectura No Invasiva" (grid 3 columnas), el grid "Soluciones Destacadas" (8 tarjetas) y la sección de métricas antes/después (4 tarjetas), todas responsivas (colapsan a 1 columna en mobile).
   - *Sistema funcional:* home completo y navegable de punta a punta.

10. **Verificación responsiva y de modos.** Revisar visualmente en mobile/tablet/desktop y en claro/oscuro que header, footer y las 6 secciones del home se vean correctas, que el toggle cambie de tema, que el menú hamburguesa abra/cierre, y que los 4 links de navegación (`/`, `/gobierno`, `/empresas`, `/nosotros`) funcionen sin recarga completa.

## Acceptance criteria

- [ ] `app/layouts/default.vue` ya no contiene el placeholder `<h2>Layout</h2>`; renderiza header + `<slot />` + footer.
- [ ] El header aparece de forma sticky en `/`, `/gobierno`, `/empresas` y `/nosotros`, con logo (`LogoMark`) y 3 links de nav (Sector Público, Empresa, Quiénes somos).
- [ ] En viewport mobile (<768px), el nav de escritorio se oculta y aparece un botón de menú hamburguesa que abre/cierra un panel con los mismos 3 links.
- [ ] Existe un control de modo claro/oscuro en el header; al cargar la app por primera vez (sin preferencia guardada) el sitio inicia siempre en modo claro, sin importar la preferencia del sistema operativo.
- [ ] Alternar el control de modo cambia visualmente el header, footer y home (fondo, texto, bordes) sin recargar la página.
- [ ] El footer aparece en las 4 rutas, con logo+tagline, 3 columnas de links y línea de copyright; en mobile las columnas se apilan verticalmente.
- [ ] Los links "Sector Público"/"Empresa Privada" del footer y del header navegan a `/gobierno` y `/empresas` respectivamente vía `NuxtLink` (sin recarga completa de página).
- [ ] `app/pages/nosotros/index.vue` existe y es accesible desde el link "Quiénes somos" del nav (el footer, fiel al prototipo, solo enlaza a `/gobierno` y `/empresas`).
- [ ] El home (`/`) muestra, en orden: banda de hero con logo+wordmark+tagline, split Gobierno/Empresa, franja de tags, sección "Arquitectura No Invasiva", grid "Soluciones Destacadas" (8 tarjetas), sección de métricas antes/después (4 tarjetas).
- [ ] En desktop, al pasar el mouse sobre el panel Gobierno o Empresa del split hero, ese panel crece y aparece la frase adicional ("El gobierno compra orden social." / "La empresa compra eficiencia técnica."), igual que en el prototipo.
- [ ] En mobile, el split hero se muestra apilado verticalmente (no lado a lado) y ambos paneles son tocables/navegables sin depender de hover.
- [ ] La franja de tags rápidos usa el componente `<UMarquee>` de `@nuxt/ui` con scroll continuo, no una fila estática.
- [ ] Todas las secciones del home son legibles y sin overflow horizontal en mobile, tablet y desktop (grids de 3 columnas colapsan a 1 columna en mobile).
- [ ] El copy visible en el home coincide con el texto en español del prototipo (títulos, taglines, descripciones de las 8 tarjetas, las 4 tarjetas de métricas).
- [ ] El logo usado en header, footer y home reproduce el ícono SVG multicolor y el wordmark "Arg.Os" con la variación de colores tal como aparecen en `Arg.os Portal.dc.html`, no una versión monocromática.

## Decisiones tomadas y descartadas

- **Header y footer se reemplazan por completo**, no se conserva nada del placeholder actual. *Decisión del usuario.*
- **Copy fiel al prototipo** por ahora; ajustes de texto se harán en una iteración futura, no en este spec. *Decisión del usuario.*
- **Íconos vía `Icon` de `@nuxt/ui` (colección Lucide)** en lugar de agregar `lucide` como dependencia aparte — `@nuxt/ui` ya trae Iconify integrado. *Decisión del usuario.*
- **Tipografía vía `@nuxt/fonts`** (self-hosted) en lugar de `<link>` a Google Fonts por CDN — el paquete ya existe como dependencia transitiva de `@nuxt/ui`, y self-hosting da mejor rendimiento y privacidad. *Decisión técnica, delegada por el usuario.*
- **Navegación con rutas reales de Nuxt (`NuxtLink`)** en lugar de replicar el estado de vista único (`view: 'home'|'public'|...`) del prototipo — es el patrón idiomático de Nuxt y deja el camino libre para SSR/SEO futuro. *Decisión técnica, delegada por el usuario.* Se descarta mantener el modelo de "SPA de un solo archivo con estado".
- **Responsive completo desde el día uno** (hamburguesa, stacks, grids a 1 columna) en lugar de diferirlo a un spec posterior. *Decisión del usuario.*
- **Toggle de modo claro/oscuro con `UColorModeButton` de `@nuxt/ui`**, iniciando siempre en claro. Se descarta (por ahora) persistir la preferencia entre sesiones — queda abierto para una iteración futura si se pide. *Decisión del usuario.*
- **Franja de tags con `<UMarquee>`** en lugar de la fila estática con wrap del prototipo. *Decisión del usuario.*
- **Logo = versión multicolor del prototipo HTML** (el ícono SVG con paths de colores propios —teal, azul, rosa, gris/negro según el contexto— y el wordmark "Arg.Os" con su variación cromática), extraída de `Arg.os Portal.dc.html`. Se descarta la versión monocromática de `app/pre-templates/uploads/argos_logo.svg`. *Corrección del usuario.*
- **El HTML del prototipo (`Arg.os Portal.dc.html`) es la referencia visual maestra de todo el proyecto** (colores, tipografía, estructura, textos): se sigue con fidelidad en este spec y en los siguientes, ajustándose de forma incremental más adelante — no se reinterpreta libremente el diseño. *Decisión del usuario.*
- **Tokens de color como `@theme` de Tailwind v4** en `main.css`, en lugar de hex hardcodeado inline como hace el prototipo — permite reutilización consistente y soporte real de modo oscuro. *Decisión técnica.*

## Riesgos identificados

- `@nuxt/fonts` hoy solo existe como dependencia transitiva de `@nuxt/ui` (no está en `package.json`); si no se fija explícitamente como dependencia directa, una actualización de `@nuxt/ui` podría eliminarla o cambiar su versión sin aviso.
- Los componentes `UMarquee` y `UColorModeButton` se confirmaron por su presencia en `node_modules`, pero no se validó su API completa (props/slots) contra la documentación — es posible que su uso final requiera ajustes menores respecto a lo planeado aquí.
- Los tokens de color de marca (teal, azul, rosa) fueron pensados para fondo claro en el prototipo; en modo oscuro puede requerirse un ajuste de tono para mantener contraste accesible (no cubierto explícitamente por los criterios de aceptación, pero vale revisarlo en implementación).
- El efecto hover-grow del split hero, adaptado a mobile, no tiene una especificación exacta de interacción táctil (tap simple vs. mostrar-y-luego-navegar); se implementará con el criterio de "navegación normal sin depender de hover", pero podría no verse idéntico a como el usuario lo imagina hasta que lo pruebe.
