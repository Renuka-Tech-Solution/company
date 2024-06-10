// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      script:[
        { tagPosition: 'bodyClose', src: '/assets/js/custom.js' }
      ]
    }
  },
  devtools: { enabled: true },
  modules: ["@nuxt/image", "nuxt-gtag"],
  gtag: {
    id: 'G-QS8JJ2RVES'
  }
})