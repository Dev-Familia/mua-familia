import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@vueuse/nuxt', 'nuxt-windicss'],
  typescript: {
    strict: true,
  },
  windicss: {
    analyze: true,
  },
})