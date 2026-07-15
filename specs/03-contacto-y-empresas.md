# 03 — Contacto y Empresas

**Estado:** Implementado
**Dependencias:** Spec 02 (patrón de Product/ProductDetailPanel/ProductListItem/useProductTheme ya establecido para Gobierno, se reutiliza sin cambios).
**Fecha:** 2026-07-15

**Objetivo:** Crear la página `/contacto` (con hero + tarjetas de contacto y el correo argos.webservices@gmail.com, enlazada desde el header y el footer) y recrear por completo `/empresas` replicando el mismo patrón visual/funcional de `/gobierno` (sidebar seleccionable + panel de detalle) con los 5 módulos definidos en `modulosEmpresas.md` (Core, Automation, Interaction Bots, Prospecting, Booking).

## Scope

**Incluye:**

- **Nueva página `/contacto`** (`app/pages/contacto/index.vue`): hero simple (título + tagline corta) y tarjetas de contacto con email (`argos.webservices@gmail.com`), WhatsApp y teléfono (mismos números que ya existen hoy en el footer — solo cambia el correo). Sin formulario: son links directos (`mailto:`, `wa.me`, `tel:`), sin backend ni servicio externo.
- **Se usará el skill `/ui-ux-pro-max` durante la implementación (`/spec-impl`) para diseñar `/contacto`**, ya que —a diferencia de Empresas— no hay un patrón existente ni imagen de referencia que replicar; debe mantener consistencia con el lenguaje visual del resto del sitio (tipografía, tokens de color, espaciados) sin partir de una plantilla ya construida.
- **Header (`SiteHeader.vue`):** agregar "Contacto" como 4º link de navegación (`/contacto`) tanto en el nav de escritorio como en el `USlideover` de mobile.
- **Footer (`SiteFooter.vue`):** simplificar la columna "CONTACTO" — en lugar de listar email/WhatsApp/tel/"Agendar demostración" inline, queda un único link "Contacto" → `/contacto` (que pasa a ser la fuente única de esos datos). Se elimina el ancla `id="contacto"` ya que deja de ser el destino.
- **Actualizar el correo de contacto en todo el sitio** de `mnemosine.services@gmail.com` a `argos.webservices@gmail.com` (footer y `/contacto`).
- **Nuevo componente `ProductosEmpresas.vue`** (`app/components/(products)/`), calcado de `ProductosGobierno.vue`: mismo layout (sidebar seleccionable + panel de detalle sticky en desktop, expansión inline en mobile), mismos componentes reutilizados sin modificar (`ProductDetailPanel`, `ProductListItem`, `MnemosineBrainGraphic`, `IntegrationsStrip`), mismo tipo `Product` (sin cambios al tipo), y `color: 'empresa'` (tema ya existente en `useProductTheme`/`main.css`).
- **5 productos en `ProductosEmpresas.vue`**, con datos de `modulosEmpresas.md`, `eyebrow` sin el prefijo "Arg.os" y `title` descriptivo (estilo Gobierno):
  1. **Core** → *"APIs, Bases de Datos y Servicios Digitales"*
  2. **Automation** → *"Automatización de Procesos Administrativos"*
  3. **Interaction Bots** → *"Agentes Conversacionales Corporativos"* (con `channels`: WhatsApp/Telegram/Web)
  4. **Prospecting** → *"Motor de Adquisición y Calificación de Leads"*
  5. **Booking** → *"Agendamiento y Calificación Comercial"* (con `channels`: WhatsApp/Telegram/Web)
- Cada producto con `description` (adaptada del texto de `modulosEmpresas.md`), `features` con la misma profundidad que Gobierno (creatividad permitida para nombrar/desglosar capacidades cuando el texto fuente es escueto), `portrait` (imagen marcada como "principal" en el doc) e `images[]` (el resto de imágenes listadas por módulo).
- Reemplazar por completo el placeholder actual de `app/pages/empresas/index.vue` (`<h1>empresas</h1>` + `IntegrationsStrip` suelto) por `<ProductosEmpresas />`.

**No incluye (queda para specs futuros):**

- Formulario de contacto funcional o integración con servicio externo (Formspree, etc.) — sin backend, se descarta explícitamente.
- Cambios al tipo `Product` o a `ProductDetailPanel`/`ProductListItem`/`useProductTheme` — se reutilizan tal cual existen hoy.
- `showcases` (demos en vivo) para los productos de Empresas — `modulosEmpresas.md` no provee links de Data Studio ni equivalente; ningún producto de Empresas lleva `showcases` en este spec.
- Rediseño del footer más allá de la columna "CONTACTO" (las columnas "Plataforma"/"Institucional" no cambian).
- Contenido de `/gobierno` o `/nosotros` — fuera de alcance.
- SEO, analítica, o persistencia de ningún tipo.

## Data model

No se introducen interfaces nuevas — se reutiliza `Product`, `ProductFeature`, `ProductChannel`, `ProductImage` (`app/types/product.ts`) tal cual, con `color: 'empresa'`. Tampoco se usa `ProductShowcase` (Empresas no lleva `showcases` en este spec). El contenido de `/contacto` (email/WhatsApp/tel) es data literal simple embebida en la página, sin tipo nuevo.

### Core → *"APIs, Bases de Datos y Servicios Digitales"*
- `eyebrow`: "Core" · `portrait`: `Core04.jpg` · `images`: `Core02.jpg`, `Core01.jpg`, `analogo a digital 2.699Z.png`, `core06.png`
- `description`: adaptada de "Desarrollo de APIs e integración de bases de datos de alto rendimiento. Nos conectamos directo a tu ERP actual o desplegamos servidores y bases de datos exclusivas para la empresa, garantizando autonomía y control de la información."
- `features` (6): Integración con ERP existente · Bases de datos de alto rendimiento · Desarrollo de APIs a medida · Autonomía y control de datos · Páginas web y portales corporativos · Servicios digitales a medida

### Automation → *"Automatización de Procesos Administrativos"*
- `eyebrow`: "Automation" · `portrait`: `automatizacion02.jpg` · `images`: `consultoria01.jpg`, `Servicios04.png`, `automatization01.png`
- `description`: adaptada de "Reingeniería operativa. Flujos de trabajo automatizados para procesos administrativos repetitivos. Reemplazamos tareas manuales administrativas por nodos de ejecución silenciosa."
- `features` (4): Automatización de procesos repetitivos · Reingeniería operativa · Ejecución silenciosa 24/7 · Reducción de horas-hombre

### Interaction Bots → *"Agentes Conversacionales Corporativos"*
- `eyebrow`: "Interaction Bots" · `portrait`: `bot01.png` · `images`: `chatbot02.png`, `chatbot03.webp`, `monitoreo-celular.844Z.png`, `bots02.png`
- `description`: adaptada de "Agentes corporativos avanzados, para el cliente final (quejas, soporte técnico, mejora de servicio) y para uso interno (tickets de RRHH o reportes operativos)."
- `features` (6): Atención a cliente final · Mejora continua de servicio · Sistema de tickets interno · Reportes operativos · Soporte técnico automatizado · Agentes duales (cliente + interno)
- `channels`: WhatsApp, Telegram, Web

### Prospecting → *"Motor de Adquisición y Calificación de Leads"*
- `eyebrow`: "Prospecting" · `portrait`: `Sentiment.jpg` · `images`: `leads02.png`, `citas03.png`, `Prospecting01.png`, `analog to digital.397Z.png`, `consultoria02.png`, `leads04.png`
- `description`: literal del doc — "Inteligencia de ventas y mapeo de mercado. Búsqueda automatizada de prospectos B2B mediante web scraping estratégico, entregando bases de datos estructuradas (Excel/CSV) listas para que tu equipo de ventas entre en acción."
- `features` (5): Web scraping estratégico · Mapeo de mercado · Bases de datos estructuradas (Excel/CSV) · Calificación de leads · Inteligencia de ventas

### Booking → *"Agendamiento y Calificación Comercial"*
- `eyebrow`: "Booking" · `portrait`: `citas.jpg` · `images`: `citas02.png`, `citas y tramites 3.507Z.png`, `Logos2.jpg`, `citas03.png`, `citas04.png`
- `description`: literal del doc — "El asesino de los formularios aburridos. Un chatbot que atiende a los prospectos interesados que llegan por redes sociales, califica su presupuesto o interés, y agenda la cita directamente en el calendario revisando disponibilidad de manera automática."
- `features` (4): Calificación automática de prospectos · Agendamiento en calendario · Disponibilidad en tiempo real · Captación desde redes sociales
- `channels`: WhatsApp, Telegram, Web

### `/contacto` (datos literales, sin tipo nuevo)
- Email: `argos.webservices@gmail.com` · WhatsApp: `871 316 2338` (mismo del footer) · Tel: `871 316 2338` (mismo del footer)

## Implementation plan

1. **Header — agregar "Contacto".** Añadir un 4º elemento a `navLinks` en `SiteHeader.vue` (`{ label: 'Contacto', to: '/contacto', icon: 'i-lucide-mail' }`), visible tanto en el nav de escritorio como en el `USlideover` de mobile.
   - *Sistema funcional:* el resto del sitio sigue igual; el link apunta a una ruta que aún no existe hasta el paso 3 (se completa en el mismo ciclo de trabajo, sin quedar roto en producción).

2. **Footer — actualizar correo y simplificar contacto.** Reemplazar `mnemosine.services@gmail.com` por `argos.webservices@gmail.com`; colapsar la columna "CONTACTO" a un único link "Contacto" → `/contacto`; quitar `id="contacto"` del `<footer>`.
   - *Sistema funcional:* footer sigue renderizando en las 5 rutas, ahora con el correo correcto y un link simplificado.

3. **Página `/contacto`.** Crear `app/pages/contacto/index.vue` con hero (título + tagline) y tarjetas de contacto (email, WhatsApp, tel), usando el skill `/ui-ux-pro-max` para la dirección visual ya que no hay plantilla previa que replicar; debe respetar los tokens de color y tipografía ya definidos (`main.css`) y verse bien en claro/oscuro y en mobile/tablet/desktop.
   - *Sistema funcional:* `/contacto` es navegable de punta a punta desde el header y el footer.

4. **Componente `ProductosEmpresas.vue`.** Crear `app/components/(products)/ProductosEmpresas.vue`, calcado de `ProductosGobierno.vue` (mismo sidebar + panel de detalle, mismos componentes reutilizados, `color: 'empresa'`), con el array `products` completo de los 5 módulos (Core, Automation, Interaction Bots, Prospecting, Booking) según el Data model acordado.
   - *Sistema funcional:* el componente existe y es funcional de forma aislada, aunque todavía no está montado en ninguna página.

5. **Montar Empresas.** Reemplazar el contenido de `app/pages/empresas/index.vue` (placeholder `<h1>empresas</h1>` + `IntegrationsStrip` suelto) por `<ProductosEmpresas />`.
   - *Sistema funcional:* `/empresas` muestra los 5 productos, seleccionables, con panel de detalle — igual de completo que `/gobierno`.

6. **Verificación visual.** Revisar en mobile/tablet/desktop y en modo claro/oscuro: `/contacto` (hero, tarjetas, links funcionales), `/empresas` (selección de los 5 productos, panel de detalle, channels de Interaction Bots/Booking, sin huecos visuales), header (4 links, incluido mobile), footer (correo nuevo, link a `/contacto` en las 5 rutas).

## Acceptance criteria

- [x] `SiteHeader.vue` muestra 4 links de navegación (Sector Público, Empresa, Quiénes somos, Contacto) tanto en desktop como en el menú hamburguesa de mobile; el link "Contacto" navega a `/contacto` sin recarga completa.
- [x] `SiteFooter.vue` muestra el correo `argos.webservices@gmail.com` (ya no `mnemosine.services@gmail.com`) y la columna "CONTACTO" queda reducida a un único link que navega a `/contacto`.
- [x] `app/pages/contacto/index.vue` existe, es accesible desde el header y desde el footer, y muestra un hero + tarjetas con email (`argos.webservices@gmail.com`), WhatsApp y teléfono, cada una funcionando como link real (`mailto:`, `wa.me`, `tel:`).
- [x] `/contacto` se ve correcta y consistente con el resto del sitio (tipografía, tokens de color) en mobile, tablet y desktop, en modo claro y oscuro, sin overflow ni errores de consola.
- [x] `app/components/(products)/ProductosEmpresas.vue` existe y sigue el mismo patrón que `ProductosGobierno.vue` (sidebar seleccionable + panel de detalle sticky en desktop, expansión inline en mobile).
- [x] `/empresas` ya no muestra el placeholder (`<h1>empresas</h1>`); muestra los 5 productos (Core, Automation, Interaction Bots, Prospecting, Booking) en el listado lateral, cada uno seleccionable.
- [x] Cada uno de los 5 productos de Empresas muestra en su panel de detalle: `eyebrow`, `title` descriptivo (sin prefijo "Arg.os"), `description`, `portrait`, `images` de galería y sus `features`, sin campos vacíos rotos.
- [x] Interaction Bots y Booking muestran su sección "Canales de comunicación" (WhatsApp/Telegram/Web) en el panel de detalle.
- [x] Ningún producto de Empresas muestra sección de "Demos en vivo" (no tienen `showcases`).
- [x] `/empresas` se ve y navega correctamente en mobile, tablet y desktop, en modo claro y oscuro, sin overflow ni errores de consola. Confirmado visualmente por el usuario en el navegador.

## Decisiones tomadas y descartadas

- **`/contacto` es una página nueva y dedicada**, no una sección embebida en `/empresas` ni solo una ampliación del ancla del footer. *Decisión del usuario.*
- **Sin formulario de contacto** (ni con `mailto:` ni con servicio externo tipo Formspree) — solo tarjetas con links directos de email/WhatsApp/tel, porque el sitio no tiene backend propio y no se quiere prometer una función que no existe. *Decisión del usuario.*
- **No hay imagen de referencia para `/contacto`** — la mención inicial a "la imagen que tiene toda la página en sí" fue una referencia de dictado por voz sin archivo real; se resuelve con libertad creativa apoyada en `/ui-ux-pro-max`. *Aclarado por el usuario.*
- **Empresas replica EXACTAMENTE el patrón de Gobierno** (mismo `Product`, `ProductDetailPanel`, `ProductListItem`, `useProductTheme('empresa')`, layout sidebar + panel) en lugar de un diseño distinto — cumple el requerimiento explícito de que "todos los elementos deben estar integrados de la misma manera". *Decisión del usuario.*
- **El correo se reemplaza en todo el sitio** (`mnemosine.services@gmail.com` → `argos.webservices@gmail.com`), no solo en `/contacto`, para tener una única fuente de verdad. *Decisión del usuario.*
- **El footer se simplifica a un solo link hacia `/contacto`** en vez de mantener los datos de contacto duplicados inline — evita inconsistencia entre footer y la página dedicada. *Decisión del usuario.*
- **"Contacto" se agrega como 4º link del header** (no solo accesible por footer/CTA) para que sea fácil de encontrar. *Decisión del usuario.*
- **`eyebrow` sin el prefijo "Arg.os"** y **`title` descriptivo** (estilo Gobierno: p. ej. `title: "Monitoreo de Medios"`) en vez del nombre de marca literal del documento (`"Arg.os | Core"`) — mantiene consistencia con el patrón de nombres ya usado en Gobierno. *Corrección del usuario.*
- **Para Core, Automation e Interaction Bots (sin paréntesis descriptivo en el doc fuente) se redactó un `title` nuevo** ("APIs, Bases de Datos y Servicios Digitales", "Automatización de Procesos Administrativos", "Agentes Conversacionales Corporativos"), siguiendo el ejemplo del usuario; para Prospecting y Booking se usó el paréntesis ya provisto en `modulosEmpresas.md` tal cual. *Decisión del usuario, con libertad creativa concedida explícitamente para la rama Empresas.*
- **Se agregan `channels` (WhatsApp/Telegram/Web) a Interaction Bots y Booking**, aunque `modulosEmpresas.md` no los menciona explícitamente, porque son productos conversacionales equivalentes a Citizen Bots/Chronos Scheduling en Gobierno. *Decisión del usuario.*
- **Ningún producto de Empresas lleva `showcases`** — el documento fuente no provee links de demo en vivo tipo Data Studio, y no se inventan. *Decisión del usuario (heredada del Scope).*
- **No se modifica el tipo `Product` ni los componentes compartidos** (`ProductDetailPanel`, `ProductListItem`, `useProductTheme`) — se reutilizan sin cambios, ya que el tipo ya soporta todos los campos necesarios desde el spec 02. *Decisión técnica, delegada por el usuario.*

## Riesgos identificados

- Varias imágenes de Empresas se reutilizan entre productos o ya estaban usadas en Gobierno (`monitoreo-celular.844Z.png`, `analog to digital.397Z.png`), lo que podría hacer que la galería de Empresas se sienta menos "propia" visualmente que la de Gobierno.
- Los `features` inventados para Core, Automation e Interaction Bots (por la escasez de detalle en `modulosEmpresas.md`) son una interpretación razonable pero no textual del documento fuente — podrían no coincidir exactamente con la profundidad técnica real de esos módulos.
- El tono de copy de Booking ("El asesino de los formularios aburridos") se mantiene literal del documento fuente y es más informal que el resto de las descripciones (más neutrales/técnicas de Core o Prospecting) — podría notarse una inconsistencia de tono entre productos dentro de la misma página.
- Existe un archivo `leads04.jpg` y otro `leads04.png` en `public/Imagenes/`; se usará `leads04.png` para Prospecting sin confirmación explícita de cuál era la intención original — riesgo menor de que no sea la versión correcta.
- Al colapsar el footer a un solo link hacia `/contacto`, cualquier problema futuro con esa ruta (ej. error de build, link roto) elimina el único acceso rápido a los datos de contacto desde el footer — el header queda como respaldo, pero ambos apuntan al mismo destino.
