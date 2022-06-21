<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-01 16:44:44
 * @LastEditTime: 2022-06-21 11:39:47
 * @Description: Modify here please
-->
<script setup lang="ts">
import { ElIcon } from 'element-plus';
import { Search } from '@element-plus/icons-vue';
function jumpLogin() {
  navigateTo({
    path: '/login',
  });
}
</script>

<template>
  <div class="header-wrap">
    <div class="h-[40px] w-full bg-[#282828]">
      <div
        class="w-[1200px] mx-auto flex justify-between items-center text-white"
      >
        <div class="text-xs leading-[40px]">收藏</div>
        <div class="space-x-5 text-xs leading-[40px]">
          <span class="cursor-pointer" @click="jumpLogin">注册/登陆</span>
          <NuxtLink class="text-gray-300 cursor-pointer hover:text-white">
            我的订单
          </NuxtLink>
          <NuxtLink class="text-gray-300 cursor-pointer hover:text-white">
            我的余额
          </NuxtLink>
          <NuxtLink
            class="text-gray-300 cursor-pointer hover:text-white"
            to="/cart"
          >
            我的购物车
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="h-[96px] bg-white">
      <div class="w-[1200px] mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <div class="text-4xl logo leading-[96px]">XYMALL</div>
          <ul class="flex ml-10 space-x-8">
            <li>
              <NuxtLink class="cursor-pointer" to="/"> 首页 </NuxtLink>
            </li>
            <li>产品分类</li>
            <li>限时秒杀</li>
            <li>限时预售</li>
            <li>领优惠券</li>
          </ul>
        </div>
        <!-- 搜索 -->
        <div class="flex items-center pl-2 text-sm border border-red-500">
          <el-icon><Search /></el-icon>
          <input
            class="ml-2 outline-none w-[240px]"
            type="text"
            placeholder="搜索商品"
          />
          <div class="p-2 px-4 text-white bg-red-500 cursor-pointer">搜索</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
