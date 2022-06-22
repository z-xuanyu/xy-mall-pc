<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-22 10:45:35
 * @LastEditTime: 2022-06-22 16:12:16
 * @Description: Modify here please
-->
<script lang="ts">
export default {
  name: 'UserBalance',
};
</script>
<script setup lang="ts">
const tabs: Array<string> = ['账单明细', '收入明细', '支出明细'];
const activeIndex = ref<number>(0);

function handleClick(index: number) {
  activeIndex.value = index;
}
</script>

<template>
  <div class="pl-14">
    <div class="leading-[60px] border-b">我的余额</div>
    <!-- 余额情况 -->
    <div class="flex w-full py-8">
      <div class="w-1/3">
        <h5 class="text-sm text-gray-400">账户可用余额(元)</h5>
        <p class="mt-3 text-3xl">0.00</p>
      </div>
      <div class="w-1/3">
        <h5 class="text-sm text-gray-400">累计充值(元)：</h5>
        <p class="mt-3 text-3xl">0.00</p>
      </div>
      <div class="w-1/3">
        <h5 class="text-sm text-gray-400">累计消费(元)：</h5>
        <p class="mt-3 text-3xl">0.00</p>
      </div>
    </div>
    <!-- tab -->
    <ul class="flex border-b">
      <li
        v-for="(item, index) in tabs"
        :key="index"
        class="p-4 mr-4 cursor-pointer"
        :class="
          activeIndex === index
            ? 'border-red-500 text-red-500 border-b-2'
            : 'text-gray-500'
        "
        @click="handleClick(index)"
      >
        {{ item }} ({{ 0 }})
      </li>
    </ul>
    <!-- 空数据 -->
    <div class="flex items-center justify-center">
      <div class="mt-32 text-center">
        <img src="../../assets/images/noyue.png" alt="" />
        <p class="text-xs text-gray-400">亲，暂无账单明细哟~</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
