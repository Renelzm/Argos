<template>
     <section class="border-t border-gray-200 dark:border-white/10">
        <div class="mx-auto max-w-6xl px-8 py-24 lg:py-32">
            <div class="font-heading text-[13px] font-semibold tracking-[0.16em] text-accent">SOLUCIONES DESTACADAS</div>
            <h3 class="mt-4 font-heading text-[clamp(32px,4vw,48px)] font-bold leading-[1.05] tracking-tight text-gray-900 dark:text-white">
                Del chatbot al sistema de control.
            </h3>
            <p class="mt-5 max-w-xl text-lg leading-relaxed text-gray-500 dark:text-gray-400">
                Un mismo motor técnico, desplegado en productos concretos para gobierno e iniciativa privada.
            </p>
            <div class="mt-14 grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3 dark:border-white/10 dark:bg-white/10">
                <div
                  v-for="product in products"
                  :key="product.title"
                  class="group bg-white p-8 transition-colors duration-300 hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-white/5"
                >
                    <div class="flex size-12 items-center justify-center rounded-xl transition-transform duration-300 ease-out group-hover:scale-110" :class="product.badgeBg">
                      <UIcon :name="product.icon" class="size-6" :class="product.color" />
                    </div>
                    <div class="mt-4.5 mb-2 font-heading text-lg font-semibold text-gray-900 dark:text-white">{{ product.title }}</div>
                    <p class="text-[14.5px] leading-relaxed text-gray-500 dark:text-gray-400">{{ product.desc }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>

const products = [{
        icon: 'i-lucide-message-circle',
        color: 'text-[#25d366]',
        badgeBg: 'bg-[#25d366]/10',
        title: 'Chatbots omnicanal',
        desc: 'Captación de quejas y atención ciudadana o comercial 24/7 en WhatsApp, Telegram y Web.'
    },
    {
        icon: 'i-lucide-clipboard-check',
        color: 'text-accent',
        badgeBg: 'bg-accent/10',
        title: 'Sistemas de control',
        desc: 'Trazabilidad con huella inalterable de cada proceso para auditorías y transparencia.'
    },
    {
        icon: 'i-lucide-cog',
        color: 'text-gray-500',
        badgeBg: 'bg-gray-500/10',
        title: 'Automatización de procesos',
        desc: 'Nodos de ejecución silenciosa que reemplazan las tareas manuales repetitivas.'
    },
    {
        icon: 'i-lucide-activity',
        color: 'text-empresa',
        badgeBg: 'bg-empresa/10',
        title: 'Monitoreo y análisis',
        desc: 'Scrapeo masivo y análisis de sentimiento por inteligencia artificial en tiempo real.'
    },
    {
        icon: 'i-lucide-bar-chart-3',
        color: 'text-cyan-500',
        badgeBg: 'bg-cyan-500/10',
        title: 'Business Intelligence',
        desc: 'Datos crudos convertidos en tableros ejecutivos para la toma de decisiones.'
    },
    {
        icon: 'i-lucide-calendar-check',
        color: 'text-amber-500',
        badgeBg: 'bg-amber-500/10',
        title: 'Agendamiento inteligente',
        desc: 'Citas y trámites omnicanal con validación de requisitos en tiempo real.'
    },
]
</script>

<style>

</style>