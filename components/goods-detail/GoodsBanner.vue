<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-09 14:55:00
 * @LastEditTime: 2022-06-09 15:30:32
 * @Description: 商品详细商品轮播图
-->
<script setup lang="ts">
import { ElIcon } from 'element-plus';
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue';
import type { PropType } from 'vue';

const props = defineProps({
  images: {
    type: Array as PropType<Array<string>>,
    default: () => [
      'https://demo26.crmeb.net/uploads/attach/2021/11/17/6eb4bdf65c80707c4c8cb2997feee2f7.jpg',
      'https://demo26.crmeb.net/uploads/attach/2021/11/17/0620e21c9ff607c4b7c089f18405cdff.jpg',
      'https://demo26.crmeb.net/uploads/attach/2021/11/17/586c9f16ad2336096fdc535bb82ea94b.jpg',
      'https://demo26.crmeb.net/uploads/attach/2021/11/17/2e9793c54a073cc41237eb72b8b2dd1d.jpg',
      'https://demo26.crmeb.net/uploads/attach/2021/11/17/6d75a06ab404b947622082ad40de99f6.jpg',
      'https://demo26.crmeb.net/uploads/attach/2021/11/17/cce28e613874b9a69db84cbee549de42.jpg',
      'https://demo26.crmeb.net/uploads/attach/2021/11/17/6ae554e549d241ec370a1be8501af927.jpg',
      'https://demo26.crmeb.net/uploads/attach/2021/11/17/defaddf1e3961fe4aaf79d8a52d3b591.jpg',
    ],
  },
});

const current = ref<number>(0);
let prevIndex = ref<number>(0);
let nextIndex = ref<number>(3);
const bannerRef = ref<HTMLElement | null>(null);
const bannerBoxWidth = ref(`${props.images.length * 100}px`);

// 主图
const coverImg = computed(() => {
  return props.images[current.value];
});

function onNext() {
  if (nextIndex.value >= props.images.length - 1) {
    return;
  }
  prevIndex.value++;
  nextIndex.value++;
  bannerRef.value.style.transform = `translateX(${-80 * prevIndex.value}px)`;
}

function onPrev() {
  if (prevIndex.value <= 0) {
    return;
  }
  prevIndex.value--;
  nextIndex.value--;
  bannerRef.value.style.transform = `translateX(${-80 * prevIndex.value}px)`;
}
</script>

<template>
  <div class="w-[380px]">
    <img class="w-full h-[380px] object-cover" :src="coverImg" alt="商品主图" />
    <div class="relative mt-3 overflow-hidden banner-swiper">
      <div
        ref="bannerRef"
        class="transition-all pl-[25px]"
        :style="{ width: bannerBoxWidth }"
      >
        <div
          v-for="(item, index) in images"
          :key="index"
          class="w-[70px] h-[70px] inline-block mr-[10px] cursor-pointer"
          :class="current === index ? 'border-2 border-red-500' : ''"
          @mouseenter="current = index"
        >
          <img class="object-cover w-full h-full" :src="item" alt="banner" />
        </div>
      </div>
      <!--上一张 -->
      <div
        class="w-[25px] h-[70px] bg-gray-300 absolute left-0 top-0 flex justify-center items-center cursor-pointer"
        @click="onPrev"
      >
        <el-icon><ArrowLeftBold /></el-icon>
      </div>
      <!-- 下一张 -->
      <div
        class="w-[25px] h-[70px] bg-gray-300 absolute right-0 top-0 flex items-center justify-center cursor-pointer"
        @click="onNext"
      >
        <el-icon><ArrowRightBold /></el-icon>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
