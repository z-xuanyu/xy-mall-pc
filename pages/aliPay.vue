<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-23 14:44:06
 * @LastEditTime: 2022-06-23 14:49:50
 * @Description: 支付宝支付页面
-->

<script lang="ts">
export default {
  name: 'AliPayPage',
};
</script>
<script setup lang="ts">
import { ArrowLeftBold } from '@element-plus/icons-vue';
import { ElIcon } from 'element-plus';

function goBack() {
  navigateTo({
    path: '/payment',
  });
}
</script>

<template>
  <div class="ali-pay-page">
    <!-- 面包屑导航 -->
    <div class="my-4 space-x-2 text-sm">
      <NuxtLink class="text-black" to="/">首页</NuxtLink>
      <NuxtLink class="text-black">></NuxtLink>
      <NuxtLink class="text-black" to="/user">个人中心</NuxtLink>
      <NuxtLink class="text-black">></NuxtLink>
      <NuxtLink class="text-black">确认订单</NuxtLink>
      <NuxtLink class="text-black">></NuxtLink>
      <NuxtLink class="text-gray-400">订单号：wx271280075326881792</NuxtLink>
    </div>
    <div class="p-8 bg-white">
      <div class="flex items-center justify-between">
        <h3>支付宝支付</h3>
        <p class="text-sm text-gray-400">
          应付金额：<span class="text-xl font-bold text-red-500">0.01</span> 元
        </p>
      </div>
      <!-- 扫码 -->
      <div class="flex justify-center space-x-20 my-14">
        <div class="w-[310px]">
          <img
            class="w-full h-[310px] object-cover border mb-4"
            src="../assets/images/qcode.png"
            alt=""
          />
          <div class="h-[72px] flex items-center justify-center bg-[#1676ff]">
            <img
              class="w-[50px] h-[50px] object-cover"
              src="../assets/svg/saoma.svg"
              alt=""
            />
            <div class="ml-8 text-sm text-white">
              <p>请使用支付宝扫一扫</p>
              <p>扫描二维码支付</p>
            </div>
          </div>
        </div>
        <img src="../assets/images/alipay.png" alt="" />
      </div>
      <p class="flex items-center text-blue-500 cursor-pointer" @click="goBack">
        <el-icon><ArrowLeftBold /></el-icon
        ><span class="ml-2">选择其他支付方式</span>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
