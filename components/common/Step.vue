<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-23 15:09:12
 * @LastEditTime: 2022-06-23 16:07:25
 * @Description: 订单状态步骤组件
-->
<script lang="ts">
export default {
  name: 'BasicStep',
};
</script>
<script setup lang="ts">
const currentStep = ref<number>(1);

const list = ['待付款', '待发货', '待收货', '待评价', '已完成'];
</script>

<template>
  <div class="h-[120px] mt-8">
    <ul class="flex justify-between px-[108px]">
      <li
        v-for="item in 5"
        :key="item"
        class="relative border rounded-full h-[18px] w-[18px]"
      >
        <!-- 线 -->
        <div
          v-if="item !== 5"
          class="w-[226px] h-[4px] bg-gray-300 absolute top-1/2 left-[16px] -translate-y-1/2"
        ></div>
        <!-- 当前步骤圆圈 箭头 -->
        <div
          v-if="currentStep === item"
          class="w-[40px] h-[40px] flex items-center justify-center bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-red-500 rounded-full"
        >
          <i class="text-red-500 ext-lg iconfont icon-zhifa"></i>
          <div
            class="w-[80px] h-[16px] bg-red-500 left-full top-1/2 -translate-y-1/2 absolute after:left-full after:content-[''] after:absolute after:border-[8px] after:border-l-red-500 after:border-t-transparent after:border-b-transparent after:border-r-transparent"
          ></div>
        </div>

        <!-- 步骤文本 -->
        <div
          class="absolute top-[42px] left-1/2 -translate-x-1/2 w-[100px] text-center"
        >
          <p :class="currentStep === item ? 'text-red-500' : ''">
            {{ list[item - 1] }}
          </p>
          <p class="mt-1 text-xs text-gray-400">2022-06-23</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
