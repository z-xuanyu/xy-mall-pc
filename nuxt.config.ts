/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-01 11:56:49
 * @LastEditTime: 2022-06-01 17:56:02
 * @Description: Modify here please
 */
import { defineNuxtConfig } from 'nuxt';

const lifecycle = process.env.npm_lifecycle_event;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
