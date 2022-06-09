<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-01 12:05:31
 * @LastEditTime: 2022-06-09 14:10:09
 * @Description: 首页
-->
<script lang="ts">
export default {
  name: 'HomePage',
};
</script>

<script setup lang="ts">
import HomeBanner from '../components/index/HomeBanner.vue';
import SeckillCard from '../components/index/SeckillCard.vue';
import CategoryListCard from '../components/index/CategoryListCard.vue';
</script>

<template>
  <div class="home-page">
    <!-- 轮播图 -->
    <HomeBanner></HomeBanner>
    <!-- 秒杀 -->
    <SeckillCard></SeckillCard>
    <!-- 分类卡片列表 -->
    <CategoryListCard
      title="官方商城"
      cover="https://demo26.crmeb.net/uploads/attach/2021/11/20211116/824a04a0e24bcb86d13e2a8ddc7d84dd.png"
    ></CategoryListCard>
    <CategoryListCard
      cover="http://demo26.crmeb.net/uploads/attach/2020/10/20201013/d2a316f8e8dd3b8ba4335c8197fb4ff2.png"
      title="电子产品"
    ></CategoryListCard>
    <CategoryListCard
      cover="http://demo26.crmeb.net/uploads/attach/2020/10/20201013/ac3afff89b11579477fec875f215422a.png"
      title="家电"
    ></CategoryListCard>
    <CategoryListCard
      cover="http://demo26.crmeb.net/uploads/attach/2020/10/20201013/9558cf872c5d357db73afc7f2c3b9f77.png"
      title="家居软装"
    ></CategoryListCard>
  </div>
</template>

<style scoped></style>
