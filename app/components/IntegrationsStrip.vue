<template>
  <div>
    <div class="mb-3 text-xs font-semibold tracking-[0.14em] text-gray-400 dark:text-gray-500">{{ label }}</div>
    <p class="sr-only">
      Se integra con WhatsApp, Telegram, Gmail, Google, Gemini, ChatGPT, Microsoft Office, Excel, PDF, n8n, Firebase, MongoDB, PostgreSQL, React, Vue, Node.js, Express y APIs.
    </p>
    <div aria-hidden="true" class="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-400 dark:text-gray-500">
      <UIcon name="i-simple-icons-whatsapp" class="size-4" />
      <UIcon name="i-simple-icons-telegram" class="size-4" />
      <UIcon name="i-simple-icons-gmail" class="size-4" />
      <UIcon name="i-simple-icons-google" class="size-4" />
      <UIcon name="i-simple-icons-googlegemini" class="size-4" />
      <UIcon name="i-simple-icons-openai" class="size-4" />
      <UIcon name="i-simple-icons-microsoftoffice" class="size-4" />
      <UIcon name="i-simple-icons-microsoftexcel" class="size-4" />
      <UIcon name="i-simple-icons-adobeacrobatreader" class="size-4" />
      <UIcon name="i-simple-icons-n8n" class="size-4" />
      <UIcon name="i-simple-icons-firebase" class="size-4" />
      <UIcon name="i-simple-icons-mongodb" class="size-4" />
      <UIcon name="i-simple-icons-postgresql" class="size-4" />
      <UIcon name="i-simple-icons-react" class="size-4" />
      <UIcon name="i-simple-icons-vuedotjs" class="size-4" />
      <UIcon name="i-simple-icons-nodedotjs" class="size-4" />
      <UIcon name="i-simple-icons-express" class="size-4" />
      <UIcon name="i-lucide-braces" class="size-4" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: 'SE INTEGRA CON',
  },
})
</script>
