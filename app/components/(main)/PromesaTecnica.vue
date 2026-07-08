<template>
  <section class="mx-auto max-w-6xl px-8 py-24 lg:py-32">
    <div class="font-heading text-[13px] font-semibold tracking-[0.16em] text-gray-500 dark:text-gray-400">
      NUESTRA PROMESA TÉCNICA
    </div>

    <h3 class="mt-5 max-w-3xl font-heading text-[clamp(38px,5vw,64px)] font-bold leading-[1.03] tracking-tight text-gray-900 dark:text-white">
      Arquitectura no invasiva.
    </h3>
    <p class="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
      Nos adaptamos a tus flujos de trabajo actuales. No imponemos softwares innecesarios ni cajas negras. Orquestamos y
      optimizamos tus bases de datos e infraestructura existente, o construimos un entorno modular desde cero bajo el
      control total de tu institución.
    </p>

    <!-- Editorial "circuito": una línea de proceso conecta las tres promesas, como un diagrama de arquitectura -->
    <div class="relative mt-20">
      <div class="pointer-events-none absolute top-[19px] right-0 left-0 hidden h-px bg-gradient-to-r from-gray-200 via-gray-200 to-transparent sm:block dark:from-white/10 dark:via-white/10" />

      <div class="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
        <div v-for="(card, index) in promiseCards" :key="card.title" class="group relative">
          <div class="relative z-10 flex size-10 items-center justify-center rounded-full border border-gray-300 bg-white font-heading text-[13px] font-bold text-gray-400 transition-colors duration-300 ease-out group-hover:border-accent group-hover:text-accent dark:border-white/15 dark:bg-gray-950 dark:text-gray-500">
            {{ String(index + 1).padStart(2, '0') }}
          </div>

          <h4 class="mt-5 text-[17px] font-semibold text-gray-900 dark:text-white">{{ card.title }}</h4>
          <p class="mt-2 max-w-[26ch] text-[14.5px] leading-relaxed text-gray-500 dark:text-gray-400">{{ card.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const promiseCards = [
  {
    title: 'Nos adaptamos',
    desc: 'Nos conectamos a tus sistemas actuales sin reemplazarlos.',
  },
  {
    title: 'Cero cajas negras',
    desc: 'Transparencia técnica total y propiedad de la información.',
  },
  {
    title: 'Modular desde cero',
    desc: 'O construimos un ecosistema nuevo bajo tu control total.',
  },
]
</script>