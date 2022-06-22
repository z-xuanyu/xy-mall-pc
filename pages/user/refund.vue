<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-22 10:38:31
 * @LastEditTime: 2022-06-22 16:25:03
 * @Description: Modify here please
-->
<script lang="ts">
export default {
  name: 'UserRefundPage',
};
</script>
<script setup lang="ts">
const tabs: Array<string> = ['全部', '申请中', '待退货', '退款中', '已退款'];

const activeIndex = ref<number>(0);

function handleClick(index: number) {
  activeIndex.value = index;
}
</script>

<template>
  <div class="pl-14">
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
  </div>
</template>

<style scoped></style>
