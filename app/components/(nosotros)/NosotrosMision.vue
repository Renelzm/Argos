<template>
  <section class="border-b border-gray-200 bg-gray-50 px-8 py-24 dark:border-white/10 dark:bg-white/2 lg:py-32">
    <div class="mx-auto max-w-4xl">
      <div class="relative lg:pl-10">
        <span
          aria-hidden="true"
          class="absolute top-1 bottom-1 left-0 hidden w-[3px] rounded-full bg-gradient-to-b from-gobierno via-accent to-empresa lg:block"
        />
        <div class="font-heading text-[13px] font-semibold tracking-[0.16em] text-gray-500 dark:text-gray-400">POR QUÉ EXISTIMOS</div>
        <p class="mt-6 max-w-2xl text-xl leading-relaxed text-gray-700 dark:text-gray-200">
          La mayoría de los procesos administrativos —públicos o privados— siguen operando como hace veinte años: papel, formularios repetidos, horas-hombre gastadas en tareas que no requieren criterio humano.
        </p>
        <p class="mt-5 max-w-2xl text-xl leading-relaxed text-gray-700 dark:text-gray-200">
          Arg.os reemplaza esas tareas por nodos de ejecución silenciosa: sistemas que hacen el trabajo repetitivo y dejan huella de cada paso. El mismo motor técnico, aplicado donde hace más falta.
        </p>
      </div>

      <div class="mt-20 grid gap-8 border-t border-gray-200 pt-16 sm:grid-cols-2 dark:border-white/10">
        <p class="font-heading text-[clamp(24px,2.6vw,34px)] font-semibold leading-snug text-gobierno">
          El gobierno compra orden social.
        </p>
        <p class="font-heading text-[clamp(24px,2.6vw,34px)] font-semibold leading-snug text-empresa sm:text-right">
          La empresa compra eficiencia técnica.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
