<template>
  <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-900">
    <!-- Image gallery "stage": row on desktop, stacked on mobile, framed by its own background -->


    <div class="p-6 lg:p-8">
      <div class="flex flex-wrap items-center gap-2">
        <span
          v-if="product.eyebrow"
          class="inline-flex items-center rounded-full px-3 py-1 font-heading text-[11px] font-semibold tracking-[0.14em]"
          :class="theme.badge"
        >
          {{ product.eyebrow }}
        </span>

        <span
          v-if="product.poweredBy"
          class="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1 text-[11px] font-semibold text-gray-500 dark:border-white/10 dark:text-gray-400"
        >
          <UIcon name="i-lucide-brain-circuit" class="size-3.5" />
          Powered by {{ product.poweredBy }}
        </span>
      </div>
      <h3 class="mt-3 font-heading text-2xl font-semibold text-gray-900 dark:text-white">{{ product.title }}</h3>
      <p class="mt-3 text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">{{ product.description }}</p>

      <div v-if="product.features?.length" class="mt-6 grid grid-cols-1 gap-x-5 gap-y-4 border-t border-gray-100 pt-6 sm:grid-cols-2 dark:border-white/10">
        <div v-for="feature in product.features" :key="feature.title" class="flex flex-col items-start gap-1.5">
          <div class="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-gray-800 dark:text-gray-100">
            <span class="flex size-6 shrink-0 items-center justify-center rounded-full" :class="feature.chipClass">
              <UIcon :name="feature.icon" class="size-3.5 text-white" />
            </span>
            {{ feature.title }}
          </div>
          <p class="pl-1 text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">{{ feature.description }}</p>
        </div>
      </div>

      <div v-if="product.channels?.length" class="mt-6 border-t border-gray-100 pt-6 dark:border-white/10">
        <div class="text-[11px] font-semibold tracking-[0.14em] text-gray-400 uppercase dark:text-gray-500">Canales de comunicación</div>
        <div class="mt-3 flex flex-wrap gap-2">
          <div
            v-for="channel in product.channels"
            :key="channel.label"
            class="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200"
            :class="channel.chipClass"
          >
            <UIcon :name="channel.icon" class="size-4" :class="channel.color" />
            {{ channel.label }}
          </div>
        </div>
      </div>

      <NuxtLink
        v-if="product.to"
        :to="product.to"
        class="group/cta mt-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:transition-none"
        :class="[theme.cta, theme.ring]"
      >
        Conocer producto
        <UIcon
          name="i-lucide-arrow-right"
          class="size-4 transition-transform duration-300 ease-out group-hover/cta:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover/cta:translate-x-0"
        />
      </NuxtLink>
    </div>
        <div v-if="product.images?.length" class="flex flex-col gap-3 border-t border-gray-100 p-3 dark:border-white/10 lg:flex-row lg:gap-4 lg:p-4" :class="theme.surface">
      <div
        v-for="(img, i) in product.images"
        :key="i"
        class="group/img flex-1 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-gray-900"
        :class="(img.aspect ?? 'video') === 'square' ? 'aspect-square' : 'aspect-video'"
      >
        <img
          :src="img.src"
          :alt="img.alt || product.title"
          loading="lazy"
          class="size-full transition-transform duration-500 ease-out group-hover/img:scale-105 motion-reduce:transition-none motion-reduce:group-hover/img:scale-100"
          :class="(img.fit ?? 'cover') === 'contain' ? 'object-contain' : 'object-cover'"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: { type: Object, required: true },
})

const theme = computed(() => useProductTheme(props.product.color))
</script>
