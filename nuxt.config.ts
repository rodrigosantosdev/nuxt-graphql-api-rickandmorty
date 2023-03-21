import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxtjs/apollo', '@nuxtjs/tailwindcss', '@nuxt/image-edge'],

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://rickandmortyapi.com/graphql'
      }
    },
  },
  
  // usando o modulo de nuxt image, especificar o dominio das imagens externas.
  image: {
    domains: ['rickandmortyapi.com/']
  },
})
