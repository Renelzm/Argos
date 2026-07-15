<template>
  <header
    class="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-white/10 dark:bg-gray-900/90 dark:supports-[backdrop-filter]:bg-gray-900/70"
  >
    <nav class="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-6 text-gray-900 dark:text-white">
      <NuxtLink to="/" class="flex items-center gap-2.5">
        <LogoMark :size="36" tone="mono" />
      </NuxtLink>

      <div class="hidden items-center gap-8 md:flex">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="flex items-center gap-2 text-sm font-semibold tracking-tight hover:opacity-70"
        >
          <UIcon :name="link.icon" class="size-[17px]" />
          {{ link.label }}
        </NuxtLink>
      </div>

      <div class="flex items-center gap-1">
        <UColorModeButton />
        <UButton
          icon="i-lucide-menu"
          color="neutral"
          variant="ghost"
          class="md:hidden"
          aria-label="Abrir menú"
          @click="mobileOpen = true"
        />
      </div>
    </nav>

    <USlideover v-model:open="mobileOpen" title="Menú" side="right">
      <template #body>
        <div class="flex flex-col gap-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="flex items-center gap-3 rounded-md px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-white/10"
            @click="mobileOpen = false"
          >
            <UIcon :name="link.icon" class="size-5" />
            {{ link.label }}
          </NuxtLink>
        </div>
      </template>
    </USlideover>
  </header>
</template>

<script setup>
const mobileOpen = ref(false)

const navLinks = [
  { label: 'Sector Público', to: '/gobierno', icon: 'i-lucide-landmark' },
  { label: 'Empresa', to: '/empresas', icon: 'i-lucide-building-2' },
  { label: 'Quiénes somos', to: '/nosotros', icon: 'i-lucide-users' },
  { label: 'Contacto', to: '/contacto', icon: 'i-lucide-mail' },
]
</script>
