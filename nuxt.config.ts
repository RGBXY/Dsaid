// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["assets/css/main.css"],
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss", "nuxt-phosphor-icons", "@pinia/nuxt"],
  supabase: {
    redirect: false,
  },
  runtimeConfig: {
    public: {
      SUPABASE_KEY: process.env.SUPABASE_KEY,
      SUPABASE_URL: process.env.SUPABASE_URL,
    },
  },
});
