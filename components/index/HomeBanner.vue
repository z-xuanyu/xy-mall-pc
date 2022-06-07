<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-07 15:50:57
 * @LastEditTime: 2022-06-07 16:19:37
 * @Description: Modify here please
-->
<script setup lang="ts">
import { ElCarousel, ElCarouselItem } from 'element-plus';

const bannerList = [
  'http://demo26.crmeb.net/uploads/attach/2020/12/20201202/8c05a033250c435b6405bd200d401fca.png',
  'http://demo26.crmeb.net/uploads/attach/2020/12/20201202/aaafeb8a1bd41c9c7693a06b9b79e48d.png',
  'http://demo26.crmeb.net/uploads/attach/2020/12/20201202/aaafeb8a1bd41c9c7693a06b9b79e48d.png',
];
</script>

<template>
  <el-carousel height="420px">
    <el-carousel-item v-for="item in bannerList" :key="item">
      <img class="w-full" :src="item" alt="banner" />
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped></style>
