<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-22 10:46:24
 * @LastEditTime: 2022-06-22 16:35:56
 * @Description: Modify here please
-->
<script lang="ts">
export default {
  name: 'UserCollectPage',
};
</script>
<script setup lang="ts">
import { ElPagination } from 'element-plus';
</script>

<template>
  <div class="pl-14">
    <div class="leading-[60px] border-b">我的收藏</div>
    <!--list -->
    <div v-for="item in 3" :key="item" class="py-4">
      <div class="flex items-center py-4 border-b border-dashed">
        <img
          class="w-[120px] h-[120px] object-cover"
          src="https://qiniu.crmeb.net/attach/2021/08/92ec5202108091906075891.png?imageView2/2/w/300/h/300"
          alt=""
        />
        <p class="ml-4 text-sm">家用成人懒人椅北欧休闲椅摇摇椅</p>
      </div>
      <div class="flex justify-end py-6 pr-6 border-b">
        <div class="flex space-x-3 text-sm">
          <div class="px-4 py-2 text-gray-600 border cursor-pointer">
            取消收藏
          </div>
          <div class="px-4 py-2 text-gray-600 border cursor-pointer">
            查看商品
          </div>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <div class="flex justify-end px-4 mb-8">
      <el-pagination background layout="prev, pager, next" :total="1" />
    </div>
  </div>
</template>

<style scoped></style>
