<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-22 10:44:13
 * @LastEditTime: 2022-06-22 15:43:50
 * @Description: Modify here please
-->
<script lang="ts">
export default {
  name: 'UserCouponPage',
};
</script>
<script setup lang="ts">
const tabs: Array<string> = ['未使用', '已使用/已过期'];
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
    <!-- list -->
    <div class="flex flex-wrap py-8">
      <!-- 优惠券卡片 -->
      <div
        v-for="item in 4"
        :key="item"
        class="w-[300px] h-[130px] cunpon-bg flex justify-between pl-4 mr-4 mb-4"
      >
        <div class="flex-1">
          <span class="p-1 text-sm text-red-500 label">通用券</span>
          <div class="flex py-4">
            <div class="text-red-500">
              <span>￥</span>
              <span class="text-[28px] font-bold">50</span>
            </div>
            <div class="ml-4">
              <p>通用不限</p>
              <p class="text-sm text-gray-400">无门槛券</p>
            </div>
          </div>
          <p class="text-xs text-gray-400">有效时间：2022/05/27-2022/08/25</p>
        </div>
        <div class="w-[20px] mx-auto mr-3 mt-6 text-white cursor-pointer">
          可使用
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cunpon-bg {
  background-image: url('../../assets/images/coupon-back1.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-shadow: 0 3px 20px rgb(0 0 0 / 8%);
}
.cunpon-bg .label {
  background-color: rgba(233, 51, 35, 0.1);
}
</style>
