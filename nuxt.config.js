const dev = process.env.NODE_ENV !== 'production'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  dev: dev,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'landingpage',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
    script: [
      {
        src: 'base/js/fbevents.js',
      },
      {
        src: 'base/js/viewport.js',
      },
      {
        src: 'base/js/ladipage.vi.min.js',
      },
      {
        src: 'base/js/ladiPage.js',
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/base/css/font.css',
    '@assets/base/css/main.css',
    '@assets/base/css/mainMedia.css',
    '@assets/base/css/ladipage.min.css',
    '@assets/scss/override.scss',
  ],
  styleResources: {
    scss: ['@assets/scss/main.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios', '~/plugins/i18n.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/style-resources',
    '@nuxtjs/device',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],
  bootstrapVue: {
    icons: true,
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  loading: {
    color: '#607cf4',
    height: '3px',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },
  },
  server: {
    port: process.env.PORT || '3334',
    host: process.env.HOST || '127.0.0.1',
    timing: false,
  },
}
