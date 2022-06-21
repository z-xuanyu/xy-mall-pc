<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-09 11:00:52
 * @LastEditTime: 2022-06-21 12:13:55
 * @Description: 公共商品组件
-->
<script setup lang="ts"></script>

<template>
  <NuxtLink to="/detail/123">
    <div class="h-[340px] bg-white p-2 hover:shadow-md cursor-pointer">
      <img
        class="w-[192px] h-[192px] object-cover m-auto"
        src="https://demo26.crmeb.net/uploads/attach/2021/11/20211115/big_bb948cb243c5de122bb16357675a675b.png"
        alt=""
      />
      <p class="px-2 mt-3">
        <span class="text-xl font-semibold text-red-500">￥599.00</span>
        <s class="text-sm text-gray-400">￥629.00</s>
      </p>
      <h3 class="px-2 my-3 text-sm text-gray-500">
        Vans范斯官方 水兵月蓝侧边条纹复古男鞋女鞋
      </h3>
      <p class="flex items-center justify-between text-xs text-gray-400">
        <span>1063人购买</span>
        <span>5.0分好评</span>
      </p>
    </div>
  </NuxtLink>
</template>

<style scoped></style>
