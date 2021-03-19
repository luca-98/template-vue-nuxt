const environment = process.env.NODE_ENV || 'development'
const envSet = require(`./env.${environment}.js`)
export default {
  mode: 'spa',
  env: envSet,
  server: {
    host: envSet.HOST || '0.0.0.0',
    port: envSet.PORT || '4400', // default: 3000
  },
  head: {
    title: 'Nguyễn Đức Thiện',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'I\'m a based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.',
        keywords: 'luca,front‑end,front‑end developer,developer.web developer,web'
      }
    ],
    script: [{
      src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/js/all.min.js",
      integrity: "sha512-YSdqvJoZr83hj76AIVdOcvLWYMWzy6sJyIMic2aQz5kh2bPTd9dzY3NtdeEAzPp/PhgZqr4aJObB3ym/vsItMg==",
      crossorigin: "anonymous"
    }]
  },

  css: ["assets/custom.scss"],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/axios",
    "~/plugins/api",
    "~/plugins/i18n",
    "~/plugins/components",
    "~/plugins/filters"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    'bootstrap-vue/nuxt',
  ],

  auth: {
    cookie: false,
    redirect: {
      login: '/',
      logout: '/',
      home: '/',
      callback: false
    }
  },

  router: {
    middleware: ['auth']
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
