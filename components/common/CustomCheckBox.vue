<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-21 15:25:58
 * @LastEditTime: 2022-06-21 15:41:20
 * @Description: 自定义checkbox组件
-->
<script setup lang="ts">
import { ElIcon } from 'element-plus';
import { Select } from '@element-plus/icons-vue';
const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:value']);

const defaultValue = ref(props.value);

function handleClick() {
  defaultValue.value = !defaultValue.value;
  emit('update:value', defaultValue.value);
}
</script>

<template>
  <span
    class="flex items-center justify-center w-5 h-5 border rounded-full cursor-pointer"
    :class="value ? 'bg-red-500' : ''"
    @click="handleClick"
  >
    <el-icon v-if="value" color="white"><Select /></el-icon>
  </span>
</template>

<style scoped></style>
