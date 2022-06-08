/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-01 11:56:49
 * @LastEditTime: 2022-06-07 16:54:57
 * @Description: Modify here please
 */
import { defineNuxtConfig } from 'nuxt';

const lifecycle = process.env.npm_lifecycle_event;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://at.alicdn.com/t/font_3454956_2feo3spfiou.css',
        },
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss', 'unplugin-icons/nuxt'],
  build: {
    transpile:
      lifecycle === 'build' || lifecycle === 'generate' ? ['element-plus'] : [],
  },
  css: ['~/assets/scss/index.scss'],
  unocss: {
    uno: true,
    attributify: true,
    // preflight: true,
    icons: {
      scale: 1.2,
    },
    shortcuts: [
      [
        'btn',
        'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
      ],
    ],
  },
});
