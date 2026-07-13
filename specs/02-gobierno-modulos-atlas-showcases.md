# 02 — Módulos de Gobierno: Atlas + Showcases

**Estado:** Implementado
**Dependencias:** Ninguna formal; se apoya en la estructura ya existente y no formalizada por spec previo (`app/components/(products)/ProductosGobierno.vue`, `ProductDetailPanel.vue`, `ProductListItem.vue`, `app/types/product.ts`, `useProductTheme.js`).
**Fecha:** 2026-07-13

**Objetivo:** Extender el tipo `Product` y el panel de detalle de `/gobierno` con un campo opcional de "showcases" (demos/dashboards en vivo), usarlo para desarrollar por completo el nuevo producto "Atlas Gestión Urbana Integral" (con sus 8 sub-plataformas) y para completar el showcase faltante de "Monitoreo de Medios", y cargar con los datos disponibles — marcados con `// TODO` en el código — los 5 módulos restantes descritos en `modulosGOB.md` (Consultoría/Logos, Citizen Bots, Arquímedes, Chronos Scheduling, Themis-Cognitive).

## Scope

**Incluye:**

- Extender `app/types/product.ts` con un campo opcional `showcases?: ProductShowcase[]`, donde `ProductShowcase = { label: string, url: string, image?: string, imageAlt?: string }`.
- Extender `ProductDetailPanel.vue` para renderizar la sección "Showcases en vivo" cuando `product.showcases?.length`, siguiendo el mismo lenguaje visual (chips, bordes, dark mode) que las secciones existentes de `features`/`channels`.
- Completar el producto existente **"Monitoreo de Medios"** agregando su `showcases` faltante (link de Data Studio + `PanelMonitoreoM.png`).
- Agregar el nuevo producto **"Atlas Gestión Urbana Integral"** en `ProductosGobierno.vue`, con la misma profundidad que "Monitoreo de Medios": `eyebrow`, `description` (resumen del sistema: Panel Admin + Tablero KPI + App móvil), `features` (los 3 componentes centrales + las 8 sub-plataformas: Atención ciudadana, Bacheo, Tránsito y Vialidad, Salud animal, Parques y Jardines, Apoyos y Gestiones, Alumbrado Público, Semaforización), `showcases` (las 4 sub-plataformas con demo en vivo: Atención ciudadana ×2, Bacheo, Tránsito y Vialidad ×2, Salud animal), `images`/`portrait` con los assets disponibles en `public/Imagenes/`.
- Agregar los 5 módulos restantes de `modulosGOB.md` como entradas nuevas en el mismo array de `products`, con los datos disponibles hoy (descripción, algunas `features`, imágenes de apoyo si aplican): **Logos / Consultoría**, **Citizen Bots**, **Arquímedes**, **Chronos Scheduling**, **Themis-Cognitive**. Cada uno con un comentario `// TODO:` en el código señalando qué información falta (ej. showcases, imágenes específicas, features completas).

**No incluye (queda para specs futuros):**

- Ningún badge o indicador visual de "incompleto" en el UI — la distinción es solo a nivel de código (`// TODO`).
- Páginas de detalle dedicadas por producto (rutas propias tipo `/gobierno/atlas`) — se mantiene el patrón actual de panel de detalle in-page.
- Contenido de la rama Empresas (`/empresas`) — fuera de alcance, este spec es solo `/gobierno`.
- Persistencia, backend o CMS para los datos de producto — siguen siendo arrays literales en `<script setup>`.
- Corrección/reescritura editorial del copy más allá de adaptar el texto crudo de `modulosGOB.md` a un tono consistente con "Monitoreo de Medios" — no se inventa contenido no presente en el archivo fuente.

## Data model

### Extensión de tipos (`app/types/product.ts`)

```ts
interface ProductShowcase {
  label: string
  url: string
  image?: string
  imageAlt?: string
}

interface Product {
  ...  // campos existentes sin cambios
  showcases?: ProductShowcase[]
}
```

Regla: un item entra a `showcases` solo si tiene URL de demo en vivo (Data Studio). Si un dato tiene imagen pero no URL, va al `images[]` existente, no a `showcases`.

### Monitoreo de Medios (completar)

- Agregar `showcases: [{ label: 'Monitoreo de medios en vivo', url: 'https://datastudio.google.com/u/0/reporting/14682381-bff1-48d9-80f4-00dac737b748/page/JlIxF', image: '/Imagenes/PanelMonitoreoM.png' }]`.

### Atlas Gestión Urbana Integral (nuevo, completo)

- `title`: "Atlas Gestión Urbana Integral", `eyebrow`: "Atlas", `color`: `gobierno`.
- `description`: resumen del sistema (plataforma que unifica Panel de Administración Central + Tablero KPI + App Móvil para bacheo, áreas verdes, semáforos, vialidad, luminarias).
- `features` (8 sub-plataformas, sin imagen ni link): Atención ciudadana, Bacheo, Tránsito y Vialidad, Registro de salud animal, Parques y Jardines, Apoyos y Gestiones, Alumbrado Público, Semaforización — cada una con ícono Lucide representativo.
- `showcases` (las 4 sub-plataformas con demo en vivo):
  - Atención ciudadana → 2 items: `url` c499568e.../vaNFF + `image: PanelAtencionCiudadana.png`, y `url` 2846eca4.../vaNFF + `image: PanelAtencionCiudadana01.png`.
  - Bacheo → `url` 95d84a6b... + `image: PanelBacheo.png`.
  - Tránsito y Vialidad → 2 items: `url` 2bab830a... y `url` 6f6b79b4.../9HeJF. **Supuesto aceptado:** se usa `PanelAccidentesViales.png` como imagen para ambos, ya que el archivo fuente no especifica una imagen "Mini" para esta sub-plataforma, pero el asset ya existe en `public/Imagenes/` y coincide temáticamente.
  - Registro de salud animal → `url` 29163149... **Supuesto aceptado:** se usa `PanelSaludAnimal.png` (mismo caso: no está en el texto como "Mini", pero el asset existe y coincide).
- `images` de apoyo: ninguna adicional confirmada más allá de las de showcases.

### Logos / Consultoría (nuevo)

- `title`: "Logos / Consultoría", `eyebrow`: "Consultoría", `color`: `gobierno`.
- `description`: procesamiento de datos para políticas públicas, trámites y modernización gubernamental (resumen del bloque "BASE" de `modulosGOB.md`).
- `features` (6, sin imagen): Políticas públicas, Trámites gubernamentales, Mapeo de oportunidades de modernización, Manejo de crisis, Reestructuración administrativa gubernamental, Encuestas.
- `showcases`: Panel Encuestas (`url` 83fd2af4... + `image: PanelEncuestas.png`), Desarrollo Social (`url` 2529d13b... + `image: PanelDesarrolloSocial.png`).
- `images` (apoyo): `PanelSeguimiento.png` (Seguimiento de Planes y Proyectos, sin URL), `consultoria01.jpg`, `consultoria02.png`.
- `// TODO`: falta URL de demo en vivo para "Seguimiento de Planes y Proyectos"; falta detallar el listado completo de especialidades (Finanzas Públicas, Obra Pública, Seguridad Pública, etc.) — se resumió a 6 features representativas.

### Citizen Bots (nuevo)

- `title`: "Citizen Bots", `eyebrow`: "Agentes conversacionales", `color`: `gobierno`.
- `description`: sistemas conversacionales omnicanal 24/7 para quejas ciudadanas, reportes y propuestas.
- `features` (8, sin imagen): Quejas ciudadanas, Recolección de datos, Identificación de imágenes con IA, Entendimiento de voz, Entendimiento de lenguaje popular, Georreferenciación, Reportes de fallas, Atención ciudadana.
- `channels`: WhatsApp, Telegram, Web.
- `images` (apoyo): `chatbot atc ciudana.jpg`, `chatbot-explicado.png`.
- `// TODO`: sin showcase en vivo; sin portrait definido.

### Arquímedes (nuevo)

- `title`: "Arquímedes", `eyebrow`: "Automatización Administrativa", `color`: `gobierno`.
- `description`: plan de modernización tecnológica, reemplazo de flujos en papel por nodos automatizados, reingeniería operativa.
- `features` (4, sin imagen): Automatización de procesos administrativos repetitivos, Reingeniería operativa, Digitalización de trámites, De papel a digital.
- `portrait`: `Arquimedes01.png`.
- `images` (apoyo): `Servicios01.png`, `Servicios02.png`, `Servicios06.jpg`.
- `// TODO`: sin showcase en vivo; falta confirmar si las imágenes "analog(o) a digital*.png" aplican aquí o a otro módulo.

### Chronos Scheduling (nuevo)

- `title`: "Chronos Scheduling", `eyebrow`: "Gestión Ciudadana de Citas y Trámites", `color`: `gobierno`.
- `description`: agendamiento omnicanal (WhatsApp/Telegram), consulta de requisitos, disponibilidad en tiempo real.
- `features` (4, sin imagen): Automatización de agenda, Disponibilidad, Asistente administrativo virtual, Trámites en general.
- `channels`: WhatsApp, Telegram.
- `images` (apoyo): `citas y tramites 3.507Z.png`, `citas y tramites 2.776Z.png`.
- `// TODO`: sin showcase en vivo; sin portrait definido.

### Themis-Cognitive (nuevo)

- `title`: "Themis-Cognitive", `eyebrow`: "Asistente de Consulta Normativa", `color`: `gobierno`.
- `description`: copiloto cognitivo para servidores públicos, análisis de leyes/reglamentos/manuales internos.
- `features` (1, sin imagen): Vectorización de documentos.
- `// TODO`: contenido más incompleto de los 5 — el texto fuente en `modulosGOB.md` corta a media oración; falta descripción completa, features adicionales, imágenes y cualquier showcase.

## Implementation plan

1. **Extender el tipo `Product`.** Agregar `ProductShowcase` y el campo opcional `showcases?: ProductShowcase[]` en `app/types/product.ts`.
   - *Sistema funcional:* no hay cambio visible; el tipo es retrocompatible (campo opcional).

2. **Renderizar showcases en el panel de detalle.** Extender `ProductDetailPanel.vue` con una sección "Demos en vivo" (o título equivalente) que aparece solo si `product.showcases?.length`, usando `/ui-ux-pro-max` como referencia para mantener el mismo lenguaje visual que las secciones existentes (`features`, `channels`): mismos espaciados, bordes, chips, soporte de modo claro/oscuro. Cada showcase se muestra como tarjeta/link con imagen mini + label, abre en pestaña nueva (`target="_blank" rel="noopener"`).
   - *Sistema funcional:* `/gobierno` sigue funcionando igual; el nuevo bloque no se ve porque ningún producto tiene `showcases` todavía.

3. **Completar "Monitoreo de Medios".** Agregar su `showcases` faltante en `ProductosGobierno.vue`.
   - *Sistema funcional:* al seleccionar "Monitoreo de Medios" ya se ve la nueva sección de demo en vivo.

4. **Agregar "Atlas Gestión Urbana Integral".** Nueva entrada completa en el array `products` de `ProductosGobierno.vue`, con `features` (8 sub-plataformas), `showcases` (las 4 con demo en vivo, según lo definido en Data model), imágenes y descripción.
   - *Sistema funcional:* Atlas aparece en el listado lateral de `/gobierno` y es completamente navegable/seleccionable.

5. **Agregar los 5 módulos restantes.** Nuevas entradas para Consultoría, Citizen Bots, Arquímedes, Chronos Scheduling y Themis-Cognitive, cada una con su comentario `// TODO` señalando lo que falta (ver Data model).
   - *Sistema funcional:* los 7 productos nuevos/completados conviven en el mismo listado sin romper la selección ni el panel de detalle.

6. **Verificación visual.** Revisar en mobile/tablet/desktop y en modo claro/oscuro: que la sección de showcases se vea consistente con el resto del panel, que los links abran correctamente, que los productos sin `showcases` (Themis, Citizen Bots, Chronos) no dejen huecos visuales, y que el sidebar siga funcionando con las 9 entradas totales.

## Acceptance criteria

- [x] `app/types/product.ts` define `ProductShowcase` y `Product.showcases?: ProductShowcase[]`, sin romper el uso existente de `Product` (campo opcional).
- [x] `ProductDetailPanel.vue` renderiza una sección de demos en vivo solo cuando `product.showcases?.length`, visualmente consistente (bordes, chips, espaciados) con las secciones de `features`/`channels`, y correcta en modo claro y oscuro.
- [x] Cada showcase renderizado es un link que abre en pestaña nueva hacia su URL de Data Studio, mostrando su imagen mini y `label`.
- [x] "Monitoreo de Medios" muestra su nuevo showcase (`PanelMonitoreoM.png` + link) al seleccionarlo en `/gobierno`.
- [x] "Atlas Gestión Urbana Integral" aparece en el listado lateral de `/gobierno`, es seleccionable, y su panel de detalle muestra: descripción, las 8 sub-plataformas como features, y 6 showcases con demo en vivo (Atención ciudadana - Smart Cities, Atención ciudadana, Bacheo, Tránsito y Vialidad, Desarrollo Social (Apoyos), Registro de salud animal — relabeleado y corregido respecto a la redacción original durante la implementación).
- [x] Los 5 módulos restantes (Consultoría, Citizen Bots, Arquímedes, Chronos Scheduling, Themis-Cognitive) aparecen en el listado, son seleccionables, y su panel de detalle muestra los datos disponibles sin errores (sin campos vacíos rotos).
- [x] Cada uno de los 5 módulos incompletos tiene al menos un comentario `// TODO` en el código fuente señalando qué información falta.
- [x] Ningún indicador visual ("Próximamente", badge, opacidad reducida) distingue a los módulos incompletos de los completos en el UI.
- [x] El listado completo de `/gobierno` (8 productos: Monitoreo de Medios, Atlas, Citizen Bots, Arquímedes, Consultoría, Chronos, Themis, más el orden final acordado durante la implementación) se ve y navega correctamente en mobile, tablet y desktop, en modo claro y oscuro, sin overflow ni errores de consola. Confirmado visualmente por el usuario en el navegador.

## Decisiones tomadas y descartadas

- **Atlas Gestión Urbana Integral se desarrolla completo**, con la misma profundidad de datos que "Monitoreo de Medios" (casi completo, tomado como referencia). *Decisión del usuario.*
- **Los 5 módulos restantes se cargan ya con los datos disponibles, marcados con `// TODO`** en el código señalando lo que falta, en lugar de omitirlos hasta tener el contenido completo. Se acepta que estos datos puedan cambiar en el futuro. *Decisión del usuario.*
- **Sin ningún indicador visual de "incompleto"** en el UI (no badge, no opacidad reducida) — la señal es solo a nivel de código fuente. *Decisión del usuario.*
- **`showcases` como campo nuevo `{label, url, image?}[]`** en `Product`, en lugar de un campo simple de un solo link — permite cubrir casos con múltiples demos (Atención ciudadana, Tránsito y Vialidad) y reutilizarse en cualquier producto futuro. *Decisión del usuario.*
- **Un item entra a `showcases` solo si tiene URL de demo en vivo**; si solo hay imagen sin link (ej. "Seguimiento de Planes y Proyectos"), va al `images[]` existente, no a `showcases`. *Decisión técnica, delegada por el usuario.*
- **Atlas es un solo producto en el array**, con sus 8 sub-plataformas como `features` y las 4 con demo en vivo además como `showcases` — en lugar de crear 8 entradas separadas en el sidebar. *Decisión del usuario.*
- **"Logos / Consultoría" es un producto nuevo y separado de "Monitoreo de Medios"**, aunque el texto fuente sugiere que este último "será parte" de Consultoría a futuro — por ahora ambos coexisten como entradas independientes. *Decisión del usuario.*
- **Imágenes para "Tránsito y Vialidad" (`PanelAccidentesViales.png`) y "Registro de salud animal" (`PanelSaludAnimal.png`)** se asignan por coincidencia de nombre de archivo, ya que `modulosGOB.md` no las etiqueta explícitamente como "Mini" de esas sub-plataformas. *Supuesto aceptado por el usuario al confirmar la sección de Data model.*
- **Se usará el skill `/ui-ux-pro-max` durante la implementación (`/spec-impl`)** para recrear el bloque de showcases manteniendo el mismo lenguaje visual que las secciones existentes del panel de detalle. *Decisión del usuario.*
- **"Panel de Seguimiento" se elimina del array de `products`** (no estaba contemplado en la redacción original de este spec) porque no es un producto real, sino un elemento residual del prototipo previo a este spec. El listado final queda en 8 productos, no 9. *Decisión del usuario durante la implementación.*
- **Se agrega un campo `thumbnail?`/`thumbnailAlt?` a `Product`** (no contemplado en el Data model original), independiente de `portrait`/`images`, para la miniatura del botón lateral — necesario porque reutilizar `portrait`/`images[0]` como miniatura rompía la imagen original de "Monitoreo de Medios". *Decisión técnica durante la implementación, a pedido del usuario.*
- **Alcance limitado a `/gobierno`** — no se toca `/empresas` ni se crean rutas de detalle dedicadas por producto; se mantiene el patrón actual de panel de detalle in-page. *Decisión del usuario (heredada del Scope).*

## Riesgos identificados

- Los links de Data Studio (`datastudio.google.com/...`) son reportes externos de Google; pueden expirar, cambiar de URL o requerir permisos de acceso sin que el sitio tenga control sobre ello — un showcase podría quedar roto sin que el código lo detecte.
- "Themis-Cognitive" tiene solo 1 feature y ninguna imagen — el panel de detalle podría verse visualmente pobre/desbalanceado comparado con productos más completos como Atlas o Monitoreo de Medios, incluso cumpliendo el criterio de "sin campos vacíos rotos".
- Los supuestos de imagen para Tránsito y Vialidad y Salud animal (por coincidencia de nombre de archivo, no confirmados en el texto fuente) podrían no ser la imagen que el usuario tenía en mente para esa sub-plataforma.
- Usar `/ui-ux-pro-max` para recrear el bloque de showcases introduce el riesgo de que, si no se restringe explícitamente a igualar el patrón visual ya existente en `ProductDetailPanel.vue`, el resultado difiera del lenguaje visual actual (bordes, chips, espaciados) en vez de mantenerlo.
- El array `products` crecerá de 2 a 9 entradas en un solo archivo (`ProductosGobierno.vue`); si sigue siendo un array literal en `<script setup>`, el archivo se vuelve considerablemente más largo y potencialmente más difícil de mantener (no cubierto por este spec — es una observación para specs futuros).
