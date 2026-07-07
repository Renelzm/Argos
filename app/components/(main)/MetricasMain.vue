<template>
<section class="border-t border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/2">
        <div class="mx-auto max-w-6xl px-8 py-24 lg:py-32">
            <div class="font-heading text-[13px] font-semibold tracking-[0.16em] text-gray-500 dark:text-gray-400">MÉTRICAS DURAS</div>
            <h3 class="mt-4 font-heading text-[clamp(32px,4vw,48px)] font-bold leading-[1.05] tracking-tight text-gray-900 dark:text-white">
                El antes y el después.
            </h3>
            <div class="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div
                  v-for="metric in metrics"
                  :key="metric.title"
                  class="group rounded-md border border-gray-200 bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none dark:border-white/10 dark:bg-gray-900"
                  :class="metric.hoverBorder"
                >
                    <div class="flex items-center gap-2.5">
                      <span class="flex size-8 items-center justify-center rounded-lg" :class="metric.badgeBg">
                        <UIcon name="i-lucide-trending-up" class="size-4" :class="metric.eyebrowColor" />
                      </span>
                      <div class="font-heading text-xs font-semibold tracking-[0.14em]" :class="metric.eyebrowColor">{{ metric.eyebrow }}</div>
                    </div>
                    <div class="mt-4 mb-5 text-[19px] font-semibold text-gray-900 dark:text-white">{{ metric.title }}</div>
                    <div class="mb-1 text-[13px] text-gray-400">Antes</div>
                    <p class="mb-3 text-[15px] leading-normal text-gray-500 dark:text-gray-400">{{ metric.before }}</p>
                    <UIcon name="i-lucide-arrow-down" class="mb-3 size-3.5 text-gray-300 dark:text-gray-600" />
                    <div class="mb-1 text-[13px] font-semibold text-accent">Después</div>
                    <p class="text-[15px] leading-normal text-gray-900 dark:text-white">{{ metric.after }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const metrics = [{
        eyebrow: 'SECTOR PÚBLICO',
        eyebrowColor: 'text-gobierno',
        badgeBg: 'bg-gobierno/10',
        hoverBorder: 'hover:border-gobierno/40',
        title: 'Ahorro Operativo',
        before: 'Rutas manuales y traslados de cuadrillas sin optimizar.',
        after: 'Rutas de despacho optimizadas: menos combustible y tiempos de traslado.'
    },
    {
        eyebrow: 'SECTOR PÚBLICO',
        eyebrowColor: 'text-gobierno',
        badgeBg: 'bg-gobierno/10',
        hoverBorder: 'hover:border-gobierno/40',
        title: 'Cero Burocracia',
        before: 'Horas-hombre desperdiciadas llenando formatos a mano.',
        after: 'Documentos de control administrativo generados 100% en automático.'
    },
    {
        eyebrow: 'ENTERPRISE',
        eyebrowColor: 'text-empresa',
        badgeBg: 'bg-empresa/10',
        hoverBorder: 'hover:border-empresa/40',
        title: 'Eficiencia de Infraestructura',
        before: 'Bases de datos de ejecución de varios gigabytes.',
        after: 'Depuración automatizada: de gigabytes a megabytes (−99%).'
    },
    {
        eyebrow: 'ENTERPRISE',
        eyebrowColor: 'text-empresa',
        badgeBg: 'bg-empresa/10',
        hoverBorder: 'hover:border-empresa/40',
        title: 'Escalabilidad',
        before: 'Más volumen de atención exige engrosar la nómina.',
        after: 'Crece la resolución de quejas sin engrosar la nómina base.'
    },
]
</script>

<style>

</style>