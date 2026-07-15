<template>
  <section class="border-t border-gray-200 dark:border-white/10">
    <div class="mx-auto max-w-6xl px-8 pt-12 pb-24 lg:pt-16 lg:pb-32">
      <div class="font-heading text-[13px] font-semibold tracking-[0.16em] text-empresa">SOLUCIONES PARA EMPRESAS</div>
      <h2 class="mt-4 font-heading text-[clamp(32px,4vw,48px)] font-bold leading-[1.05] tracking-tight text-gray-900 dark:text-white">
        Un producto para cada frente de tu operación.
      </h2>

      <div class="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-[380px_1fr] lg:items-start lg:gap-8">
        <!-- Sidebar: compact selectable list -->
        <div class="flex flex-col gap-3">
          <p class="mb-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            Selecciona un módulo para ver su alcance específico:
          </p>
          <template v-for="(product, index) in products" :key="product.title">
            <ProductListItem
              :title="product.title"
              :eyebrow="product.eyebrow"
              :image="product.thumbnail ?? product.images?.[0]?.src ?? product.portrait ?? ''"
              :image-alt="product.thumbnailAlt ?? product.images?.[0]?.alt ?? product.portraitAlt"
              :color="product.color"
              :active="selected === index"
              @select="selected = selected === index ? null : index"
            />

            <!-- Mobile only: detail unfolds right under the selected item, closed by default -->
            <Transition name="expand">
              <div v-if="selected === index" class="lg:hidden">
                <ProductDetailPanel :product="product" />
              </div>
            </Transition>
          </template>
        </div>

        <!-- Desktop only: persistent detail panel beside the list -->
        <div class="hidden lg:sticky lg:top-24 lg:block">
          <ProductDetailPanel v-if="selectedProduct" :product="selectedProduct" />
          <div
            v-else
            class="flex min-h-105 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50/50 px-6 py-10 text-center dark:border-white/15 dark:bg-white/2"
          >
            <MnemosineBrainGraphic size="lg" />
            <p class="-mt-2 max-w-xs text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
              Selecciona un módulo de la lista para ver su descripción completa.
            </p>
          </div>
        </div>
      </div>

      <IntegrationsStrip class="mt-14 -mb-14 p-8" label="Stack tecnológico:" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Product } from '~/types/product'

const products: Product[] = [
  {
    eyebrow: 'Core',
    title: 'APIs, Bases de Datos y Servicios Digitales',
    description: 'Desarrollo de APIs e integración de bases de datos de alto rendimiento. Nos conectamos directo a tu ERP actual o desplegamos servidores y bases de datos exclusivas para la empresa, garantizando autonomía y control de la información.',
    color: 'empresa',
    portrait: '/Imagenes/Core04.jpg',
    images: [
      {
        src: '/Imagenes/Core02.jpg',
        alt: 'Integración de APIs y bases de datos de alto rendimiento.',
      },
      {
        src: '/Imagenes/Core01.jpg',
        alt: 'Infraestructura de servidores y bases de datos exclusivas.',
      },
      {
        src: '/Imagenes/analogo a digital 2.699Z.png',
        alt: 'De analógico a digital: integración de sistemas empresariales.',
      },
      {
        src: '/Imagenes/core06.png',
        alt: 'Servicios digitales conectados al ERP de la empresa.',
      },
    ],
    features: [
      {
        icon: 'i-lucide-plug',
        title: 'Integración con ERP existente',
        description: 'Conexión directa con tu ERP actual sin migrar de sistema.',
        chipClass: 'bg-sky-600',
      },
      {
        icon: 'i-lucide-database',
        title: 'Bases de datos de alto rendimiento',
        description: 'Servidores y bases de datos exclusivas, dimensionadas para tu volumen de operación.',
        chipClass: 'bg-violet-600',
      },
      {
        icon: 'i-lucide-code-2',
        title: 'Desarrollo de APIs a medida',
        description: 'APIs diseñadas para conectar tus sistemas internos con terceros.',
        chipClass: 'bg-amber-700',
      },
      {
        icon: 'i-lucide-shield-check',
        title: 'Autonomía y control de datos',
        description: 'Infraestructura exclusiva para la empresa, sin depender de terceros.',
        chipClass: 'bg-emerald-600',
      },
      {
        icon: 'i-lucide-globe',
        title: 'Páginas web y portales corporativos',
        description: 'Desarrollo de sitios y portales conectados a tu operación.',
        chipClass: 'bg-blue-600',
      },
      {
        icon: 'i-lucide-server',
        title: 'Servicios digitales a medida',
        description: 'Despliegue de servicios digitales adaptados a procesos específicos de la empresa.',
        chipClass: 'bg-rose-600',
      },
    ],
  },
  {
    eyebrow: 'Automation',
    title: 'Automatización de Procesos Administrativos',
    description: 'Reingeniería operativa. Flujos de trabajo automatizados para procesos administrativos repetitivos. Reemplazamos tareas manuales administrativas por nodos de ejecución silenciosa.',
    color: 'empresa',
    portrait: '/Imagenes/automatizacion02.jpg',
    images: [
      {
        src: '/Imagenes/consultoria01.jpg',
        alt: 'Automatización de procesos administrativos.',
      },
      {
        src: '/Imagenes/Servicios04.png',
        alt: 'Flujos de trabajo automatizados para procesos repetitivos.',
      },
      {
        src: '/Imagenes/automatization01.png',
        alt: 'Reemplazo de tareas manuales por nodos de ejecución silenciosa.',
      },
    ],
    features: [
      {
        icon: 'i-lucide-repeat',
        title: 'Automatización de procesos repetitivos',
        description: 'Reemplazo de tareas administrativas manuales por nodos de ejecución automática.',
        chipClass: 'bg-sky-600',
      },
      {
        icon: 'i-lucide-refresh-cw',
        title: 'Reingeniería operativa',
        description: 'Rediseño de flujos de trabajo para eliminar cuellos de botella.',
        chipClass: 'bg-violet-600',
      },
      {
        icon: 'i-lucide-cpu',
        title: 'Ejecución silenciosa 24/7',
        description: 'Procesos que corren en segundo plano sin intervención humana.',
        chipClass: 'bg-amber-700',
      },
      {
        icon: 'i-lucide-trending-down',
        title: 'Reducción de horas-hombre',
        description: 'Menor carga operativa en tareas administrativas de bajo valor agregado.',
        chipClass: 'bg-emerald-600',
      },
    ],
  },
  {
    eyebrow: 'Interaction Bots',
    title: 'Agentes Conversacionales Corporativos',
    description: 'Agentes corporativos avanzados, diseñados tanto para el cliente final (captación de quejas, soporte técnico y mejora de servicio) como para uso interno (sistemas de tickets para recursos humanos o reportes operativos).',
    color: 'empresa',
    portrait: '/Imagenes/bot01.png',
    images: [
      {
        src: '/Imagenes/chatbot02.png',
        alt: 'Agente conversacional corporativo para atención al cliente.',
      },
      {
        src: '/Imagenes/chatbot03.webp',
        alt: 'Bot de soporte técnico y mejora de servicio.',
      },
      {
        src: '/Imagenes/monitoreo-celular.844Z.png',
        alt: 'Agente conversacional en celular.',
      },
      {
        src: '/Imagenes/bots02.png',
        alt: 'Sistema de tickets interno para recursos humanos y reportes operativos.',
      },
    ],
    features: [
      {
        icon: 'i-lucide-headset',
        title: 'Atención a cliente final',
        description: 'Captación de quejas y soporte técnico directo al cliente.',
        chipClass: 'bg-sky-600',
      },
      {
        icon: 'i-lucide-trending-up',
        title: 'Mejora continua de servicio',
        description: 'Detección de patrones de insatisfacción para mejorar el servicio.',
        chipClass: 'bg-violet-600',
      },
      {
        icon: 'i-lucide-ticket',
        title: 'Sistema de tickets interno',
        description: 'Gestión de tickets de soporte para recursos humanos y áreas operativas.',
        chipClass: 'bg-amber-700',
      },
      {
        icon: 'i-lucide-clipboard-list',
        title: 'Reportes operativos',
        description: 'Captación y clasificación de reportes internos del personal.',
        chipClass: 'bg-emerald-600',
      },
      {
        icon: 'i-lucide-wrench',
        title: 'Soporte técnico automatizado',
        description: 'Resolución de solicitudes técnicas de primer nivel sin intervención humana.',
        chipClass: 'bg-blue-600',
      },
      {
        icon: 'i-lucide-users',
        title: 'Agentes duales (cliente + interno)',
        description: 'Un mismo motor conversacional atiende tanto al cliente externo como al colaborador interno.',
        chipClass: 'bg-rose-600',
      },
    ],
    channels: [
      {
        icon: 'i-simple-icons-whatsapp',
        label: 'WhatsApp',
        color: 'text-[#25D366]',
        chipClass: 'bg-[#25D366]/10',
      },
      {
        icon: 'i-simple-icons-telegram',
        label: 'Telegram',
        color: 'text-[#229ED9]',
        chipClass: 'bg-[#229ED9]/10',
      },
      {
        icon: 'i-lucide-globe',
        label: 'Web',
        color: 'text-empresa',
        chipClass: 'bg-empresa/10',
      },
    ],
  },
  {
    eyebrow: 'Prospecting',
    title: 'Motor de Adquisición y Calificación de Leads',
    description: 'Inteligencia de ventas y mapeo de mercado. Búsqueda automatizada de prospectos B2B mediante web scraping estratégico, entregando bases de datos estructuradas (Excel/CSV) con información de compañías extraída directamente de la web, listas para que tu equipo de ventas entre en acción.',
    color: 'empresa',
    portrait: '/Imagenes/Sentiment.jpg',
    images: [
      {
        src: '/Imagenes/leads02.png',
        alt: 'Base de datos estructurada de prospectos B2B.',
      },
      {
        src: '/Imagenes/citas03.png',
        alt: 'Calificación de leads para el equipo de ventas.',
      },
      {
        src: '/Imagenes/Prospecting01.png',
        alt: 'Mapeo de mercado y búsqueda automatizada de prospectos.',
      },
      {
        src: '/Imagenes/analog to digital.397Z.png',
        alt: 'De analógico a digital: inteligencia de ventas.',
      },
      {
        src: '/Imagenes/consultoria02.png',
        alt: 'Inteligencia de ventas y mapeo de mercado.',
      },
      {
        src: '/Imagenes/leads04.png',
        alt: 'Información de compañías lista para prospectar.',
      },
    ],
    features: [
      {
        icon: 'i-lucide-search',
        title: 'Web scraping estratégico',
        description: 'Búsqueda automatizada de prospectos B2B directamente desde la web.',
        chipClass: 'bg-sky-600',
      },
      {
        icon: 'i-lucide-map',
        title: 'Mapeo de mercado',
        description: 'Identificación de compañías objetivo por sector, tamaño o ubicación.',
        chipClass: 'bg-violet-600',
      },
      {
        icon: 'i-lucide-table',
        title: 'Bases de datos estructuradas (Excel/CSV)',
        description: 'Entrega de listados en Excel/CSV listos para prospectar.',
        chipClass: 'bg-amber-700',
      },
      {
        icon: 'i-lucide-filter',
        title: 'Calificación de leads',
        description: 'Priorización de prospectos según su potencial de conversión.',
        chipClass: 'bg-emerald-600',
      },
      {
        icon: 'i-lucide-target',
        title: 'Inteligencia de ventas',
        description: 'Información de compañías lista para que tu equipo de ventas entre en acción.',
        chipClass: 'bg-blue-600',
      },
    ],
  },
  {
    eyebrow: 'Booking',
    title: 'Agendamiento y Calificación Comercial',
    description: 'El asesino de los formularios aburridos. Un chatbot que atiende a los prospectos interesados que llegan por redes sociales, califica su presupuesto o interés, y si cumplen con el perfil, les agenda una cita directamente en el calendario revisando disponibilidad de tiempos de manera automática.',
    color: 'empresa',
    portrait: '/Imagenes/citas.jpg',
    images: [
      {
        src: '/Imagenes/citas02.png',
        alt: 'Chatbot de agendamiento y calificación comercial.',
      },
      {
        src: '/Imagenes/citas y tramites 3.507Z.png',
        alt: 'Agendamiento de citas comerciales revisando disponibilidad.',
      },
      {
        src: '/Imagenes/Logos2.jpg',
        alt: 'Calificación comercial de prospectos por chatbot.',
      },
      {
        src: '/Imagenes/citas03.png',
        alt: 'Cita agendada directamente en el calendario del equipo comercial.',
      },
      {
        src: '/Imagenes/citas04.png',
        alt: 'Chatbot de captación de prospectos desde redes sociales.',
      },
    ],
    features: [
      {
        icon: 'i-lucide-filter',
        title: 'Calificación automática de prospectos',
        description: 'Validación de presupuesto e interés antes de agendar.',
        chipClass: 'bg-sky-600',
      },
      {
        icon: 'i-lucide-calendar-check',
        title: 'Agendamiento en calendario',
        description: 'Cita agendada directamente en el calendario del equipo comercial.',
        chipClass: 'bg-violet-600',
      },
      {
        icon: 'i-lucide-clock',
        title: 'Disponibilidad en tiempo real',
        description: 'Revisión automática de horarios disponibles.',
        chipClass: 'bg-amber-700',
      },
      {
        icon: 'i-lucide-share-2',
        title: 'Captación desde redes sociales',
        description: 'Atiende prospectos que llegan por redes sociales sin intervención manual.',
        chipClass: 'bg-emerald-600',
      },
    ],
    channels: [
      {
        icon: 'i-simple-icons-whatsapp',
        label: 'WhatsApp',
        color: 'text-[#25D366]',
        chipClass: 'bg-[#25D366]/10',
      },
      {
        icon: 'i-simple-icons-telegram',
        label: 'Telegram',
        color: 'text-[#229ED9]',
        chipClass: 'bg-[#229ED9]/10',
      },
      {
        icon: 'i-lucide-globe',
        label: 'Web',
        color: 'text-empresa',
        chipClass: 'bg-empresa/10',
      },
    ],
  },
]

const selected = ref<number | null>(null)
const selectedProduct = computed(() => (selected.value !== null ? products[selected.value] : null))
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition:
    opacity 250ms ease-out,
    transform 250ms ease-out;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (prefers-reduced-motion: reduce) {
  .expand-enter-active,
  .expand-leave-active {
    transition: none;
  }
}
</style>
