<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-22 09:52:17
 * @LastEditTime: 2022-06-23 15:00:26
 * @Description: 用户订单列表
-->
<script lang="ts">
export default {
  name: 'UserOrder',
};
</script>
<script setup lang="ts">
import { ElPagination } from 'element-plus';

definePageMeta({
  title: '用户订单',
});

const tabs: Array<string> = [
  '全部订单',
  '待付款',
  '待发货',
  '待收货',
  '待评价',
  '已完成',
];

const activeIndex = ref<number>(0);

function handleClick(index: number) {
  activeIndex.value = index;
}

// 跳转订单详情
function jumpOrderDetail() {
  navigateTo({
    path: '/orderDetail',
  });
}
</script>

<template>
  <div class="order-page pl-14">
    <!-- tab -->
    <ul class="flex border-b">
      <li
        v-for="(item, index) in tabs"
        :key="index"
        class="p-4 mr-4 cursor-pointer"
        :class="
          activeIndex === index
            ? 'border-red-500 text-red-500 border-b-2'
            : 'text-gray-500'
        "
        @click="handleClick(index)"
      >
        {{ item }} ({{ 0 }})
      </li>
    </ul>
    <!-- 订单列表 -->
    <div class="list">
      <!-- item -->
      <div class="py-8 pr-8 text-sm">
        <h5 class="flex justify-between">
          <p>
            <span>订单日期: 2022-06-22 14:21:57 </span>
            <span class="ml-4">请在06-22 16:21:57前完成支付!</span>
          </p>
          <span class="text-red-500">待付款</span>
        </h5>
        <!-- 商品信息 -->
        <div
          class="flex items-center justify-between py-4 border-b border-dashed"
        >
          <div class="flex items-center">
            <img
              class="w-[120px] h-[120px] object-cover"
              src="https://qiniu.crmeb.net/attach/2021/08/8c4b6202108091906108489.png?imageView2/2/w/300/h/300"
              alt=""
            />
            <div class="ml-4">
              <p>路思兰黛高支全棉T恤【测试商品】</p>
              <span class="text-gray-400">默认</span>
            </div>
          </div>
          <div class="text-gray-400">
            <p>￥198.00</p>
            <p class="text-right">x1</p>
          </div>
        </div>
        <!-- 订单操作按钮 -->
        <div class="py-4 border-b">
          <div class="text-right">
            <p>
              共1件商品，总金额
              <span class="text-red-500">￥0.01</span> (含运费0.00)
            </p>
            <div class="flex justify-end mt-4 space-x-5">
              <div class="px-4 py-2 border cursor-pointer">取消订单</div>
              <div class="px-4 py-2 text-white bg-red-500 cursor-pointer">
                立即支付
              </div>
              <div
                class="px-4 py-2 text-white bg-red-500 cursor-pointer"
                @click="jumpOrderDetail"
              >
                查看详情
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <div class="flex justify-end px-4">
      <el-pagination background layout="prev, pager, next" :total="1" />
    </div>
  </div>
</template>

<style scoped></style>
