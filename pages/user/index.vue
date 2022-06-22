<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-21 11:49:25
 * @LastEditTime: 2022-06-22 11:21:22
 * @Description: Modify here please
-->
<script lang="ts">
export default {
  name: 'UserPageIndex',
};
</script>
<script setup lang="ts"></script>

<template>
  <div class="pl-14">
    <div class="leading-[60px] border-b">账号管理</div>
    <div class="py-8 mr-14">
      <div>
        <h6>我的信息</h6>
        <!-- 头像 -->
        <div
          class="flex items-center justify-between py-4 border-b border-dashed"
        >
          <div class="flex items-center">
            <span class="mr-4 text-sm text-gray-500">我的头像:</span>
            <img
              class="w-[80px] h-[80px] object-cover rounded-full"
              src="https://thirdwx.qlogo.cn/mmopen/vi_32/TaicpR2t6Q24ibpj9aJJhUOlvAwJtPXyOmOmy5NwzmPeuaFfAHo3WH6ODfzSViaSJtrj4sGGxBTxsmmdYH6nJ4PXQ/132"
              alt=""
            />
          </div>
          <span class="text-sm text-red-500 cursor-pointer">修改</span>
        </div>
        <!-- 昵称 -->
        <div
          class="flex items-center justify-between py-8 text-sm border-b border-dashed"
        >
          <div>
            <span class="mr-4 text-gray-500">我的昵称：</span>
            <span>阿宇</span>
          </div>
          <span class="text-red-500 cursor-pointer">修改</span>
        </div>
        <!-- 手机号 -->
        <div
          class="flex items-center justify-between py-8 text-sm border-b border-dashed"
        >
          <div>
            <span class="mr-4 text-gray-500">手机号：</span>
            <span>13178592410</span>
          </div>
          <span class="text-red-500 cursor-pointer">修改</span>
        </div>
        <!-- 我的id -->
        <div class="py-8 text-sm border-b border-dashed">
          <span class="mr-4 text-gray-500">我的ID：</span>
          <span>1248</span>
        </div>
        <!-- 密码 -->
        <div
          class="flex items-center justify-between py-8 text-sm border-b border-dashed"
        >
          <div>
            <span class="mr-4 text-gray-500">密码设置：</span>
            <span>*******</span>
          </div>
          <span class="text-red-500 cursor-pointer">修改密码</span>
        </div>
        <!-- 退出登陆按钮 -->
        <div class="flex justify-end mt-8">
          <div
            class="w-[120px] text-center cursor-pointer bg-red-500 text-white py-2"
          >
            退出登录
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
