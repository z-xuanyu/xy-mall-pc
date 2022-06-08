<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-08 17:09:19
 * @LastEditTime: 2022-06-08 17:55:16
 * @Description: Modify here please
-->
<script setup lang="ts">
import { ElIcon } from 'element-plus';
import { ArrowRightBold } from '@element-plus/icons-vue';

defineProps({
  title: {
    type: String,
    default: '',
  },
  cover: {
    type: String,
    default: '',
  },
  list: {
    type: Array,
    default: () => [1, 2, 3, 4, 5, 6, 7, 8],
  },
});
</script>

<template>
  <div class="mt-6 category-card">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl">{{ title }}</h1>
      <div
        class="flex items-center p-1 text-sm text-gray-400 border cursor-pointer"
      >
        <span>更多</span>
        <el-icon>
          <ArrowRightBold />
        </el-icon>
      </div>
    </div>
    <div class="grid grid-cols-5 gap-4 mt-4">
      <div class="h-[340px] col-span-2">
        <img class="object-cover w-full h-full" :src="cover" alt="" />
      </div>
      <div
        v-for="(item, index) in list"
        :key="index"
        class="h-[340px] bg-white p-2 hover:shadow-md cursor-pointer"
      >
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
    </div>
  </div>
</template>

<style scoped></style>
