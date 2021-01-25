import colors from 'vuetify/es5/util/colors';

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - juicytext',
    title: 'juicytext',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Jua:100,300,400,500,700,900',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'codemirror/lib/codemirror.css',
    'codemirror/theme/paraiso-light.css',
    'codemirror/addon/search/matchesonscrollbar.css',
    'codemirror/addon/scroll/simplescrollbars.css',
  ],
  styleResources: {
    scss: [
      './assets/styles/global.scss', // use underscore "_" & also file extension ".scss"
    ],
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/axios-accessor',
    '@/plugins/vee-validate',
    { src: '@/plugins/codemirror', ssr: false },
    { src: '@/plugins/vue-notification', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    'nuxt-typed-vuex',
    '@nuxtjs/dotenv',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],

  router: {
    // middleware: ['auth'],
  },

  dotenv: {
    systemvars: true,
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.BASE_URL,
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        light: {
          primary: '#2471A3',
          accent: '#E64A19',
          secondary: '#7FB3D5',
          info: colors.teal.lighten1,
          warning: '#FF8A65',
          error: '#CB4335',
          success: '#4DB6AC',
          grey: '',
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  server: {
    port: 8000,
  },
  // auth: {
  //   strategies: {
  //     local: {
  //       token: {
  //         property: 'accessToken',
  //         type: 'Bearer',
  //       },
  //       user: {
  //         property: [],
  //         // autoFetch: true
  //       },
  //       endpoints: {
  //         login: { url: '/auth/login', method: 'post', propertyName: 'accessToken' },
  //         logout: { url: '/auth/logout', method: 'get' },
  //         user: { url: '/auth/whoami', method: 'get', property: '' },
  //       },
  //     },
  //   },
  //   redirect: {
  //     logout: '/login',
  //     home: '/',
  //     signup: '/',
  //   },
  //   watchLoggedIn: true,
  //   vuex: false,
  // },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/typed-vuex/, 'vee-validate/dist/rules'],
    extend(config, ctx) {
      config.devtool = ctx.isClient ? 'eval-source-map' : 'inline-source-map';
    },
  },
};
