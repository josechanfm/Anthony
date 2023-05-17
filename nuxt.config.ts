// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    apiSecret: "SBBBBBBB",
    public: {
      aeemmUrl: "",
    },
  },
});
