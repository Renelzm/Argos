// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      }
    },
    // Si tu repo es https://github.com/usuario/mi-proyecto
    // Tu baseURL debe ser '/mi-proyecto/'
  //  baseURL: process.env.NODE_ENV === 'production' ? '/' : '/',    
    // Opcional pero recomendado para transiciones suaves en GH Pages
    buildAssetsDir: 'assets', 
  },
   ssr: true,
    components: [
    {
      path: '~/components',
      pathPrefix: false,
    },

  ],

  modules: ['@nuxt/ui', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'light',
    fallback: 'light',
  },
})
