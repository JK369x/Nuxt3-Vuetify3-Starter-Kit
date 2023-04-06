
export default defineNuxtConfig({
    css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.min.css'],
    build: {
        transpile: ['vuetify']
    },
    modules: [
        '@nuxt/devtools',
        '@pinia/nuxt',
    ],
})
