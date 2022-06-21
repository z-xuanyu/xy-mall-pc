<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-09 14:13:10
 * @LastEditTime: 2022-06-21 10:35:26
 * @Description: Modify here please
-->
<script setup lang="ts">
import GoodsBanner from './GoodsBanner.vue';
import { ElInputNumber } from 'element-plus';
import DetailContent from './DetailContent.vue';

const num = ref(1);

function handleChange() {
  console.log(48878);
}
</script>

<template>
  <div class="goods-detail-page">
    <div class="flex">
      <!-- 商品banner图 -->
      <GoodsBanner></GoodsBanner>
      <!-- 基本信息 -->
      <div class="mx-10">
        <h1>
          爱奇艺智能 奇遇LT01 投影仪 家用卧室超高清手机便携投影机（4K超清
          支持侧投 手机同屏 华为一碰即投）
        </h1>

        <!-- 价格 -->
        <div
          class="h-[78px] price-bg flex items-center justify-between w-full mt-5 p-2 text-white"
        >
          <div class="ml-4">
            <s class="text-xs">原价: ￥1299.00</s>
            <div><span class="text-2xl font-semibold">￥1199.00</span></div>
          </div>
          <div class="flex flex-col pl-4 border-l">
            <span>17</span>
            <span>销量</span>
          </div>
        </div>
        <!-- 优惠卷 -->
        <div class="flex p-4 bg-gray-100">
          <span class="w-[60px] text-xs text-gray-500">优惠券</span>
          <div class="flex-1">
            <!-- 卷卡片 -->
            <div v-for="item in 3" :key="item" class="flex items-center mb-2">
              <div class="w-[165px] h-[24px] coupon-bg flex items-center">
                <span class="text-xs text-white w-[65px] text-center"
                  >通用卷</span
                >
                <span class="flex-1 text-xs text-center text-red-500"
                  >满0减50</span
                >
              </div>
              <span class="flex-1 ml-3 text-xs text-gray-400">不限时</span>
              <NuxtLink class="text-xs text-red-500 underline"> 领取 </NuxtLink>
            </div>
          </div>
        </div>
        <!-- 规格 -->
        <div class="flex p-4 mt-4">
          <span class="text-xs w-[60px]">颜色</span>
          <div class="flex flex-wrap flex-1">
            <div
              class="p-2 mb-3 mr-3 text-xs text-red-500 border border-red-500 cursor-pointer"
            >
              标配版（真1080P全高清画质）
            </div>
            <div
              v-for="item in 10"
              :key="item"
              class="p-2 mb-3 mr-3 text-xs border border-gray-300 cursor-pointer hover:text-red-500 hover:border-red-500"
            >
              高配版（高至4K 超清画质）
            </div>
          </div>
        </div>
        <!-- 数量 -->
        <div class="flex p-4">
          <span class="text-xs w-[60px]">数量</span>
          <div>
            <el-input-number
              v-model="num"
              size="large"
              :min="1"
              :max="10"
              @change="handleChange"
            />
            <span class="ml-2 text-xs align-bottom">(库存159件)</span>
          </div>
        </div>
        <!-- 购买按钮 -->
        <div class="flex pl-[75px] mt-4 space-x-3">
          <div class="px-10 py-3 text-white bg-red-500 cursor-pointer">
            加入购物车
          </div>
          <div
            class="px-10 py-3 text-red-500 border border-red-500 cursor-pointer"
          >
            立即购买
          </div>
        </div>
      </div>
    </div>
    <!-- 详情内容 -->
    <DetailContent></DetailContent>
  </div>
</template>

<style scoped>
.el-input__wrapper.is-focus {
  border-color: #ff4500;
}
.price-bg {
  background-image: url('../../assets/images/money_back.png');
  background-size: 100% 100%;
}
.coupon-bg {
  background-image: url('../../assets/images/coupon_bg.png');
  background-size: 100% 100%;
}
</style>
