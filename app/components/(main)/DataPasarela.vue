<template>
  <div>
        <section class="border-y border-gray-200 bg-white dark:border-white/10 dark:bg-gray-900">
      <UMarquee
        pause-on-hover
        class="py-4 mask-[linear-gradient(to_right,transparent,black_48px,black_calc(100%-48px),transparent)]"
      >
        <div
          v-for="tag in tags"
          :key="tag.label"
          class="flex items-center gap-2.5 whitespace-nowrap text-[13px] font-semibold text-gray-700 dark:text-gray-300"
        >
          <span class="flex size-7 items-center justify-center rounded-full" :class="tag.badgeBg">
            <UIcon :name="tag.icon" class="size-3.5" :class="tag.color" />
          </span>
          {{ tag.label }}
        </div>
      </UMarquee>
    </section>
  </div>
</template>

<script lang="ts" setup>
const tags = [
  { label: 'Chatbots omnicanal', icon: 'i-lucide-message-circle', color: 'text-[#25d366]', badgeBg: 'bg-[#25d366]/10' },
  { label: 'Sistemas de control', icon: 'i-lucide-clipboard-check', color: 'text-accent', badgeBg: 'bg-accent/10' },
  { label: 'Panel de control y seguimiento', icon: 'i-lucide-layout-dashboard', color: 'text-gobierno', badgeBg: 'bg-gobierno/10' },
  { label: 'Actividades georreferenciadas', icon: 'i-lucide-map-pinned', color: 'text-red-500', badgeBg: 'bg-red-500/10' },
  { label: 'Automatización de procesos', icon: 'i-lucide-cog', color: 'text-gray-500', badgeBg: 'bg-gray-500/10' },
  { label: 'Monitoreo y análisis', icon: 'i-lucide-activity', color: 'text-empresa', badgeBg: 'bg-empresa/10' },
  { label: 'Business Intelligence', icon: 'i-lucide-bar-chart-3', color: 'text-cyan-500', badgeBg: 'bg-cyan-500/10' },
  { label: 'Agendamiento inteligente', icon: 'i-lucide-calendar-check', color: 'text-amber-500', badgeBg: 'bg-amber-500/10' },
]
</script>

<style>

</style>