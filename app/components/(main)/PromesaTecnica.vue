<template>
      <section class="mx-auto max-w-6xl px-8 py-24 lg:py-32">
        <div class="font-heading text-[13px] font-semibold tracking-[0.16em] text-gray-500 dark:text-gray-400">NUESTRA PROMESA TÉCNICA</div>
        <h3 class="mt-5 max-w-3xl font-heading text-[clamp(38px,5vw,64px)] font-bold leading-[1.03] tracking-tight text-gray-900 dark:text-white">
            Arquitectura No Invasiva.
        </h3>
        <p class="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Nos adaptamos a tus flujos de trabajo actuales. No imponemos softwares innecesarios ni cajas negras. Orquestamos y
            optimizamos tus bases de datos e infraestructura existente, o construimos un entorno modular desde cero bajo el
            control total de tu institución.
        </p>
        <div class="mt-18 grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-3 dark:border-white/10 dark:bg-white/10">
            <div
              v-for="card in promiseCards"
              :key="card.title"
              class="group bg-white p-8 transition-colors duration-300 hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-white/5"
            >
                <div class="flex size-11 items-center justify-center rounded-xl bg-accent/10 transition-transform duration-300 ease-out group-hover:scale-110 dark:bg-accent/15">
                  <UIcon :name="card.icon" class="size-5 text-accent" />
                </div>
                <div class="mt-4 mb-1.5 text-base font-semibold text-gray-900 dark:text-white">{{ card.title }}</div>
                <p class="text-[14.5px] leading-relaxed text-gray-500 dark:text-gray-400">{{ card.desc }}</p>
            </div>
        </div>
    </section>

</template>

<script lang="ts" setup>
const promiseCards = [{
        icon: 'i-lucide-git-merge',
        title: 'Nos adaptamos',
        desc: 'Nos conectamos a tus sistemas actuales sin reemplazarlos.'
    },
    {
        icon: 'i-lucide-package-open',
        title: 'Cero cajas negras',
        desc: 'Transparencia técnica total y propiedad de la información.'
    },
    {
        icon: 'i-lucide-blocks',
        title: 'Modular desde cero',
        desc: 'O construimos un ecosistema nuevo bajo tu control total.'
    },
]

</script>

<style>

</style>