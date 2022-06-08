<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-01 12:05:31
 * @LastEditTime: 2022-06-08 15:14:22
 * @Description: Modify here please
-->
<script lang="ts">
export default {
  name: 'HomePage',
};
</script>

<script setup lang="ts">
import HomeBanner from '../components/index/HomeBanner.vue';
import SeckillCard from '../components/index/SeckillCard.vue';
</script>

<template>
  <div class="home-page">
    <!-- 轮播图 -->
    <HomeBanner></HomeBanner>
    <!-- 秒杀 -->
    <SeckillCard></SeckillCard>
  </div>
</template>

<style scoped></style>
