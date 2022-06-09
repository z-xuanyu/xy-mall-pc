<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-01 16:44:52
 * @LastEditTime: 2022-06-09 10:58:06
 * @Description: Modify here please
-->
<script setup lang="ts"></script>

<template>
  <div class="bg-[#f2f2f2] mt-12">
    <div class="w-[1200px] mx-auto">
      <ul class="flex justify-around py-10 border-b">
        <li class="flex items-center">
          <div
            class="flex items-center justify-center w-10 h-10 border border-gray-500 rounded-full"
          >
            <i class="text-xl text-gray-500 iconfont icon-pinzhong"></i>
          </div>
          <p class="ml-3">品种齐全，购物轻松</p>
        </li>
        <li class="flex items-center">
          <div
            class="flex items-center justify-center w-10 h-10 border border-gray-500 rounded-full"
          >
            <i class="text-xl text-gray-500 iconfont icon-zhifa"></i>
          </div>
          <p class="ml-3">多仓直发，极速配送</p>
        </li>
        <li class="flex items-center">
          <div
            class="flex items-center justify-center w-10 h-10 border border-gray-500 rounded-full"
          >
            <i class="text-xl text-gray-500 iconfont icon-hanghuo"></i>
          </div>
          <p class="ml-3">正品行货，精致服务</p>
        </li>
        <li class="flex items-center">
          <div
            class="flex items-center justify-center w-10 h-10 border border-gray-500 rounded-full"
          >
            <i class="text-xl text-gray-500 iconfont icon-dijia"></i>
          </div>
          <p class="ml-3">天天低价，畅选无忧</p>
        </li>
      </ul>
      <div class="py-10 space-y-2 text-sm text-center">
        <p>阿宇微信：969718197 博客地址：https://www.zhouxuanyu.com</p>
        <p>Copyright © 2013-2020 ICP备14011498号-3</p>
      </div>
    </div>
    <!-- 悬浮按钮提示 -->
    <div
      class="w-[70px] h-[222px] shadow bg-white fixed right-0 bottom-[15%] z-50 cursor-pointer p-2 text-gray-600"
    >
      <div class="flex flex-col items-center justify-center h-[74px] border-b">
        <i class="text-2xl iconfont icon-hanghuo"></i>
        <span class="text-xs">关注微信</span>
      </div>
      <div class="flex flex-col items-center justify-center h-[74px] border-b">
        <i class="text-2xl iconfont icon-hanghuo"></i>
        <span class="text-xs">购物车</span>
      </div>
      <div class="flex flex-col items-center justify-center h-[74px]">
        <i class="text-2xl iconfont icon-hanghuo"></i>
        <span class="text-xs">回到顶部</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
