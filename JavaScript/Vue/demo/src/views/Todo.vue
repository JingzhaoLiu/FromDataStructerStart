<template>
  <div class="todo__box">
    <div>
      <input v-model="inputValue" placeholder="input to do " />
      <button @click="submit">submit</button>
    </div>
    <ul>
      <li v-for="(item, idx) in arr" :key="idx">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

const useSubmitEffect = () => {
  const inputValue = ref("");
  const arr = reactive([]);

  const submit = () => {
    arr.push(inputValue.value);
    inputValue.value = "";
  };

  return { inputValue, submit, arr };
};

export default {
  setup() {
    const { inputValue, submit, arr } = useSubmitEffect();

    return { inputValue, submit, arr };
  },
};
</script>

<style lang="scss" scoped>
.todo__box {
  font-size: 0.14rem;
  li {
    line-height: 0.44rem;
  }
}
</style>
