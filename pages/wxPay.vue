<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-23 14:08:48
 * @LastEditTime: 2022-06-23 16:32:47
 * @Description: 微信支付
-->
<script lang="ts">
export default {
  name: 'WxPayPage',
};
</script>
<script setup lang="ts">
import { ArrowLeftBold } from '@element-plus/icons-vue';
import { ElIcon } from 'element-plus';
const router = useRouter();

function goBack() {
  router.back();
}
</script>

<template>
  <div class="wx-pay-page">
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
        <h3>微信支付</h3>
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
          <div class="h-[72px] flex items-center justify-center bg-[#04be02]">
            <img
              class="w-[50px] h-[50px] object-cover"
              src="../assets/svg/saoma.svg"
              alt=""
            />
            <div class="ml-8 text-sm text-white">
              <p>请使用微信扫一扫</p>
              <p>扫描二维码支付</p>
            </div>
          </div>
        </div>
        <img src="../assets/images/phone.png" alt="" />
      </div>
      <p class="flex items-center text-blue-500">
        <el-icon><ArrowLeftBold /></el-icon
        ><span class="ml-2 cursor-pointer" @click="goBack"
          >选择其他支付方式</span
        >
      </p>
    </div>
  </div>
</template>

<style scoped></style>
