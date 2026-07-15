// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      title: 'Arg.Os — IA para gobierno y empresa',
      meta: [
        { name: 'description', content: 'Soluciones de consultoría y tecnología aplicada a gobiernos y empresas.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Arg.Os' },
        { property: 'og:locale', content: 'es_MX' },
        { property: 'og:url', content: 'https://www.argos.org.mx/' },
        { property: 'og:title', content: 'Arg.Os —  Gobiernos y Empresas' },
        { property: 'og:description', content: 'Soluciones de consultoría y tecnología aplicada a gobiernos y empresas.' },
        { property: 'og:image', content: 'https://www.argos.org.mx/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Arg.Os — Soluciones de consultoría y tecnología aplicada a gobiernos y empresas.' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Arg.Os — Gobiernos y Empresas' },
        { name: 'twitter:description', content: 'Soluciones de consultoría y tecnología aplicada a gobiernos y empresas.' },
        { name: 'twitter:image', content: 'https://www.argos.org.mx/og-image.png' },
      ],
    },
    // Repo: https://github.com/Renelzm/Argos -> GH Pages sirve en /Argos/
    baseURL: process.env.NODE_ENV === 'production' ? '/' : '/',
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
