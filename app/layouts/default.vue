<template>
  <div class="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
    <SiteHeader />
    <main class="flex-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
