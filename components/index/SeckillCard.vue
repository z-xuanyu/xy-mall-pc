<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-08 15:10:22
 * @LastEditTime: 2022-06-08 16:48:18
 * @Description: 秒杀模块
-->
<script setup lang="ts">
import { ElIcon } from 'element-plus';
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue';
const props = defineProps({
  list: {
    type: Array,
    default: () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
});

let prevIndex = ref<number>(0);
let nextIndex = ref<number>(3);
const seckillListRef = ref<HTMLElement | null>(null);
const seckillListWidth = ref(`${props.list.length * 248}px`);

function onNext() {
  if (nextIndex.value >= props.list.length - 1) {
    return;
  }
  prevIndex.value++;
  nextIndex.value++;
  seckillListRef.value.style.transform = `translateX(${
    -248 * prevIndex.value
  }px)`;
}

function onPrev() {
  if (prevIndex.value <= 0) {
    return;
  }
  prevIndex.value--;
  nextIndex.value--;
  seckillListRef.value.style.transform = `translateX(${
    -248 * prevIndex.value
  }px)`;
}
</script>

<template>
  <div class="flex h-[266px] mt-6">
    <div class="w-[208px] text-center text-white seckill-img">
      <h2 class="mt-10 text-2xl">限时秒杀</h2>
      <p class="mt-4 font-semibold">08:00点场</p>
      <span class="w-6 h-[2px] bg-white inline-block"></span>
      <p class="py-2">距离结束还剩</p>
      <div class="mt-4">
        <span class="inline-block w-6 h-6 bg-black">00</span>:
        <span class="inline-block w-6 h-6 bg-black">00</span>:
        <span class="inline-block w-6 h-6 bg-black">00</span>
      </div>
    </div>
    <div class="relative flex-1 overflow-hidden">
      <div
        ref="seckillListRef"
        class="absolute h-full transition-all bg-white"
        :style="{ width: seckillListWidth }"
      >
        <div
          v-for="(item, index) in list"
          :key="index"
          class="inline-block w-[248px] h-full py-4 px-4"
        >
          <img
            class="w-[164px] h-[164px] object-cover m-auto"
            src="https://demo26.crmeb.net/uploads/attach/2021/12/10/small_738c68638ab29effeff2e98365ec6dd6.jpg"
            alt=""
          />
          <p class="px-4 truncate">
            微星（MSI）GK50Z 机械键盘 红轴 RGB光效 有线 游戏电竞办公键盘 104键
            吃鸡键盘 黑色
          </p>
          <p class="mt-6 text-center">
            <span class="font-semibold text-red-500">￥</span>
            <span class="font-semibold text-red-500">0.01</span>
            <span class="text-gray-400 line-through">￥</span>
            <span class="text-gray-400 line-through">199</span>
          </p>
        </div>
      </div>
      <!-- 上一张 -->
      <div
        class="absolute left-0 flex items-center w-6 h-6 text-white -translate-y-1/2 bg-gray-300 cursor-pointer rounded-r-2xl top-1/2"
        @click="onPrev"
      >
        <el-icon><ArrowLeftBold /></el-icon>
      </div>
      <!-- 下一张 -->
      <div
        class="absolute right-0 flex items-center justify-center w-6 h-6 text-white -translate-y-1/2 bg-gray-300 cursor-pointer rounded-l-2xl top-1/2"
        @click="onNext"
      >
        <el-icon><ArrowRightBold /></el-icon>
      </div>
    </div>
  </div>
</template>

<style scoped>
.seckill-img {
  background-image: url('../../assets/images/skillBg.jpg');
}
</style>
