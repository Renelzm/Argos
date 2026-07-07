<template>
  <button
    type="button"
    :aria-pressed="active"
    class="group flex w-full cursor-pointer items-center gap-4 rounded-2xl border-2 bg-white p-3 text-left shadow-sm transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:scale-100 dark:bg-gray-900"
    :class="active
      ? `scale-[1.02] shadow-md ${theme.activeBorder} ${theme.ring}`
      : `border-gray-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md ${theme.ring} dark:border-white/10 dark:hover:border-white/20`"
    @click="$emit('select')"
  >
    <div class="size-16 shrink-0 overflow-hidden rounded-xl bg-gray-100 dark:bg-white/5">
      <img :src="image" :alt="imageAlt || title" loading="lazy" class="size-full object-cover">
    </div>
    <div class="min-w-0 flex-1">
      <span
        v-if="eyebrow"
        class="inline-flex items-center rounded-full px-2.5 py-0.5 font-heading text-[10px] font-semibold tracking-[0.22em]"
        :class="theme.badge"
      >
        {{ eyebrow }}
      </span>
      <div class="mt-1.5 truncate font-heading text-[15px] font-semibold text-gray-900 dark:text-white">{{ title }}</div>
    </div>
    <UIcon
      name="i-lucide-chevron-right"
      class="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none"
      :class="active ? `rotate-90 ${theme.chevron}` : 'text-gray-300 dark:text-white/25'"
    />
  </button>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, default: '' },
  eyebrow: { type: String, default: '' },
  color: { type: String, default: 'gobierno' },
  active: { type: Boolean, default: false },
})

defineEmits(['select'])

const theme = computed(() => useProductTheme(props.color))
</script>
