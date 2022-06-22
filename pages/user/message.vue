<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-06-22 10:43:15
 * @LastEditTime: 2022-06-22 15:07:25
 * @Description: Modify here please
-->
<script lang="ts">
export default {
  name: 'UserMessagePage',
};
</script>
<script setup lang="ts">
interface MessageItem {
  text: string;
  title: string;
  isRead: boolean;
  isUnfold: boolean;
}

const list = ref<MessageItem[]>([
  {
    text: '您有未付款订单,订单号为:wx240517648541024256，商品数量有限，请及时付款。',
    title: '提醒付款通知',
    isRead: false,
    isUnfold: false,
  },
  {
    text: '您有未付款订单,订单号为:wx240517648541024256，商品数量有限，请及时付款。',
    title: '提醒付款通知',
    isRead: false,
    isUnfold: false,
  },
  {
    text: '您有未付款订单,订单号为:wx240517648541024256，商品数量有限，请及时付款。',
    title: '提醒付款通知',
    isRead: false,
    isUnfold: false,
  },
]);

function handleClick(item) {
  item.isUnfold = !item.isUnfold;
  item.isRead = true; // 标记已读
}
</script>

<template>
  <div class="pl-14">
    <div class="leading-[60px] border-b">站内信</div>
    <div class="px-2 py-4">
      <div v-for="(item, index) in list" :key="index" class="my-4">
        <div class="flex items-center justify-between bg-[#f2f2f2] p-4 text-sm">
          <div>
            <span class="mr-2">{{ item.title }}</span>
            <span
              v-if="!item.isRead"
              class="inline-block w-2 h-2 bg-red-500 rounded-full"
            ></span>
          </div>
          <span
            class="text-gray-500 cursor-pointer"
            @click="handleClick(item)"
            >{{ item.isUnfold ? '收起' : '展开' }}</span
          >
        </div>
        <!-- 内容 -->
        <p v-show="item.isUnfold" class="p-4 text-sm">
          {{ item.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
