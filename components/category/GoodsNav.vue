<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-24 10:23:58
 * @LastEditTime: 2022-06-24 15:00:59
 * @Description: 商品分类导航
-->
<script setup lang="ts">
const currentHotNav = ref<number>(0);

function handleClickhotNav(index: number) {
  currentHotNav.value = index;
}

const hotNav = [
  '热门推荐',
  '家电电器',
  '居家生活',
  '出行交通',
  '音影设备',
  '美妆个护',
  '餐厨厨房',
  '服饰分类',
  '电子数码',
  '包装',
];
</script>

<template>
  <div class="mt-4">
    <!-- 热门分类 -->
    <div class="h-[50px] bg-white flex justify-between items-center px-8">
      <div class="w-[1050px] overflow-hidden flex space-x-8 text-sm">
        <span
          v-for="(item, index) in hotNav"
          :key="item"
          class="leading-[50px] cursor-pointer hover:text-red-500"
          :class="
            currentHotNav === index
              ? 'border-b-2 border-red-500 text-red-500'
              : ''
          "
          @click="handleClickhotNav(index)"
          >{{ item }}</span
        >
      </div>
      <div class="text-sm">更多分类</div>
    </div>
    <!-- 分类栏目 -->
    <div class="mt-4 text-sm bg-white">
      <div class="flex items-center px-4">
        <span class="mr-8 text-gray-400">分类:</span>
        <div
          class="flex items-center justify-between flex-1 py-6 border-b border-gray-100"
        >
          <div class="space-x-5 cursor-pointe">
            <span class="text-red-500 cursor-pointer">全部</span>
            <span class="cursor-pointer hover:text-red-500">畅销套装</span>
            <span class="cursor-pointer hover:text-red-500">热卖单品</span>
            <span class="cursor-pointer hover:text-red-500">新品上线</span>
            <span class="cursor-pointer hover:text-red-500">浏览量</span>
            <span class="cursor-pointer hover:text-red-500">超值爆款</span>
            <span class="cursor-pointer hover:text-red-500">折扣专区</span>
            <span class="cursor-pointer hover:text-red-500">热门促销</span>
          </div>
        </div>
      </div>
      <div class="flex items-center px-4">
        <span class="mr-8 text-gray-400">品牌:</span>
        <div
          class="flex items-center justify-between flex-1 py-6 border-b border-gray-100"
        >
          <div class="space-x-5 cursor-pointe">
            <span class="text-red-500">全部</span>
            <span>阿宇</span>
          </div>
        </div>
      </div>
      <div class="flex items-center px-4">
        <span class="mr-8 text-gray-400">排序:</span>
        <div class="flex items-center justify-between flex-1 py-6">
          <div class="space-x-5 cursor-pointe">
            <span class="text-red-500">默认</span>
            <span>价格</span>
            <span>上架时间</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
