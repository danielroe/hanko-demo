// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/hanko", "@nuxt/ui", "@nuxtjs/google-fonts"],
  googleFonts: {
    download: true,
    families: {
      Inter: true,
    },
  },
  hanko: {
    apiURL: 'https://6d1c89a0-0395-4f25-82bb-d62c342c6da7.hanko.io'
  },
  routeRules: {
    '/': { prerender: true },
    '/auth/**': { prerender: false },
  }
})
