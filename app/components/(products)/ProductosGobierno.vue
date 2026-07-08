<template>
  <section class="border-t border-gray-200 dark:border-white/10">
    <div class="mx-auto max-w-6xl px-8 pt-12 pb-24 lg:pt-16 lg:pb-32">
      <div class="font-heading text-[13px] font-semibold tracking-[0.16em] text-gobierno">SOLUCIONES PARA GOBIERNO</div>
      <h2 class="mt-4 font-heading text-[clamp(32px,4vw,48px)] font-bold leading-[1.05] tracking-tight text-gray-900 dark:text-white">
        Un producto para cada frente de gobernanza.
      </h2>

      <IntegrationsStrip class="mt-8" />

      <div class="mt-14 grid gap-4 lg:grid-cols-[380px_1fr] lg:items-start lg:gap-8">
        <!-- Sidebar: compact selectable list -->
        <div class="flex flex-col gap-3">
          <p class="mb-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            Selecciona un módulo para ver su alcance específico:
          </p>
          <template v-for="(product, index) in products" :key="product.title">
            <ProductListItem
              :title="product.title"
              :eyebrow="product.eyebrow"
              :image="product.images?.[0]?.src ?? ''"
              :image-alt="product.images?.[0]?.alt"
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
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Product } from '~/types/product'

const products: Product[] = [
  {
    eyebrow: 'Mnemo-Síntesis',
    poweredBy: 'Mnemosine',
    title: 'Monitoreo de Medios',
    description: 'Análisis por IA de la agenda pública local y estatal: actores políticos, tendencias y dependencias, con score de sentimiento de imagen pública y reportes entregados por asistente conversacional.Entrenado y alimentado diariamente por "Mnemosine", una poderosa base de datos neuronal.',
    portrait: '/Imagenes/Monitoreo06.png',
    images: [
      {
        src: '/Imagenes/monitoreo05.967Z.png',
        alt: 'Reporte de monitoreo político entregado por un asistente conversacional, con score de sentimiento y temas principales.',
       
       
      },
      {
        src: '/Imagenes/monitoreo03.496Z.png',
        alt: 'Panel administrativo con gráficas de menciones, alcance y sentimiento.',
      },
       {
        src: '/Imagenes/monitoreo-celular.844Z.png',
        alt: 'Panel administrativo con gráficas de menciones, alcance y sentimiento.',
      },
       {
        src: '/Imagenes/Monitoreo02.239Z.png',
        alt: 'Panel administrativo con gráficas de menciones, alcance y sentimiento.',
      },
    ],
    to: '/',
    color: 'gobierno',
    features: [
      {
        icon: 'i-lucide-bot',
        title: 'Agente de IA por chat',
        description: 'Resúmenes y datos entregados por un asistente conversacional.',
        chipClass: 'bg-sky-600',
      },
      {
        icon: 'i-lucide-layout-dashboard',
        title: 'Panel administrativo',
        description: 'Información completa y detallada para el análisis a profundidad.',
        chipClass: 'bg-violet-600',
      },
      {
        icon: 'i-lucide-users',
        title: 'Actores políticos',
        description: 'Identificación y seguimiento de figuras relevantes en la conversación pública.',
        chipClass: 'bg-amber-700',
      },
      {
        icon: 'i-lucide-trending-up',
        title: 'Tendencias',
        description: 'Detección de temas en ascenso y patrones de conversación en tiempo real.',
        chipClass: 'bg-emerald-600',
      },
      {
        icon: 'i-lucide-building-2',
        title: 'Dependencias',
        description: 'Seguimiento segmentado por dependencia o institución de gobierno.',
        chipClass: 'bg-blue-600',
      },
      {
        icon: 'i-lucide-gauge',
        title: 'Score de sentimiento',
        description: 'Manejo del score de sentimiento de la imagen pública a lo largo del tiempo.',
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
        color: 'text-gobierno',
        chipClass: 'bg-gobierno/10',
      },
    ],
  },
  {
    eyebrow: 'MONITOREO',
    title: 'Panel de Seguimiento',
    description: 'Tablero ejecutivo con menciones, alcance y sentimiento por canal de comunicación, para la toma de decisiones en tiempo real.',
    images: [
      {
        src: '/Imagenes/MonitoreoPanel.jpg',
        alt: 'Panel de indicadores de monitoreo de medios con gráficas de menciones, alcance y sentimiento.',
      },
    ],
    to: '/',
    color: 'gobierno',
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
