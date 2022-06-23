<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-23 14:57:38
 * @LastEditTime: 2022-06-23 16:28:52
 * @Description: Modify here please
-->
<script lang="ts">
export default {
  name: 'OrderDetail',
};
</script>
<script setup lang="ts">
import BasicStep from '@/components/common/Step.vue';

function jumpPayment() {
  navigateTo({
    path: '/payment',
  });
}
</script>

<template>
  <div class="order-detail">
    <!-- 面包屑导航 -->
    <div class="p-4 mt-4 text-sm bg-white pace-x-2 m">
      <NuxtLink class="text-black" to="/">首页</NuxtLink>
      <NuxtLink class="text-black">></NuxtLink>
      <NuxtLink class="text-black" to="/user">个人中心</NuxtLink>
      <NuxtLink class="text-black">></NuxtLink>
      <NuxtLink class="text-gray-400">订单详情</NuxtLink>
    </div>
    <!-- 订单状态 -->
    <div class="mt-4 bg-white">
      <h4 class="p-4 border-b border-dashed">订单状态: 待支付</h4>
      <BasicStep />
    </div>
    <!-- 订单信息 -->
    <div class="mt-4 bg-white">
      <h4 class="p-4 border-b border-dashed">订单信息</h4>
      <div class="p-4 space-y-3">
        <p>订单编号： wx271301636926734336</p>
        <p>订单日期： 2022-06-23</p>
        <p>支付状态： 未支付</p>
        <p>支付方式： 微信</p>
        <p>订单金额： <span class="text-red-500">￥0.01</span></p>
      </div>
    </div>
    <!-- 收货信息 -->
    <div class="mt-4 bg-white">
      <h4 class="p-4 border-b border-dashed">收货信息</h4>
      <div class="p-4 space-y-3">
        <p>收货人： 阿宇</p>
        <p>联系电话： 13800021934</p>
        <p>收货地址： 广东 珠海市 香洲区 南屏镇 测试服方式方法</p>
      </div>
    </div>
    <!-- 商品信息 -->
    <div class="mt-4 bg-white">
      <h4 class="p-4 border-b border-dashed">商品信息</h4>
      <div class="p-4 border-b border-dashed">
        <div class="flex items-center">
          <img
            class="w-[86px] h-[86px] object-cover"
            src="https://qiniu.crmeb.net/attach/2022/03/04/aa26ad994559adfa2510b3eca6f57b69.jpg?imageView2/2/w/300/h/300"
            alt=""
          />
          <div class="ml-4 space-y-1 text-sm">
            <h6>万仟堂 如意双喜·随手礼 茶具套装 朱漆釉</h6>
            <p class="text-xs text-gray-400">默认</p>
            <p>￥0.01</p>
          </div>
          <span class="text-sm text-gray-400 ml-60">x1</span>
        </div>
      </div>
      <!-- 总计 -->
      <div class="flex items-center justify-between p-4 py-8">
        <p>
          共1件商品，订单总金额为：<span class="text-xl font-bold text-red-500"
            >￥0.01</span
          >
        </p>
        <div class="space-x-3">
          <button
            type="button"
            class="px-6 py-2 border border-gray-400 outline-none"
          >
            取消订单
          </button>
          <button
            type="button"
            class="px-6 py-2 border border-gray-400 outline-none"
          >
            联系客服
          </button>
          <button
            type="button"
            class="px-6 py-2 text-white bg-red-500 outline-none"
            @click="jumpPayment"
          >
            立即支付
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
