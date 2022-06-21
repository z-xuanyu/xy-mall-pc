<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-21 10:33:45
 * @LastEditTime: 2022-06-21 11:23:08
 * @Description: Modify here please
-->
<script setup lang="ts">
const tabActive = ref<number>(1);

function changeTab(item: number) {
  tabActive.value = item;
}
</script>

<template>
  <div class="pr-10 mt-20 content-wrapper">
    <div
      class="content-header leading-[56px] bg-[#f7f7f7] flex justify-between"
    >
      <!-- tab切换 -->
      <div class="flex tab">
        <div
          v-for="item in 2"
          :key="item"
          class="relative px-8 cursor-pointer tab-item"
          :class="item === tabActive ? 'border-t-2 border-red-500' : ''"
          @click="changeTab(item)"
        >
          <span
            class="text-sm"
            :class="item === tabActive ? 'text-red-500' : ''"
            >{{ item === 1 ? '产品详情' : '累计评论(0)' }}</span
          >
          <span
            v-show="item === tabActive"
            class="absolute inline-block h-6 border top-[15px]"
            :class="item === 1 ? 'right-0' : 'left-0'"
          ></span>
          <!-- 三角 -->
          <span
            v-show="item === tabActive"
            class="border-[6px] absolute top-0 left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-red-500"
          ></span>
        </div>
      </div>
      <!-- 手机扫码 -->
      <div
        class="bg-[#ededed] w-[160px] flex justify-center items-center space-x-2 cursor-pointer"
      >
        <img class="w-[20px]" src="../../assets/svg/saoma.svg" alt="" />
        <span class="text-sm">手机扫码</span>
        <span
          class="inline-block border-[7px] border-t-gray-300 border-l-transparent border-r-transparent border-b-transparent"
        ></span>
      </div>
    </div>
    <img
      class="w-full"
      src="https://qiniu.crmeb.net/attach/2021/12/18/d53799a1bd52137f1ebad78b8c65a601.jpg"
      alt=""
    />
    <img
      class="w-full"
      src="https://qiniu.crmeb.net/attach/2021/12/18/c715de99ddc3ce132ff8d2c1eac364c3.jpg"
      alt=""
    />
    <img
      class="w-full"
      src="https://qiniu.crmeb.net/attach/2021/12/18/35640eb8d8b16b12d1c3aa665f90b740.jpg"
      alt=""
    />
  </div>
</template>

<style scoped></style>
