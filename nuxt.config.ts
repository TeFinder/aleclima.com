// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  fonts: {
    families: [
      { name: 'Poppins', provider: 'google' },
    ],
    processCSSVariables: true,
  },
  content: {
    renderer: {
      anchorLinks: false,
    },
  },
  mdc: {
    highlight: {
      theme: {
        default: 'laserwave',
      },
      langs: ['bash'],
    },
  },
  colorMode: {
    classSuffix: '',
  },
})
