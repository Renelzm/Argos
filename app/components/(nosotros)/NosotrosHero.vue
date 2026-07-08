<template>
  <section class="border-b border-gray-200 bg-white px-8 pt-28 pb-20 dark:border-white/10 dark:bg-gray-950 lg:pt-36 lg:pb-28">
    <div class="mx-auto max-w-4xl">
      <div class="reveal font-heading text-[13px] font-semibold tracking-[0.16em] text-gray-500 dark:text-gray-400">QUIÉNES SOMOS</div>
      <h1 class="reveal reveal-delay mt-6 font-heading text-[clamp(40px,6.5vw,84px)] font-bold leading-[1.03] tracking-tight text-gray-900 dark:text-white">
        El mismo motor.<br />
        <span class="text-gobierno">Dos</span> <span class="text-empresa">frentes</span> distintos.
      </h1>
      <p class="reveal reveal-delay-2 mt-8 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
        Automatizamos los centros de trabajo que todavía dependen de papel, formularios repetidos y horas-hombre — sea una oficina de gobierno o una empresa privada.
      </p>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(14px);
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
  animation-delay: 90ms;
}

.reveal-delay-2 {
  animation-delay: 180ms;
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    animation: none;
  }
}
</style>
