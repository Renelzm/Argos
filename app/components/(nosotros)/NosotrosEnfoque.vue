<template>
  <section class="border-b border-gray-200 bg-white px-8 py-24 dark:border-white/10 dark:bg-gray-950 lg:py-32">
    <div class="mx-auto max-w-4xl">
      <div class="font-heading text-[13px] font-semibold tracking-[0.16em] text-gray-500 dark:text-gray-400">CÓMO TRABAJAMOS</div>
      <h2 class="mt-4 max-w-2xl font-heading text-[clamp(30px,3.6vw,44px)] font-bold leading-[1.05] tracking-tight text-gray-900 dark:text-white">
        Nos conectamos a lo que ya existe.
      </h2>

      <div class="mt-16 divide-y divide-gray-200 dark:divide-white/10">
        <div v-for="(stage, index) in stages" :key="stage.title" class="relative overflow-hidden py-10 first:pt-0">
          <span
            aria-hidden="true"
            class="pointer-events-none absolute -top-6 right-0 select-none font-heading text-[110px] leading-none font-bold text-gray-900/[0.04] sm:text-[150px] dark:text-white/[0.05]"
          >
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <div class="relative max-w-xl">
            <h3 class="font-heading text-2xl font-semibold text-gray-900 dark:text-white">{{ stage.title }}</h3>
            <p class="mt-3 text-[15.5px] leading-relaxed text-gray-500 dark:text-gray-400">{{ stage.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stages = [
  {
    title: 'Diagnóstico',
    desc: 'Mapeamos el flujo real de trabajo: qué se hace a mano, qué se repite, dónde se pierden horas.',
  },
  {
    title: 'Integración',
    desc: 'Nos conectamos a lo que ya existe — su ERP, su base de datos, su canal de atención — sin imponer un sistema nuevo, salvo que lo pidan.',
  },
  {
    title: 'Operación',
    desc: 'El sistema corre en silencio. Cada acción queda registrada y el control de la información es siempre suyo.',
  },
]
</script>
