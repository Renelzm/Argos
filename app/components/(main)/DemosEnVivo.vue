<template>
  <section class="border-t border-gray-200 dark:border-white/10">
    <div class="mx-auto max-w-6xl px-8 py-24 lg:py-20">
      <div class="font-heading text-[13px] font-semibold tracking-[0.16em] text-gobierno">DEMOS EN VIVO</div>
      <h3 class="mt-2 font-heading text-[clamp(32px,4vw,48px)] font-bold leading-[1.05] tracking-tight text-gray-900 dark:text-white">
        Paneles de Seguimiento
      </h3>
      <p class="mt-2 max-w-xl text-justify text-lg leading-relaxed text-gray-500 dark:text-gray-400">
        Explora los resultados de nuestro sistema de seguimiento avanzado. Recopilamos información estratégica a través de encuestas, formularios inteligentes y chatbots/Agentes con Inteligencia Artificial, transformando cada interacción en métricas visuales y actualizadas al minuto.
      </p>

      <div class="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <a
          v-for="demo in demos"
          :key="demo.label"
          :href="demo.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gobierno focus-visible:ring-offset-2 dark:border-white/10 dark:bg-gray-900"
        >
          <div class="group/img relative flex aspect-video items-center justify-center overflow-hidden bg-gray-50 p-3 dark:bg-white/3">
            <!-- Backdrop: blurred, cropped copy of the same image so the frame never reads as empty,
                 regardless of the screenshot's native aspect ratio. Purely decorative. -->
            <img
              :src="useAsset(demo.image)"
              alt=""
              aria-hidden="true"
              loading="lazy"
              class="absolute inset-0 size-full scale-110 object-cover opacity-40 blur-2xl"
            >
            <img
              :src="useAsset(demo.image)"
              :alt="demo.label"
              loading="lazy"
              class="relative z-10 max-h-full max-w-full object-contain drop-shadow-md transition-transform duration-500 ease-out group-hover/img:scale-105 motion-reduce:transition-none motion-reduce:group-hover/img:scale-100"
            >
            <div v-if="demo.channels?.some((c: ProductChannel) => c.showLabel)" class="absolute top-2 right-2 z-20">
              <span class="absolute inset-0.5 rounded-full bg-gobierno/20 motion-safe:animate-[ping_2.8s_ease-out_infinite]" />
              <span class="relative flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold shadow-sm ring-1 ring-black/5 backdrop-blur-sm dark:bg-gray-900/90 dark:ring-white/10">
                <UIcon name="i-lucide-pencil-sparkles" class="size-3 text-gray-500 dark:text-gray-400" />
                <span class="text-gray-500 dark:text-gray-400">IA</span>
              </span>
            </div>
          </div>
          <div class="flex items-center justify-between gap-3 p-5">
            <div class="min-w-0">
              <div class="text-[11px] font-semibold tracking-[0.14em] text-gray-400 uppercase dark:text-gray-500">{{ demo.product }}</div>
              <div class="mt-1 truncate text-[15px] font-semibold text-gray-900 dark:text-white">{{ demo.label }}</div>
            </div>
            <span class="flex size-8 shrink-0 items-center justify-center rounded-full text-gray-500 transition-transform duration-300 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none dark:text-gray-400">
              <UIcon name="i-lucide-link" class="size-4" />
            </span>
          </div>
          <div v-if="demo.channels?.length" class="border-t border-gray-100 px-5 pt-3 pb-4 dark:border-white/10">
            <div class="text-[10px] font-semibold tracking-[0.14em] text-gray-400 uppercase dark:text-gray-500">Canales de información</div>
            <div class="mt-2 flex flex-wrap items-center gap-1.5">
              <span
                v-for="(channel, i) in demo.channels"
                :key="channel.icon + i"
                :title="channel.label"
                class="flex items-center justify-center rounded-full"
                :class="[channel.chipClass, channel.showLabel ? 'h-6 gap-1 px-2' : 'size-6']"
              >
                <UIcon :name="channel.icon" class="size-3.5 shrink-0" :class="channel.color" />
                <span v-if="channel.showLabel" class="text-[10px] font-semibold" :class="channel.color">{{ channel.showLabel }}</span>
                <span v-else class="sr-only">{{ channel.label }}</span>
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ProductChannel } from '~/types/product'

interface Demo {
  product: string
  label: string
  url: string
  image: string
  channels?: ProductChannel[]
}

const botIcon: ProductChannel = { icon: 'i-lucide-bot', label: 'Bot conversacional', color: 'text-accent', chipClass: '' }
const aiIcon: ProductChannel = { icon: 'i-lucide-brain-circuit', label: 'Inteligencia Artificial', color: 'text-gray-700 dark:text-gray-300', chipClass: '', showLabel: 'IA' }

// Reutilizado por Smart Cities, Bacheo y Atención ciudadana (mismo set base; Smart Cities y
// Bacheo además agregan IA).
const smartCitiesChannels: ProductChannel[] = [
  { icon: 'i-simple-icons-postgresql', label: 'PostgreSQL', color: 'text-[#336791]', chipClass: 'bg-[#336791]/10' },
  { icon: 'i-simple-icons-whatsapp', label: 'WhatsApp', color: 'text-[#25D366]', chipClass: 'bg-[#25D366]/10' },
  { icon: 'i-simple-icons-telegram', label: 'Telegram', color: 'text-[#229ED9]', chipClass: 'bg-[#229ED9]/10' },
  { icon: 'i-simple-icons-facebook', label: 'Facebook', color: 'text-[#1877F2]', chipClass: 'bg-[#1877F2]/10' },
  { icon: 'i-simple-icons-google', label: 'Google', color: 'text-[#EA4335]', chipClass: 'bg-[#EA4335]/10' },
  { icon: 'i-lucide-monitor', label: 'Formularios', color: 'text-gobierno', chipClass: 'bg-gobierno/10' },
]

// Reutilizado por Salud animal, Panel Encuestas, Desarrollo Social y Gestión de Apoyos.
const statsChannels: ProductChannel[] = [
  { icon: 'i-simple-icons-google', label: 'Google', color: 'text-[#EA4335]', chipClass: 'bg-[#EA4335]/10' },
  { icon: 'i-simple-icons-microsoftexcel', label: 'Excel', color: 'text-[#217346]', chipClass: 'bg-[#217346]/10' },
  { icon: 'i-lucide-globe', label: 'Panel web', color: 'text-gobierno', chipClass: 'bg-gobierno/10' },
  { icon: 'i-lucide-bar-chart-3', label: 'Estadística', color: 'text-accent', chipClass: 'bg-accent/10' },
  { icon: 'i-lucide-form-input', label: 'Formularios', color: 'text-black', chipClass: 'bg-white border border-gray-200 dark:border-white/20' },
]

const demos: Demo[] = [
  {
    product: 'Monitoreo de Medios',
    label: 'Monitoreo de medios en vivo',
    url: 'https://datastudio.google.com/u/0/reporting/14682381-bff1-48d9-80f4-00dac737b748/page/JlIxF',
    image: '/Imagenes/PanelMonitoreoM.png',
    channels: [
      { icon: 'i-simple-icons-whatsapp', label: 'WhatsApp', color: 'text-[#25D366]', chipClass: 'bg-[#25D366]/10' },
      { icon: 'i-simple-icons-telegram', label: 'Telegram', color: 'text-[#229ED9]', chipClass: 'bg-[#229ED9]/10' },
      { icon: 'i-simple-icons-postgresql', label: 'PostgreSQL', color: 'text-[#336791]', chipClass: 'bg-[#336791]/10' },
      { icon: 'i-simple-icons-youtube', label: 'YouTube', color: 'text-[#FF0000]', chipClass: 'bg-[#FF0000]/10' },
      { icon: 'i-simple-icons-tiktok', label: 'TikTok', color: 'text-gray-900 dark:text-white', chipClass: 'bg-gray-900/10 dark:bg-white/10' },
      { icon: 'i-lucide-tv', label: 'TV', color: 'text-gobierno', chipClass: 'bg-gobierno/10' },
      { icon: 'i-lucide-radio', label: 'Radio', color: 'text-gobierno', chipClass: 'bg-gobierno/10' },
      botIcon,
      aiIcon,
    ] as ProductChannel[],
  },
   {
    product: 'Panel de Seguimiento',
    label: ' Mapaeo de Semáforos',
    url: 'https://datastudio.google.com/u/0/reporting/448f2469-5f35-418b-b0cd-ab660503d603/page/page_12345',
    image: '/Imagenes/semaforos.png',
    channels: statsChannels,
  },
  {
    product: 'Panel de Seguimiento',
    label: 'Atención ciudadana - Smart Cities',
    url: 'https://datastudio.google.com/u/0/reporting/c499568e-6577-43dc-93b5-fbe123b96442/page/vaNFF',
    image: '/Imagenes/PanelAtencionCiudadana01.png',
    channels: [...smartCitiesChannels, botIcon, aiIcon],
  },
  {
    product: 'Panel de Seguimiento',
    label: 'Bacheo',
    url: 'https://datastudio.google.com/reporting/95d84a6b-1d0c-4c3d-9049-faeb0632a219',
    image: '/Imagenes/PanelBacheo.png',
    channels: [...smartCitiesChannels, botIcon, aiIcon],
  },
  {
    product: 'Panel de Seguimiento',
    label: 'Tránsito y Vialidad',
    url: 'https://datastudio.google.com/reporting/2bab830a-337d-40fc-a7ff-278029fa849f',
    image: '/Imagenes/PanelAccidentesViales.png',
    channels: [...statsChannels, botIcon, aiIcon],
  },
  {
    product: 'Panel de Seguimiento',
    label: 'Registro de salud animal',
    url: 'https://datastudio.google.com/reporting/29163149-e729-435d-8094-14e427f821a0',
    image: '/Imagenes/PanelSaludAnimal.png',
    channels: statsChannels,
  },
  {
    product: 'Panel de Seguimiento',
    label: 'Gestión de Apoyos',
    url: 'https://datastudio.google.com/u/0/reporting/6f6b79b4-0d79-4a95-a8ac-b1d76f2f2520/page/9HeJF',
    image: '/Imagenes/PanelGestionesMunicipales.png',
    channels: statsChannels,
  },
  {
    product: 'Consultoría',
    label: 'Panel Encuestas',
    url: 'https://datastudio.google.com/reporting/83fd2af4-3f84-49da-bc53-ade545a652e5',
    image: '/Imagenes/PanelEncuestas.png',
    channels: [...statsChannels, botIcon, aiIcon],
  },
  {
    product: 'Consultoría',
    label: 'Desarrollo Social',
    url: 'https://datastudio.google.com/reporting/2529d13b-b98a-45ce-a63d-64ba936d0fe7',
    image: '/Imagenes/PanelDesarrolloSocial.png',
    channels: statsChannels,
  },
  {
    product: 'Panel de Seguimiento',
    label: 'Atención ciudadana',
    url: 'https://datastudio.google.com/u/0/reporting/2846eca4-2760-4313-b5a1-34a4d7f9e7af/page/vaNFF',
    image: '/Imagenes/PanelAtencionCiudadana.png',
    channels: [...smartCitiesChannels, botIcon, aiIcon],
  },
]
</script>
