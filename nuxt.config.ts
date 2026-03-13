// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-30',
  devtools: { enabled: true },

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt'
  ],

  content: {
    highlight: {
      theme: {
        default: 'github-dark',
        dark: 'github-dark',
        light: 'github-light'
      }
    }
  },

  image: {
    quality: 80,
    format: ['webp', 'avif']
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    viewer: true
  },

  app: {
    head: {
      title: 'Software Download',
      meta: [
        { name: 'description', content: 'Download our powerful desktop applications' },
        { name: 'theme-color', content: '#6366f1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  typescript: {
    strict: true,
    typeCheck: false
  }
})