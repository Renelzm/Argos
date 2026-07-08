# Arg.os

Sitio de portal/marketing para Arg.os, una empresa de soluciones de IA que vende la misma tecnología base a dos audiencias distintas:

- **Gobierno** (`/gobierno`) — automatización de atención ciudadana, ruteo territorial, monitoreo de medios, chatbots ciudadanos, modernización digital.
- **Empresas** (`/empresas`) — integración API/ERP, automatización de flujos, bots de prospección, agendamiento de ventas.

Construido con [Nuxt 4](https://nuxt.com), Tailwind CSS v4 y [@nuxt/ui](https://ui.nuxt.com). Contenido del sitio en español.

## Setup

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Sitio disponible en `http://localhost:3000`.

## Build / generación estática

```bash
npm run build     # build de producción (SSR)
npm run generate  # generación estática (usada para el deploy)
npm run preview   # preview local de un build de producción
```

No hay lint ni tests configurados todavía en este repo.

## Estructura

- Código fuente bajo `app/` (layout de Nuxt 4): `app/pages/`, `app/components/`, `app/layouts/`, `app/composables/`, `app/assets/`.
- Componentes en `app/components/` son de auto-import global por nombre de archivo (`pathPrefix: false`), sin importar la subcarpeta en la que estén.
- `app/pre-templates/` es material de referencia/diseño (no código vivo de la app).
- Detalle de módulos y posicionamiento de producto por vertical: `app/pre-templates/modulos-proyectados.md`.

### Imágenes estáticas

Las imágenes servidas desde `public/` deben referenciarse con el composable `useAsset()` (`app/composables/useAsset.ts`) en vez de una ruta cruda (`/Imagenes/...`), para que sigan funcionando tanto bajo el `baseURL` de GitHub Pages (`/Argos/`) como en un dominio propio (`/`):

```vue
<img :src="useAsset('/Imagenes/foo.jpg')" alt="...">
```

## Deploy

El deploy a GitHub Pages es automático vía GitHub Actions (`.github/workflows/cd.yml`): cada push a `main` corre `npm run generate` y publica `.output/public` en la rama `gh-pages`.

Repo: `Renelzm/Argos` → sitio publicado en `https://renelzm.github.io/Argos/`.
