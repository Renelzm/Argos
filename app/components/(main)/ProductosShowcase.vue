<template>
  <section class="border-t border-gray-200 dark:border-white/10 ">
    <div class="mx-auto max-w-6xl px-8 py-24 lg:py-20">
      <div class="font-heading text-[13px] font-semibold tracking-[0.16em] text-gray-500 dark:text-gray-400">PROTOTIPOS REALIZADOS</div>
      <h3 class="mt-2 font-heading text-[clamp(32px,4vw,48px)] font-bold leading-[1.05] tracking-tight text-gray-900 dark:text-white">
       AI
      </h3>
      <p class="mt-2 max-w-xl text-lg leading-relaxed text-gray-500 dark:text-gray-400">
        Prototipos desarrollados para distintas entidades: visión artificial, chatbots de atención ciudadana, automatización de trámites y paneles de datos, sobre la misma arquitectura.
      </p>

      <div class="mt-7 flex flex-wrap items-center gap-3">
        <span class="text-sm font-medium text-gray-500 dark:text-gray-400">Soluciones para:</span>
        <NuxtLink
          to="/gobierno"
          class="group/cta inline-flex items-center gap-2.5 rounded-full border border-gobierno/25 bg-gobierno/5 py-1.5 pr-5 pl-1.5 text-sm font-semibold text-gobierno shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-gobierno hover:bg-gobierno hover:text-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gobierno focus-visible:ring-offset-2 motion-reduce:transition-colors motion-reduce:transform-none"
        >
          <span class="flex size-7 items-center justify-center rounded-full bg-gobierno/10 transition-colors duration-300 group-hover/cta:bg-white/20 motion-reduce:transition-none">
            <UIcon name="i-lucide-landmark" class="size-3.5" />
          </span>
          Gobierno
        </NuxtLink>
        <NuxtLink
          to="/empresas"
          class="group/cta inline-flex items-center gap-2.5 rounded-full border border-empresa/25 bg-empresa/5 py-1.5 pr-5 pl-1.5 text-sm font-semibold text-empresa shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-empresa hover:bg-empresa hover:text-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empresa focus-visible:ring-offset-2 motion-reduce:transition-colors motion-reduce:transform-none"
        >
          <span class="flex size-7 items-center justify-center rounded-full bg-empresa/10 transition-colors duration-300 group-hover/cta:bg-white/20 motion-reduce:transition-none">
            <UIcon name="i-lucide-building-2" class="size-3.5" />
          </span>
          Empresa
        </NuxtLink>
      </div>

      <div class="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <!-- Hero: chatbot explicado a detalle -->
        <div class="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-lg lg:col-span-3 lg:flex lg:flex-row-reverse dark:border-white/10 dark:bg-gray-900">
          <div class="flex items-center justify-center bg-gray-50 p-6 lg:w-2/2 lg:p-0 dark:bg-white/3">
            <img
              :src="hero.image"
              :alt="hero.imageAlt"
              loading="lazy"
              class="w-full rounded-lg object-contain"
            >
          </div>
          <div class="flex flex-col justify-center p-8 lg:w-1/2 lg:p-10">
            <div class="flex size-11 items-center justify-center rounded-xl bg-sky-600/10">
              <UIcon name="i-lucide-bot" class="size-5 text-sky-600" />
            </div>
            <h4 class="mt-5 text-xl font-semibold text-gray-900 dark:text-white">{{ hero.title }}</h4>
            <p class="mt-2.5 text-[14.5px] leading-relaxed text-gray-500 dark:text-gray-400">{{ hero.desc }}</p>
            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="tag in hero.tags"
                :key="tag"
                class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-[11.5px] font-medium text-gray-600 dark:bg-white/5 dark:text-gray-300"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <!-- Trío: casos puntuales -->
        <div
          v-for="card in squareCards"
          :key="card.title"
          class="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-lg dark:border-white/10 dark:bg-gray-900"
        >
          <div class="group/img aspect-square overflow-hidden">
            <img
              :src="card.image"
              :alt="card.imageAlt"
              loading="lazy"
              class="size-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-105 motion-reduce:transition-none motion-reduce:group-hover/img:scale-100"
            >
          </div>
          <div class="p-6">
            <div class="flex size-9 items-center justify-center rounded-lg" :class="card.badgeBg">
              <UIcon :name="card.icon" class="size-4" :class="card.color" />
            </div>
            <h4 class="mt-4 text-[15px] font-semibold text-gray-900 dark:text-white">{{ card.title }}</h4>
            <p class="mt-1.5 text-[13.5px] leading-relaxed text-gray-500 dark:text-gray-400">{{ card.desc }}</p>
          </div>
        </div>

        <!-- Ancho: panel georreferenciado -->
        <div class="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-lg lg:col-span-3 lg:flex dark:border-white/10 dark:bg-gray-900">
          <div class="flex items-center justify-center bg-gray-50 p-6 lg:w-1/2 lg:p-8 dark:bg-white/3">
            <img
              :src="wide.image"
              :alt="wide.imageAlt"
              loading="lazy"
              class="w-full max-w-md rounded-lg object-contain"
            >
          </div>
          <div class="flex flex-col justify-center p-8 lg:w-1/2 lg:p-10">
            <div class="flex size-11 items-center justify-center rounded-xl bg-red-500/10">
              <UIcon name="i-lucide-map-pinned" class="size-5 text-red-500" />
            </div>
            <h4 class="mt-5 text-xl font-semibold text-gray-900 dark:text-white">{{ wide.title }}</h4>
            <p class="mt-2.5 text-[14.5px] leading-relaxed text-gray-500 dark:text-gray-400">{{ wide.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const hero = {
  image: '/Imagenes/chatbot-explicado.png',
  imageAlt: 'Diagrama explicando el funcionamiento de un chatbot de atención ciudadana: cero menús, reporte multimodal y folio inmediato.',
  title: 'Chatbots sin fricción para atención ciudadana',
  desc: 'Sin menús ni formularios: el ciudadano reporta con su propio lenguaje, en el canal que ya usa (WhatsApp, app, web o voz). El sistema interpreta texto, imagen y ubicación, y entrega un folio con acuse en PDF al instante.',
  tags: ['Cero menús', 'Lenguaje coloquial', 'Reporte multimodal', 'Folio inmediato', 'Omnicanalidad'],
}

const squareCards = [
  {
    image: '/Imagenes/Servicios02.png',
    imageAlt: 'Interfaz de visión artificial identificando un bache en una fotografía, con nivel de confianza y geolocalización extraída.',
    icon: 'i-lucide-scan-eye',
    color: 'text-accent',
    badgeBg: 'bg-accent/10',
    title: 'Detección de baches por visión artificial',
    desc: 'El modelo identifica el tipo de daño, califica su severidad y geolocaliza el reporte a partir de los metadatos de la foto, sin captura manual.',
  },
  {
    image: '/Imagenes/Servicios06.jpg',
    imageAlt: 'Conversación de WhatsApp donde un ciudadano reporta una fuga de agua y el chatbot solicita su ubicación.',
    icon: 'i-lucide-message-circle',
    color: 'text-[#25d366]',
    badgeBg: 'bg-[#25d366]/10',
    title: 'Bots entrenados para el lenguaje real',
    desc: 'Entienden fotos, corrigen errores de dicción y ortografía, e interpretan el lenguaje popular para turnar el reporte a la cuadrilla correcta.',
  },
  {
    image: '/Imagenes/Servicios04.png',
    imageAlt: 'Ilustración de expedientes de papel transformándose en un panel administrativo digital.',
    icon: 'i-lucide-scan-line',
    color: 'text-gobierno',
    badgeBg: 'bg-gobierno/10',
    title: 'De expedientes de papel a paneles digitales',
    desc: 'La base de nuestras automatizaciones: migramos procesos que hoy viven en papel y captura manual hacia paneles, bots y flujos trazables.',
  },
]

const wide = {
  image: '/Imagenes/Servicios05.png',
  imageAlt: 'Panel de control con mapa de calor georreferenciado y estadísticas de atención ciudadana, vialidad y bacheo.',
  title: 'Un panel para ver la ciudad en tiempo real',
  desc: 'Atención ciudadana, vialidad, bacheo y más, trazados sobre un mapa interactivo con estadística en vivo: tiempo de respuesta, tasa de resolución y las problemáticas con mayor incidencia por zona.',
}
</script>
