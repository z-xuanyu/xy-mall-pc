<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-23 10:01:59
 * @LastEditTime: 2022-06-23 11:27:22
 * @Description: 订单创建
-->
<script lang="ts">
export default {
  name: 'OrderConfirm',
};
</script>
<script setup lang="ts">
import { ElIcon } from 'element-plus';
import { Check, Plus } from '@element-plus/icons-vue';

function jumpPayment() {
  navigateTo({
    path: '/payment',
  });
}
</script>

<template>
  <div class="order-confirm-page">
    <!-- 面包屑导航 -->
    <div class="py-4 space-x-2 text-sm">
      <NuxtLink class="text-black" to="/">首页</NuxtLink>
      <NuxtLink class="text-black">></NuxtLink>
      <NuxtLink class="text-black" to="/cart">购物车</NuxtLink>
      <NuxtLink class="text-black">></NuxtLink>
      <NuxtLink class="text-gray-400">提交订单</NuxtLink>
    </div>
    <div class="bg-white address">
      <div class="px-8 leading-[64px]">收货地址</div>
      <div class="address-line h-[4px] w-full"></div>
      <div class="flex flex-wrap p-8">
        <div
          class="w-[250px] h-[170px] border border-red-500 relative p-8 text-sm mr-8 cursor-pointer"
        >
          <h6 class="text-base">阿宇</h6>
          <p class="my-1">13800013800</p>
          <p class="text-gray-400">广东珠海市香洲区南屏镇测试服方式方法</p>
          <!-- 默认 -->
          <span
            class="absolute top-0 right-0 px-2 text-sm text-white bg-red-500"
            >默认</span
          >
          <!-- 选中样式 -->
          <span
            class="absolute bottom-0 right-0 inline-block border-[10px] border-r-red-500 border-b-red-500 border-l-transparent border-t-transparent"
          ></span>
          <span class="absolute right-0 -bottom-[6px]">
            <el-icon color="white"><Check /></el-icon>
          </span>
        </div>
        <!-- 添加 -->
        <div
          class="w-[250px] h-[170px] border flex justify-center items-center"
        >
          <div class="text-center cursor-pointer">
            <el-icon :size="30" color="#9CA3AF"><Plus /></el-icon>
            <p class="text-sm text-gray-400">添加地址</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 订单信息 -->
    <div class="pb-4 mt-4 bg-white">
      <div class="px-8 leading-[64px]">订单信息</div>
      <div class="py-4 mx-6 border">
        <!-- 商品信息 -->
        <div
          v-for="item in 3"
          :key="item"
          class="flex items-center justify-between p-4"
        >
          <div class="flex">
            <img
              class="w-[62px] h-[62px] object-cover mr-2"
              src="https://qiniu.crmeb.net/attach/2022/03/11/a3596d975ae2fe61d15d86427a357c67.png?imageView2/2/w/300/h/300"
              alt=""
            />
            <div class="flex flex-col justify-between text-sm">
              <h6>爱马仕（HERMES）</h6>
              <p class="text-gray-400">檀香玛索亚Santal Massoia,100ml</p>
            </div>
          </div>
          <div class="flex items-center">
            <p class="mr-28"><span>￥0.01</span></p>
            <span class="font-bold text-red-500">0.01</span>
          </div>
        </div>
        <!-- 优惠券 -->
        <div
          class="flex items-center justify-between py-6 mx-8 border-t border-b"
        >
          <span>使用优惠券</span>
          <span class="text-red-500">无可使用优惠券</span>
        </div>
        <!-- 积分抵扣 -->
        <div class="flex items-center justify-between py-6 mx-8 border-b">
          <span>积分抵扣</span>
          <span class="text-red-500">无可使用积分</span>
        </div>
        <!-- 买家留言 -->
        <div class="flex py-6 mx-8">
          <span>买家留言</span>
          <textarea
            class="bg-gray-100 border resize-none ml-[80px] outline-none p-4 flex-1 h-[120px]"
            placeholder="填写内容与商家协商并确认，限150字内~"
          ></textarea>
        </div>
      </div>
      <!-- 订单金额信息 -->
      <p class="px-12 mt-8 text-sm text-right">
        <span class="mr-2 text-red-500">2</span>
        <span class="mr-24">件商品，总商品金额:</span>
        <span>¥0.02</span>
      </p>
      <p class="px-12 py-4 text-sm text-right">
        <span class="mr-24">运费:</span>
        <span>¥0.02</span>
      </p>
      <p class="px-12 text-sm text-right">
        <span class="mr-24">会员折扣:</span>
        <span>¥0.02</span>
      </p>
      <!-- 总额 -->
      <div class="mx-8 leading-[70px] text-right bg-gray-100 mt-8 px-4">
        <span class="mr-20 text-sm">应付总额:</span>
        <span class="text-lg font-bold text-red-500">¥0.02</span>
      </div>
      <!-- 提交订单 -->
      <div class="px-8 mt-4 text-right">
        <button
          type="button"
          class="px-12 py-2 text-white bg-red-500 outline-none"
          @click="jumpPayment"
        >
          提交订单
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.address-line {
  background-image: url('../assets/images/address_line.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
