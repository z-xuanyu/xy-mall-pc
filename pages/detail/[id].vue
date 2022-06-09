<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-09 11:22:36
 * @LastEditTime: 2022-06-09 14:38:22
 * @Description: 商品详情页
-->

<script lang="ts">
export default {
  name: 'GoodsDetailPage',
};
</script>
<script setup lang="ts">
import RecommendGoods from '../../components/goods-detail/RecommendGoods.vue';
import GoodsInfoCard from '../../components/goods-detail/GoodsInfoCard.vue';
const route = useRoute();
const id = route.params.id;
console.log(id);
</script>

<template>
  <div class="flex my-8 bg-white">
    <div class="flex-1">
      <GoodsInfoCard></GoodsInfoCard>
    </div>
    <div>
      <RecommendGoods></RecommendGoods>
    </div>
  </div>
</template>

<style scoped></style>
