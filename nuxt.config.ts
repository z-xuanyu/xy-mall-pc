/*
 * @Author: xuanyu
 * @LastEditors: xuanyu 969718197@qq.com
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-01 11:56:49
 * @LastEditTime: 2023-08-03 10:15:06
 * @Description: nuxtjs 配置文件
 */
const lifecycle = process.env.npm_lifecycle_event;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
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
  modules: ['@nuxtjs/tailwindcss'],
  build: {
    transpile:
      lifecycle === 'build' || lifecycle === 'generate' ? ['element-plus'] : [],
  },
  css: ['~/assets/scss/index.scss'],
};
