<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-01 12:07:30
 * @LastEditTime: 2022-06-01 17:06:20
 * @Description: Modify here please
-->
<script lang="ts">
export default {
  name: 'LayoutPage',
};
</script>
<script setup lang="ts">
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';
</script>
<template>
  <div class="flex flex-col justify-between layout">
    <!-- 头部 -->
    <TheHeader />
    <div class="w-[1226px] mx-auto">
      <slot />
    </div>
    <!-- 底部 -->
    <TheFooter />
  </div>
</template>
