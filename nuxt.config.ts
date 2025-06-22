import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import Aura from '@primeuix/themes/aura';

const __dirname = dirname(fileURLToPath(import.meta.url))

const primeVueComponents = ['Button', 'DataTable', 'Column', 'DynamicDialog', 'Skeleton', 'Paginator', 'Select']

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'netlify',
  },
  modules: [
    '@nuxt/eslint',
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxt-modules/compression',
    '@nuxtjs/robots',
  ],
  primevue: {
    autoImport: false,
    components: {
      include: primeVueComponents,
    },
    options: {
      theme: {
        preset: Aura,
      }
    }
  },
  sitemap: {
    hostname: 'https://scholarship-winners-list.netlify.app',
    routes: async () => {
      return ['/']
    },
  },
  robots: {
    UserAgent: '*',
    Disallow: '/private',
    Allow: '/',
  },
  alias: {
    '@components': resolve(__dirname, 'components'),
    '@models': resolve(__dirname, 'models'),
    '@utils': resolve(__dirname, 'utils'),
    '@composables': resolve(__dirname, 'composables'),
  },
})

