<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-08 17:09:19
 * @LastEditTime: 2022-06-09 11:11:18
 * @Description: Modify here please
-->
<script setup lang="ts">
import { ElIcon } from 'element-plus';
import { ArrowRightBold } from '@element-plus/icons-vue';
import GoodsItem from '../common/GoodsItem.vue';

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
      <GoodsItem v-for="(_, index) in list" :key="index"></GoodsItem>
    </div>
  </div>
</template>

<style scoped></style>
