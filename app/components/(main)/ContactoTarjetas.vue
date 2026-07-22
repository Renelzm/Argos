<template>
  <section class="px-8 py-16 lg:py-20">
    <div class="mx-auto grid max-w-4xl grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      <a
        v-for="channel in channels"
        :key="channel.label"
        :href="channel.href"
        :target="channel.external ? '_blank' : undefined"
        :rel="channel.external ? 'noopener noreferrer' : undefined"
        class="group flex flex-col items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-300 ease-out hover:border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:transition-none lg:p-8 dark:border-white/10 dark:bg-gray-900 dark:hover:border-white/20"
        :class="channel.ring"
      >
        <span class="flex size-11 shrink-0 items-center justify-center rounded-full" :class="channel.chipClass">
          <UIcon :name="channel.icon" class="size-5 text-white" />
        </span>

        <div class="w-full min-w-0">
          <div class="text-[11px] font-semibold tracking-[0.14em] text-gray-400 uppercase dark:text-gray-500">{{ channel.label }}</div>
          <div class="mt-1 font-heading font-semibold break-words text-gray-900 dark:text-white" :class="channel.valueClass ?? 'text-lg'">{{ channel.value }}</div>
        </div>

        <span class="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold" :class="channel.textClass">
          {{ channel.cta }}
          <UIcon
            name="i-lucide-arrow-right"
            class="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
          />
        </span>
      </a>
    </div>

    <p class="mx-auto mt-8 max-w-4xl text-center text-sm text-gray-500 lg:mt-10 dark:text-gray-400">
      ¿Aún no estás seguro por dónde empezar? Escríbenos para solicitar una demo o agendar una cita de mapeo de procesos, y te ayudamos a identificar en qué punto de tu operación conviene automatizar primero.
    </p>
  </section>
</template>

<script setup>
const channels = [
  {
    label: 'Correo',
    value: 'argos.webservices@gmail.com',
    valueClass: 'text-[15px] whitespace-nowrap',
    href: 'mailto:argos.webservices@gmail.com',
    cta: 'Enviar correo',
    icon: 'i-lucide-mail',
    chipClass: 'bg-gobierno',
    textClass: 'text-gobierno',
    ring: 'focus-visible:ring-gobierno',
  },
  {
    label: 'WhatsApp',
    value: '871 316 2338',
    href: 'https://wa.me/528713162338',
    external: true,
    cta: 'Abrir WhatsApp',
    icon: 'i-simple-icons-whatsapp',
    chipClass: 'bg-[#25D366]',
    textClass: 'text-[#1DA851]',
    ring: 'focus-visible:ring-[#25D366]',
  },
  {
    label: 'Teléfono',
    value: '871 316 2338',
    href: 'tel:+528713162338',
    cta: 'Llamar ahora',
    icon: 'i-lucide-phone',
    chipClass: 'bg-empresa',
    textClass: 'text-empresa',
    ring: 'focus-visible:ring-empresa',
  },
]
</script>
