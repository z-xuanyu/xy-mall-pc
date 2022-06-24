<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-24 09:53:40
 * @LastEditTime: 2022-06-24 14:52:26
 * @Description: 产品分类
-->
<script lang="ts">
export default {
  name: 'GoodsCategory',
};
</script>
<script setup lang="ts">
import GoodsNav from '@/components/category/GoodsNav.vue';
import GoodsItem from '@/components/common/GoodsItem.vue';
</script>

<template>
  <div class="category-page">
    <!-- 面包屑导航 -->
    <div class="mt-4 space-x-2 text-sm">
      <NuxtLink class="text-black" to="/">首页</NuxtLink>
      <NuxtLink class="text-gray-400">热门推荐</NuxtLink>
    </div>
    <!-- 分类导航 -->
    <GoodsNav></GoodsNav>
    <!-- 商品列表 -->
    <div class="grid grid-cols-5 gap-4 mt-4">
      <GoodsItem v-for="(_, index) in 10" :key="index"></GoodsItem>
    </div>
  </div>
</template>

<style scoped></style>
