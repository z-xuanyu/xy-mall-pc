<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-09 14:12:14
 * @LastEditTime: 2022-06-09 15:04:36
 * @Description: 优质推荐商品卡片
-->
<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  list: {
    type: Array as PropType<Array<string>>,
    default: () => [
      'https://demo26.crmeb.net/uploads/attach/2021/12/10/small_738c68638ab29effeff2e98365ec6dd6.jpg',
      'https://demo26.crmeb.net/uploads/attach/2021/12/10/small_738c68638ab29effeff2e98365ec6dd6.jpg',
      'https://demo26.crmeb.net/uploads/attach/2021/12/10/small_738c68638ab29effeff2e98365ec6dd6.jpg',
      'https://demo26.crmeb.net/uploads/attach/2021/12/10/small_738c68638ab29effeff2e98365ec6dd6.jpg',
      'https://demo26.crmeb.net/uploads/attach/2021/12/10/small_738c68638ab29effeff2e98365ec6dd6.jpg',
      'https://demo26.crmeb.net/uploads/attach/2021/12/10/small_738c68638ab29effeff2e98365ec6dd6.jpg',
      'https://demo26.crmeb.net/uploads/attach/2021/12/10/small_738c68638ab29effeff2e98365ec6dd6.jpg',
      'https://demo26.crmeb.net/uploads/attach/2021/12/10/small_738c68638ab29effeff2e98365ec6dd6.jpg',
    ],
  },
});
</script>

<template>
  <div class="w-[210px] border p-4">
    <div class="flex justify-center">
      <div class="flex items-center space-x-4">
        <span class="inline-block w-[40px] h-[1px] bg-gray-300"></span>
        <h3 class="font-semibold">优质推荐</h3>
        <span class="inline-block w-[40px] h-[1px] bg-gray-300"></span>
      </div>
    </div>
    <!-- 列表 -->
    <div v-for="(item, index) in list" :key="index" class="py-4 border-b">
      <img
        class="w-full"
        :src="item"
        alt="微星（MSI）GK50Z 机械键盘 红轴 RGB光效 有线 游戏电竞办公键盘 104键 吃鸡键盘 黑色"
      />
      <h6 class="text-sm text-gray-400 truncate">
        微星（MSI）GK50Z 机械键盘 红轴 RGB光效 有线 游戏电竞办公键盘 104键
        吃鸡键盘 黑色
      </h6>
      <p class="flex items-center justify-between mt-1">
        <span class="font-semibold text-red-500">￥128</span>
        <span class="text-xs text-gray-400">销量158</span>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
