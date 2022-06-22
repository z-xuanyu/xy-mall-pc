<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-22 10:00:42
 * @LastEditTime: 2022-06-22 17:24:32
 * @Description: Modify here please
-->
<script lang="ts">
export default {
  name: 'OrderPage',
};
</script>
<script setup lang="ts">
const menus = [
  {
    path: '/user',
    name: '账号管理',
  },
  {
    path: '/user/order',
    name: '我的订单',
  },
  {
    path: '/user/refund',
    name: '售后/退款',
  },
  {
    path: '/user/message',
    name: '站内信',
  },
  {
    path: '/user/coupon',
    name: '我的优惠券',
  },
  {
    path: '/user/balance',
    name: '我的余额',
  },
  {
    path: '/user/collect',
    name: '我的收藏',
  },
  {
    path: '/user/address',
    name: '地址管理',
  },
  {
    path: '/user/receive',
    name: '领取优惠券',
  },
];

const route = useRoute();
const activePath = ref(route.fullPath);

function handleClick(path: string) {
  activePath.value = path;
}

// 当前路由导航文本
const currentNavText = computed(
  () => menus.find((item) => item.path === activePath.value).name,
);
</script>

<template>
  <div class="user-page">
    <!-- 面包屑导航 -->
    <div class="py-8 space-x-2 text-sm">
      <NuxtLink class="text-black" to="/">首页</NuxtLink>
      <NuxtLink class="text-black">></NuxtLink>
      <NuxtLink class="text-black" to="/user" @click="activePath = '/user'"
        >个人中心</NuxtLink
      >
      <NuxtLink class="text-gray-400">{{ currentNavText }}</NuxtLink>
    </div>
    <!-- 用户中心 -->
    <div class="flex">
      <div class="w-[180px] mr-3">
        <!-- 头像 -->
        <div class="h-[170px] bg-white mb-3 flex justify-center items-center">
          <div class="text-center">
            <img
              class="w-[52px] h-[52px] rounded-full object-cover"
              src="https://thirdwx.qlogo.cn/mmopen/vi_32/TaicpR2t6Q24ibpj9aJJhUOlvAwJtPXyOmOmy5NwzmPeuaFfAHo3WH6ODfzSViaSJtrj4sGGxBTxsmmdYH6nJ4PXQ/132"
              alt="用户头像"
            />
            <h4 class="mt-4 text-sm">阿宇</h4>
          </div>
        </div>
        <!-- 菜单导航栏 -->
        <div class="bg-white">
          <ul class="py-10">
            <li
              v-for="(item, index) in menus"
              :key="index"
              class="mb-8 text-center border-l-2"
              :class="
                activePath == item.path
                  ? 'border-red-500'
                  : 'border-transparent'
              "
            >
              <NuxtLink
                class="text-sm cursor-pointer"
                :class="
                  activePath == item.path ? 'text-red-500' : 'text-gray-700'
                "
                :to="item.path"
                @click="handleClick(item.path)"
                >{{ item.name }}</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="flex-1 bg-white">
        <NuxtPage></NuxtPage>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
