<template>
  <section class="bg-gray-50 px-8 py-24 dark:bg-white/2 lg:py-32">
    <div class="mx-auto max-w-4xl text-center">
      <div class="font-heading text-[13px] font-semibold tracking-[0.16em] text-gray-500 dark:text-gray-400">SIGUIENTE PASO</div>
      <h2 class="mt-4 font-heading text-[clamp(30px,4vw,48px)] font-bold leading-[1.05] tracking-tight text-gray-900 dark:text-white">
        ¿Gobierno o empresa?
      </h2>
      <p class="mx-auto mt-5 max-w-md text-lg leading-relaxed text-gray-500 dark:text-gray-400">
        Mismo motor, dos puntos de entrada. Elige el tuyo.
      </p>

      <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <NuxtLink
          to="/gobierno"
          class="group inline-flex items-center gap-3 rounded-full border border-gobierno/30 py-1.5 pr-1.5 pl-6 text-sm font-semibold text-gobierno transition-colors duration-300 hover:border-gobierno hover:bg-gobierno hover:text-white"
        >
          Sector Público
          <span class="flex size-8 items-center justify-center rounded-full bg-gobierno/10 transition-colors duration-300 group-hover:bg-white/20">
            <UIcon name="i-lucide-arrow-right" class="size-4" />
          </span>
        </NuxtLink>
        <NuxtLink
          to="/empresas"
          class="group inline-flex items-center gap-3 rounded-full border border-empresa/30 py-1.5 pr-1.5 pl-6 text-sm font-semibold text-empresa transition-colors duration-300 hover:border-empresa hover:bg-empresa hover:text-white"
        >
          Empresa Privada
          <span class="flex size-8 items-center justify-center rounded-full bg-empresa/10 transition-colors duration-300 group-hover:bg-white/20">
            <UIcon name="i-lucide-arrow-right" class="size-4" />
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
