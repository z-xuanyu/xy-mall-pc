<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-21 15:07:30
 * @LastEditTime: 2022-06-21 15:50:23
 * @Description: Modify here please
-->
<script setup lang="ts">
import { ElInputNumber, ElIcon } from 'element-plus';
import { Delete } from '@element-plus/icons-vue';
import CustomCheckBox from '@/components/common/CustomCheckBox.vue';
const num = ref(1);
const select = ref(false);
function handleChange() {
  console.log(48878);
}
</script>

<template>
  <div class="h-[170px] flex border-b">
    <!-- 选择器 -->
    <div class="w-[100px] h-full flex justify-center items-center">
      <CustomCheckBox v-model:value="select" />
    </div>
    <!-- 商品信息 -->
    <div class="flex w-[400px] justify-center items-center">
      <div class="flex">
        <img
          class="w-[90px] h-[90px] object-cover"
          src="http://img30.360buyimg.com/popWaterMark/jfs/t1/99163/8/24867/380197/622869ecEd15860ca/38aab77687ce63a2.jpg"
          alt=""
        />
        <div class="py-2 ml-2">
          <h5 class="text-sm text-ellipsis-2">
            美的（Midea）M3-L20A8家用微波炉 定频微波烤箱一体机 APP操控 健身食谱
            智能湿度感应 下拉门 20L 以旧换新
          </h5>
          <p class="mt-2 text-sm text-gray-400">
            属性：微烤一体|湿度感应|手机APP控制
          </p>
        </div>
      </div>
    </div>
    <!-- 价格 -->
    <span class="inline-block leading-[170px] w-[215px] text-center"
      >￥499</span
    >
    <!-- 数量 -->
    <div class="flex items-center justify-center w-[150px]">
      <el-input-number
        v-model="num"
        size="large"
        :min="1"
        :max="10"
        @change="handleChange"
      />
    </div>
    <!-- 金额 -->
    <div class="flex items-center justify-center w-[270px]">
      <span class="text-red-500"> ￥{{ num * 499 }} </span>
    </div>
    <!-- 删除操作 -->
    <div class="flex items-center justify-center">
      <el-icon class="cursor-pointer"><Delete /></el-icon>
    </div>
  </div>
</template>

<style scoped></style>
