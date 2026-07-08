<template>
    <section class="relative flex flex-col lg:h-140 lg:flex-row">
      <NuxtLink
        to="/gobierno"
        class="group focus-visible:ring-gobierno relative flex flex-1 flex-col items-center overflow-hidden border-b px-8 py-14 text-center transition-[flex-grow,background-color,border-color] duration-500 ease-out motion-reduce:transition-colors motion-reduce:duration-150 lg:basis-0 lg:items-start lg:justify-center lg:border-b-0 lg:border-r lg:px-12 lg:py-12 lg:text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset"
        :class="[hovered === 'public' ? 'bg-gobierno/5 dark:bg-gobierno/10' : 'bg-gray-50 dark:bg-white/2', borderColorClass]"
        :style="{ flexGrow: growFor('public') }"
        @mouseenter="hovered = 'public'"
        @mouseleave="hovered = null"
        @focus="hovered = 'public'"
        @blur="hovered = null"
      >
        <!-- top identity bar, always on so the split reads even without hover on mobile -->
        <div class="absolute inset-x-0 top-0 h-1 bg-gobierno/70" />
        <!-- ambient glow, appears on hover/focus for depth -->
        <div
          class="pointer-events-none absolute -top-24 -left-16 size-72 rounded-full bg-gobierno/20 opacity-0 blur-3xl transition-opacity duration-500 motion-reduce:transition-none group-hover:opacity-100 group-focus-visible:opacity-100 dark:bg-gobierno/25"
        />
        <!-- oversized ghost numeral for editorial texture -->
        <span
          aria-hidden="true"
          class="pointer-events-none absolute -top-6 right-4 select-none font-heading text-[160px] leading-none font-bold text-gobierno/6 transition-transform duration-700 ease-out motion-reduce:transform-none group-hover:scale-105 group-focus-visible:scale-105 lg:-top-10 lg:right-6 lg:text-[240px] dark:text-gobierno/9"
        >01</span>

        <div class="relative max-w-md">
          <div class="flex size-14 items-center justify-center rounded-2xl bg-gobierno/10 transition-transform duration-300 ease-out motion-reduce:transform-none group-hover:-rotate-3 group-hover:scale-110 group-focus-visible:-rotate-3 group-focus-visible:scale-110 dark:bg-gobierno/20">
            <UIcon name="i-lucide-landmark" class="size-7 text-gobierno" />
          </div>
          <span class="mt-5 inline-flex items-center gap-2 rounded-full bg-gobierno/10 px-3 py-1 font-heading text-[11px] font-semibold tracking-[0.16em] text-gobierno dark:bg-gobierno/20">
            01 — GOBIERNO
          </span>
          <h2 class="mt-5 font-heading text-[clamp(34px,4vw,52px)] font-bold leading-[1.02] tracking-tight text-gobierno">Sector Público</h2>
          <p class="mx-auto mt-5 max-w-95 text-base leading-relaxed text-gray-600 lg:mx-0 dark:text-gray-300">
            Gobernanza, control físico y contención de crisis.
          </p>
          <p class="mx-auto mt-3.5 max-w-95 text-[13px] leading-relaxed text-gray-400 lg:mx-0">
            Atención ciudadana · Monitoreo de medios · Trámites · Automatizaciones · Bacheo · Campañas de mejora · Chats de quejas
          </p>
          <div
            class="mt-6 max-h-32 opacity-100 transition-all duration-500 motion-reduce:transition-none lg:overflow-hidden"
            :class="hovered === 'public' ? 'lg:mt-6 lg:max-h-32 lg:opacity-100' : 'lg:mt-0 lg:max-h-0 lg:opacity-0'"
          >
            <p class="font-heading text-xl font-semibold leading-snug text-gobierno">Orden y control social para una mejor gobernanza.</p>
          </div>
          <span class="mt-8 inline-flex items-center gap-3 rounded-full border border-gobierno/30 py-1.5 pr-1.5 pl-5 text-sm font-semibold text-gobierno transition-colors duration-300 motion-reduce:transition-none group-hover:border-gobierno group-hover:bg-gobierno group-hover:text-white group-focus-visible:border-gobierno group-focus-visible:bg-gobierno group-focus-visible:text-white">
             Ver herramientas y soluciones 
            <span class="flex size-8 items-center justify-center rounded-full bg-gobierno/10 transition-colors duration-300 motion-reduce:transition-none group-hover:bg-white/20 group-focus-visible:bg-white/20">
              <UIcon name="i-lucide-arrow-right" class="size-4 transition-transform duration-300 ease-out motion-reduce:transform-none group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5" />
            </span>
          </span>
        </div>
      </NuxtLink>

      <NuxtLink
        to="/empresas"
        class="group focus-visible:ring-empresa relative flex flex-1 flex-col items-center overflow-hidden px-8 py-14 text-center transition-[flex-grow,background-color] duration-500 ease-out motion-reduce:transition-colors motion-reduce:duration-150 lg:basis-0 lg:items-start lg:justify-center lg:px-12 lg:py-12 lg:text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset"
        :class="hovered === 'enterprise' ? 'bg-empresa/5 dark:bg-empresa/10' : 'bg-white dark:bg-transparent'"
        :style="{ flexGrow: growFor('enterprise') }"
        @mouseenter="hovered = 'enterprise'"
        @mouseleave="hovered = null"
        @focus="hovered = 'enterprise'"
        @blur="hovered = null"
      >
        <div class="absolute inset-x-0 top-0 h-1 bg-empresa/70" />
        <div
          class="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-empresa/20 opacity-0 blur-3xl transition-opacity duration-500 motion-reduce:transition-none group-hover:opacity-100 group-focus-visible:opacity-100 dark:bg-empresa/25"
        />
        <span
          aria-hidden="true"
          class="pointer-events-none absolute -top-6 right-4 select-none font-heading text-[160px] leading-none font-bold text-empresa/6 transition-transform duration-700 ease-out motion-reduce:transform-none group-hover:scale-105 group-focus-visible:scale-105 lg:-top-10 lg:right-6 lg:text-[240px] dark:text-empresa/9"
        >02</span>

        <div class="relative max-w-md">
          <div class="flex size-14 items-center justify-center rounded-2xl bg-empresa/10 transition-transform duration-300 ease-out motion-reduce:transform-none group-hover:rotate-3 group-hover:scale-110 group-focus-visible:rotate-3 group-focus-visible:scale-110 dark:bg-empresa/20">
            <UIcon name="i-lucide-building-2" class="size-7 text-empresa" />
          </div>
          <span class="mt-5 inline-flex items-center gap-2 rounded-full bg-empresa/10 px-3 py-1 font-heading text-[11px] font-semibold tracking-[0.16em] text-empresa dark:bg-empresa/20">
            02 — INICIATIVA PRIVADA
          </span>
          <h2 class="mt-5 font-heading text-[clamp(34px,4vw,52px)] font-bold leading-[1.02] tracking-tight text-empresa">Empresa Privada</h2>
          <p class="mx-auto mt-5 max-w-95 text-base leading-relaxed text-gray-600 lg:mx-0 dark:text-gray-300">
            Reducción de horas-hombre, retorno de inversión y escalabilidad técnica.
          </p>
          <p class="mx-auto mt-3.5 max-w-95 text-[13px] leading-relaxed text-gray-400 lg:mx-0">
            Chats · Automatización · Servicio a cliente · Reservas · Buscador de leads · Business Intelligence
          </p>
          <div
            class="mt-6 max-h-32 opacity-100 transition-all duration-500 motion-reduce:transition-none lg:overflow-hidden"
            :class="hovered === 'enterprise' ? 'lg:mt-6 lg:max-h-32 lg:opacity-100' : 'lg:mt-0 lg:max-h-0 lg:opacity-0'"
          >
            <p class="font-heading text-xl font-semibold leading-snug text-empresa">Eficiencia técnica para la empresa.</p>
          </div>
          <span class="mt-8 inline-flex items-center gap-3 rounded-full border border-empresa/30 py-1.5 pr-1.5 pl-5 text-sm font-semibold text-empresa transition-colors duration-300 motion-reduce:transition-none group-hover:border-empresa group-hover:bg-empresa group-hover:text-white group-focus-visible:border-empresa group-focus-visible:bg-empresa group-focus-visible:text-white">
             Ver herramientas y soluciones 
            <span class="flex size-8 items-center justify-center rounded-full bg-empresa/10 transition-colors duration-300 motion-reduce:transition-none group-hover:bg-white/20 group-focus-visible:bg-white/20">
              <UIcon name="i-lucide-arrow-right" class="size-4 transition-transform duration-300 ease-out motion-reduce:transform-none group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5" />
            </span>
          </span>
        </div>
      </NuxtLink>
    </section>

</template>

<script lang="ts" setup>
const hovered = ref<'public' | 'enterprise' | null>(null)

function growFor(side: 'public' | 'enterprise') {
  if (hovered.value === side) return 1.7
  if (hovered.value && hovered.value !== side) return 0.7
  return 1
}

const borderColorClass = computed(() => {
  if (hovered.value === 'public') return 'border-gobierno'
  if (hovered.value === 'enterprise') return 'border-empresa'
  return 'border-gray-200 dark:border-white/10'
})
</script>

<style>

</style>
