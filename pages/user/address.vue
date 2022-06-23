<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-22 10:47:39
 * @LastEditTime: 2022-06-23 10:31:14
 * @Description: Modify here please
-->
<script lang="ts">
export default {
  name: 'UserAddressPaeg',
};
</script>
<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue';
import { ElIcon } from 'element-plus';
</script>

<template>
  <div class="pl-14">
    <div class="leading-[60px] border-b">我的收藏</div>
    <div class="flex flex-wrap py-8">
      <div class="w-[250px] h-[200px] border mr-4 p-6 text-sm relative group">
        <h4>阿宇</h4>
        <p class="my-2 text-xs">13800021934</p>
        <p class="text-gray-400">广东珠海市香洲区南屏镇测试服方式方法</p>
        <!-- 是否默认 -->
        <span class="absolute top-0 right-0 px-4 text-white bg-red-500">
          默认
        </span>
        <!-- 删除、修改地址 -->
        <div
          class="absolute bottom-0 right-0 hidden p-2 space-x-3 text-red-500 group-hover:block"
        >
          <span class="cursor-pointer">修改</span>
          <span class="cursor-pointer">删除</span>
        </div>
      </div>
      <!-- 添加 -->
      <div class="w-[250px] h-[200px] border flex justify-center items-center">
        <div class="text-center cursor-pointer">
          <el-icon :size="30" color="#9CA3AF"><Plus /></el-icon>
          <p class="text-sm text-gray-400">添加地址</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
