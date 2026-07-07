<template>
  <footer id="contacto" class="border-t border-gray-200 bg-white dark:border-white/10 dark:bg-gray-900">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
      <div>
        <NuxtLink to="/" class="inline-flex">
          <LogoMark :size="26" tone="color" wordmark wordmark-variant="footer" wordmark-size="20px" gap="4px" />
        </NuxtLink>
        <p class="mt-5 max-w-xs text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
          Soluciones de tecnología con inteligencia artificial aplicada a gobiernos y empresas. No vendemos software suelto: desplegamos un ecosistema.
        </p>
      </div>

      <div>
        <div class="mb-4 text-xs font-semibold tracking-[0.14em] text-gray-400 dark:text-gray-500">PLATAFORMA</div>
        <div class="flex flex-col gap-3">
          <NuxtLink to="/gobierno" class="text-[14.5px] text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Sector Público</NuxtLink>
          <NuxtLink to="/empresas" class="text-[14.5px] text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Empresa Privada</NuxtLink>
        </div>
      </div>

      <div>
        <div class="mb-4 text-xs font-semibold tracking-[0.14em] text-gray-400 dark:text-gray-500">CONTACTO</div>
        <div class="flex flex-col gap-3">
          <a href="mailto:contacto@arg.os" class="text-[14.5px] text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">contacto@arg.os</a>
          <a href="#contacto" class="text-[14.5px] text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Agendar demostración</a>
        </div>
      </div>

      <div>
        <div class="mb-4 text-xs font-semibold tracking-[0.14em] text-gray-400 dark:text-gray-500">INSTITUCIONAL</div>
        <div class="flex flex-col gap-3">
          <a href="#contacto" class="text-[14.5px] text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Políticas</a>
          <a href="#contacto" class="text-[14.5px] text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Boletín informativo</a>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-6 pb-10">
      <div class="border-t border-gray-200 pt-6 text-[13px] text-gray-400 dark:border-white/10 dark:text-gray-500">
        © 2026 Arg.Os — Todos los derechos reservados.
      </div>
    </div>
  </footer>
</template>
