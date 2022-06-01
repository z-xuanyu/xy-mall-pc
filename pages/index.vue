<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-01 12:05:31
 * @LastEditTime: 2022-06-01 17:56:39
 * @Description: Modify here please
-->
<script lang="ts">
export default {
  name: 'HomePage',
};
</script>

<script setup lang="ts">
import { ElButton } from 'element-plus';
const msg = ref('阿宇');
</script>

<template>
  <div>
    <div class="text-red-500">首页</div>
    <p>{{ msg }}</p>
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<style scoped></style>
