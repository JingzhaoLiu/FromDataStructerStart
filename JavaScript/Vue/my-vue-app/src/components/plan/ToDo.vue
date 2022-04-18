<template>
  <div>
    <div>
      <button v-for="(item, index) in girls" :key="index" @click="girlsNumFun(index)">
        {{ item }}
      </button>
    </div>
    <div>当前选择的是 【{{ girlsNum }}】</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const girls = ["服务员1", "服务员2", "服务员3"];
const girlsNum = ref("");
const girlsNumFun = (item: number) => {
  girlsNum.value = girls[item];
};
</script>

<style scoped></style>
