<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-21 11:34:44
 * @LastEditTime: 2022-06-22 10:04:37
 * @Description: 购物车页面
-->
<script lang="ts">
export default {
  name: 'ShoppingCart',
};
</script>
<script setup lang="ts">
import CartGoodsItem from '@/components/cart/CartGoodsItem.vue';
import CustomCheckBox from '@/components/common/CustomCheckBox.vue';

const chebox = ref(false);
</script>

<template>
  <div class="py-4 cart-page">
    <!-- 面包屑导航 -->
    <div class="space-x-2 text-sm">
      <NuxtLink class="text-black" to="/">首页</NuxtLink>
      <NuxtLink class="text-black">></NuxtLink>
      <NuxtLink class="text-gray-400">购物车</NuxtLink>
    </div>
    <!-- 购物车 -->
    <div class="mt-4 bg-white border cart-list border-b-transparent">
      <!-- 头部 -->
      <div
        class="flex justify-between cart-list__header h-[54px] bg-[#f9f9f9] leading-[54px] text-sm"
      >
        <div class="w-[100px] flex items-center pl-6">
          <CustomCheckBox v-model:value="chebox" />
          <span class="ml-2">全选</span>
        </div>
        <span class="inline-block w-[400px] text-center">商品信息</span>
        <span class="inline-block w-[215px] text-center">单价</span>
        <span class="inline-block w-[150px] text-center">数量</span>
        <span class="inline-block w-[270px] text-center">金额</span>
        <span class="flex-1">操作</span>
      </div>
      <!-- 购物车商品列表 -->
      <CartGoodsItem />
      <CartGoodsItem />
      <CartGoodsItem />
    </div>

    <!-- 购物车选择信息 -->
    <div
      class="h-[82px] bg-white mt-16 flex items-center justify-between shadow"
    >
      <span class="ml-8 text-sm"> 已选2件商品 </span>
      <div class="flex items-center">
        <span class="mr-6"
          >合计：<span class="text-xl font-semibold text-red-500"
            >￥1490</span
          ></span
        >
        <span
          class="inline-block text-white bg-red-500 leading-[82px] cursor-pointer px-16"
          >去结算</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
