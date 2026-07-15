<template>
  <footer class="border-t border-gray-200 bg-white dark:border-white/10 dark:bg-gray-900">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
      <div>
        <NuxtLink to="/" class="inline-flex">
          <LogoMark :size="24" tone="color" wordmark wordmark-variant="footer" wordmark-size="19px" gap="4px" />
        </NuxtLink>
        <p class="mt-3 max-w-xs text-[14px] leading-relaxed text-gray-500 dark:text-gray-400">
          Soluciones de tecnología con inteligencia artificial aplicada a gobiernos y empresas. No vendemos software suelto: desplegamos un ecosistema.
        </p>
      </div>

      <div>
        <div class="mb-3 text-xs font-semibold tracking-[0.14em] text-gray-400 dark:text-gray-500">PLATAFORMA</div>
        <div class="flex flex-col gap-2">
          <NuxtLink to="/gobierno" class="text-[14px] text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Sector Público</NuxtLink>
          <NuxtLink to="/empresas" class="text-[14px] text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Empresa Privada</NuxtLink>
        </div>
      </div>

      <div>
        <div class="mb-3 text-xs font-semibold tracking-[0.14em] text-gray-400 dark:text-gray-500">CONTACTO</div>
        <div class="flex flex-col gap-2">
          <a href="mailto:argos.webservices@gmail.com" class="text-[14px] text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">argos.webservices@gmail.com</a>
          <NuxtLink to="/contacto" class="text-[14px] text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Más formas de contacto →</NuxtLink>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-6 pb-6">
      <div class="border-t border-gray-200 pt-4 text-[12.5px] text-gray-400 dark:border-white/10 dark:text-gray-500">
        © 2026 Arg.Os — Todos los derechos reservados.
      </div>
    </div>
  </footer>
</template>
