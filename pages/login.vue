<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-01 18:26:07
 * @LastEditTime: 2022-06-09 14:10:16
 * @Description: 登陆页面
-->
<script lang="ts">
export default {
  name: 'LoginPage',
};
</script>
<script setup lang="ts">
definePageMeta({
  layout: false,
});

function handleLogin() {
  navigateTo({
    path: '/',
  });
}
</script>

<template>
  <div class="login-page">
    <!-- 顶部 -->
    <div class="h-[110px]">
      <div class="w-[1200px] mx-auto flex justify-between">
        <div class="text-2xl logo leading-[110px]">XYMALL</div>
        <div class="flex leading-[110px] space-x-10">
          <div>
            <i class="text-red-500 iconfont icon-pinzhongqiquan"></i>
            <span class="ml-1">品种齐全</span>
          </div>
          <div>
            <i class="text-red-500 iconfont icon-dijiachangxuan"></i>
            <span class="ml-1">低价畅选</span>
          </div>
          <div>
            <i class="text-red-500 iconfont icon-zhengpinhanghuo"></i>
            <span class="ml-1">正品行货</span>
          </div>
        </div>
      </div>
    </div>
    <!-- login form -->
    <div class="login-wrapper h-[600px] flex items-center justify-end">
      <div class="w-[450px] h-[420px] p-10 bg-white mr-[360px] relative">
        <h1 class="mt-8 text-xl text-center">快速登陆/注册</h1>
        <i
          class="absolute text-5xl cursor-pointer top-1 right-1 iconfont icon-weixindenglu1"
        ></i>
        <div class="mt-5 border">
          <span class="p-3 mr-2 border-r">+86</span>
          <input
            class="p-3 outline-none"
            type="text"
            placeholder="请输入您的账号"
          />
        </div>
        <div class="flex mt-5 border">
          <input
            class="flex-1 p-3 outline-none"
            type="text"
            placeholder="请输入您的账号"
          />
          <span class="p-3 text-red-500 border-l cursor-pointer"
            >获取验证码</span
          >
        </div>
        <div
          class="py-3 mt-5 text-center text-white bg-red-500 cursor-pointer"
          @click="handleLogin"
        >
          登陆/注册
        </div>
      </div>
    </div>

    <!-- footer -->
    <p class="text-center mt-[100px] text-gray-400">
      © 2022 Copyright 备案号：粤ICP备16091273号-1 | 工信部
    </p>
  </div>
</template>

<style scoped>
.login-wrapper {
  background-image: url('../assets/images/loginBg.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
