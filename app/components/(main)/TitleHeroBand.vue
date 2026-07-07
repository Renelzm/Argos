<template>
  <section class="relative flex flex-col items-center overflow-hidden px-8 pt-20 pb-11 text-center light:bg-slate-100 lg:pt-24 lg:pb-14">
    <!-- barely-there ambient depth, neutral so it never competes with the mark -->
    <div class="pointer-events-none absolute top-0 left-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-400/8 blur-3xl dark:bg-white/5" />

    <LogoMark
      :size="58"
      tone="color"
      wordmark
      wordmark-variant="hero"
      wordmark-size="clamp(40px,5.5vw,68px)"
      gap="6px"
      animated
      class="reveal relative"
    />
    <p class="reveal reveal-delay relative mt-4 max-w-md text-base font-medium tracking-[0.02em] text-gray-600 dark:text-gray-400">
      Soluciones de consultoría y tecnología aplicada a gobiernos y empresas.
    </p>
  </section>
</template>

<script lang="ts" setup>

</script>

<style scoped>
@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal {
  animation: reveal 700ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.reveal-delay {
  animation-delay: 120ms;
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    animation: none;
  }
}
</style>