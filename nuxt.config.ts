// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // modules: ['@pinia/nuxt','@nuxt/image'],
  modules: ['@nuxt/image'],
  image: {
    dir: 'assets/images'
  },
  // pinia: {
  //   storesDirs: ['./stores/**'],
  // },
  "app": {
    baseURL: '/',
    "head": {
      "viewport": "width=500, initial-scale=1",
      "title": "Nuxt3 高效入門全攻略",
      "meta": [
          { "name": "description", "content": "這是 Mike 的 Nuxt3 高效入門全攻略課程" },
          { "property": "og:title", "content": "Nuxt3 高效入門全攻略" },
          { "property": "og:url", "content": "http://localhost:3000/" },
          { "property": "og:description", "content": "這是 Mike 的 Nuxt3 高效入門全攻略課程" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
          async: true,
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NODE_ENV === "development" ? "/_nuxt/assets/images" : "/_nuxt"
    }
  },

})