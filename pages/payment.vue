<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-23 11:23:45
 * @LastEditTime: 2022-06-23 14:47:56
 * @Description: 订单确认
-->
<script lang="ts">
export default {
  name: 'OrderPayment',
};
</script>
<script setup lang="ts">
import { ElIcon } from 'element-plus';
import { Check } from '@element-plus/icons-vue';

const currentPayType = ref<number>(1);

function jumpPay() {
  // 微信支付
  if (currentPayType.value === 2) {
    navigateTo({
      path: '/wxPay',
    });
  }
  // 支付宝支付
  if (currentPayType.value === 3) {
    navigateTo({
      path: '/aliPay',
    });
  }
}
</script>

<template>
  <div class="payment-page">
    <!-- 面包屑导航 -->
    <div class="mt-4 space-x-2 text-sm">
      <NuxtLink class="text-black" to="/">首页</NuxtLink>
      <NuxtLink class="text-black">></NuxtLink>
      <NuxtLink class="text-black" to="/user">个人中心</NuxtLink>
      <NuxtLink class="text-black">></NuxtLink>
      <NuxtLink class="text-gray-400">确认订单</NuxtLink>
    </div>

    <div class="h-[160px] w-full order-bg px-8 pt-[55px] text-white">
      <h4 class="text-3xl">订单提交成功！去付款咯~</h4>
      <p class="mt-4 text-sm">剩余时间： 01 小时 43 分钟 20 秒</p>
    </div>
    <div class="p-8 space-y-3 bg-white">
      <p>订单编号：wx271237608766439424</p>
      <p>订单价格：0.02元</p>
      <p>收货信息：阿宇 13800021934 广东 珠海市 香洲区 南屏镇 测试服方式方法</p>
      <p>商品名称：爱马仕（HERMES）</p>
    </div>
    <!-- 选择支付方式 -->
    <div class="mt-4 bg-white">
      <div class="leading-[57px] px-8 border-b border-dashed">
        选择以下支付方式
      </div>
      <div class="flex flex-wrap p-8">
        <!-- 余额支付 -->
        <div
          class="w-[210px] border h-[86px] relative cursor-pointer mr-6"
          :class="currentPayType === 1 ? 'border-red-500 ' : ''"
          @click="currentPayType = 1"
        >
          <div class="flex items-center justify-center mt-[18px]">
            <img
              class="w-[45px] h-[45px] object-contain"
              src="../assets/svg/qianbao.svg"
              alt=""
            />
            <div class="ml-2">
              <span class="block">余额支付</span>
              <span class="block text-sm text-gray-400">余额：0.00</span>
            </div>
          </div>
          <!-- 选中样式 -->
          <template v-if="currentPayType === 1">
            <span
              class="absolute bottom-0 right-0 inline-block border-[10px] border-r-red-500 border-b-red-500 border-l-transparent border-t-transparent"
            ></span>
            <span class="absolute right-0 -bottom-[6px]">
              <el-icon color="white"><Check /></el-icon> </span
          ></template>
        </div>
        <!-- 微信支付 -->
        <div
          class="border w-[210px] h-[86px] relative cursor-pointer mr-6"
          :class="currentPayType === 2 ? 'border-red-500 ' : ''"
          @click="currentPayType = 2"
        >
          <div class="flex items-center justify-center mt-[20px]">
            <img
              class="w-[40px] h-[40px] object-contain"
              src="../assets/svg/weixinpay.svg"
              alt=""
            />
            <div class="ml-2">
              <span class="block">微信支付</span>
            </div>
          </div>
          <!-- 选中样式 -->
          <template v-if="currentPayType === 2">
            <span
              class="absolute bottom-0 right-0 inline-block border-[10px] border-r-red-500 border-b-red-500 border-l-transparent border-t-transparent"
            ></span>
            <span class="absolute right-0 -bottom-[6px]">
              <el-icon color="white"><Check /></el-icon> </span
          ></template>
        </div>
        <!-- 支付宝支付 -->
        <div
          class="border w-[210px] h-[86px] relative cursor-pointer"
          :class="currentPayType === 3 ? 'border-red-500 ' : ''"
          @click="currentPayType = 3"
        >
          <div class="flex items-center justify-center mt-[26px]">
            <img
              class="w-[30px] h-[30px] object-contain"
              src="../assets/svg/zhifubao.svg"
              alt=""
            />
            <div class="ml-2">
              <span class="block">支付宝支付</span>
            </div>
          </div>
          <!-- 选中样式 -->
          <template v-if="currentPayType === 3">
            <span
              class="absolute bottom-0 right-0 inline-block border-[10px] border-r-red-500 border-b-red-500 border-l-transparent border-t-transparent"
            ></span>
            <span class="absolute right-0 -bottom-[6px]">
              <el-icon color="white"><Check /></el-icon> </span
          ></template>
        </div>
      </div>
      <!-- 支付按钮 -->
      <div class="px-12 py-8 mt-8 text-right">
        <button
          type="button"
          class="px-12 py-2 text-white bg-red-500 outline-none"
          @click="jumpPay"
        >
          去支付
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.order-bg {
  background-image: url('../assets/images/orderBg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
