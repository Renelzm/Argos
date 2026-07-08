<template>
<section ref="sectionRef" class="border-t border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/2">
        <div class="mx-auto max-w-6xl px-8 py-24 lg:py-32">
            <div class="font-heading text-[13px] font-semibold tracking-[0.16em] text-gray-500 dark:text-gray-400">MÉTRICAS DURAS</div>
            <h3 class="mt-4 max-w-2xl font-heading text-[clamp(32px,4vw,48px)] font-bold leading-[1.05] tracking-tight text-gray-900 dark:text-white">
                El antes y el después.
            </h3>
            <p class="mt-5 max-w-xl text-lg leading-relaxed text-gray-500 dark:text-gray-400">
                Resultados verificables en campo, no proyecciones de venta.
            </p>

            <div class="mt-16 border-t border-gray-200 dark:border-white/10">
                <div
                  v-for="(metric, index) in metrics"
                  :key="metric.title"
                  class="grid grid-cols-1 items-center gap-3 border-b border-gray-200 py-8 transition-colors duration-300 hover:bg-white sm:gap-4 lg:grid-cols-[minmax(180px,1fr)_minmax(220px,1.3fr)_88px_minmax(220px,1.3fr)] lg:gap-8 dark:border-white/10 dark:hover:bg-white/3"
                >
                    <div>
                        <div class="flex items-center gap-2">
                          <span class="size-1.5 rounded-full" :class="metric.accentBg" />
                          <span class="font-heading text-[11px] font-semibold tracking-[0.16em]" :class="metric.eyebrowColor">{{ metric.eyebrow }}</span>
                        </div>
                        <div class="mt-2 font-heading text-lg font-semibold text-gray-900 dark:text-white">{{ metric.title }}</div>
                    </div>

                    <div>
                        <div class="text-[11px] font-semibold tracking-wide text-gray-400 dark:text-gray-500">ANTES</div>
                        <p class="mt-1 text-[14.5px] leading-relaxed text-gray-500 line-through decoration-1 decoration-gray-300 dark:text-gray-500 dark:decoration-gray-700">{{ metric.before }}</p>
                    </div>

                    <div class="flex items-center py-1 lg:justify-center">
                        <span class="size-2 shrink-0 rounded-full border-2 border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-900" />
                        <span class="relative mx-1.5 h-px flex-1 overflow-hidden bg-gray-200 lg:w-16 lg:flex-none dark:bg-white/10">
                          <span
                            class="absolute inset-y-0 left-0 block h-full origin-left transition-[width] duration-700 ease-out motion-reduce:w-full! motion-reduce:transition-none"
                            :class="[metric.accentBg, revealed ? 'w-full' : 'w-0']"
                            :style="{ transitionDelay: revealed ? `${index * 90}ms` : '0ms' }"
                          />
                        </span>
                        <span class="size-2.5 shrink-0 rounded-full" :class="metric.accentBg" />
                    </div>

                    <div>
                        <div class="text-[11px] font-semibold tracking-wide" :class="metric.eyebrowColor">DESPUÉS</div>
                        <p class="mt-1 text-[15px] leading-relaxed font-medium text-gray-900 dark:text-white">{{ metric.after }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const sectionRef = ref<HTMLElement | null>(null)
const revealed = ref(false)

onMounted(() => {
    if (!sectionRef.value) return
    const observer = new IntersectionObserver(([entry]) => {
        if (entry?.isIntersecting) {
            revealed.value = true
            observer.disconnect()
        }
    }, { threshold: 0.2 })
    observer.observe(sectionRef.value)
})

const metrics = [{
        eyebrow: 'SECTOR PÚBLICO',
        eyebrowColor: 'text-gobierno',
        accentBg: 'bg-gobierno',
        title: 'Ahorro Operativo',
        before: 'Rutas manuales y traslados de cuadrillas sin optimizar.',
        after: 'Rutas de despacho optimizadas: menos combustible y tiempos de traslado.'
    },
    {
        eyebrow: 'SECTOR PÚBLICO',
        eyebrowColor: 'text-gobierno',
        accentBg: 'bg-gobierno',
        title: 'Cero Burocracia',
        before: 'Horas-hombre desperdiciadas llenando formatos a mano.',
        after: 'Documentos de control administrativo generados 100% en automático.'
    },
    {
        eyebrow: 'ENTERPRISE',
        eyebrowColor: 'text-empresa',
        accentBg: 'bg-empresa',
        title: 'Eficiencia de Infraestructura',
        before: 'Bases de datos de ejecución de varios gigabytes.',
        after: 'Depuración automatizada: de gigabytes a megabytes (−99%).'
    },
    {
        eyebrow: 'ENTERPRISE',
        eyebrowColor: 'text-empresa',
        accentBg: 'bg-empresa',
        title: 'Escalabilidad',
        before: 'Más volumen de atención exige engrosar la nómina.',
        after: 'Crece la resolución de quejas sin engrosar la nómina base.'
    },
]
</script>
