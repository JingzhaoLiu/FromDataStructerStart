<template>
  <div class="todo__box">
    <div>
      <input v-model="inputValue" placeholder="input to do " />
      <button @click="addItem">submit</button>
    </div>
    <ul>
      <li v-for="(item, idx) in itemList" :key="idx">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

const useInputEffect = () => {
  const inputValue = ref("");
  return { inputValue };
};

const useAddItemEffect = inputValue => {
  const itemList = reactive([]);
  const addItem = () => {
    itemList.push(inputValue.value);
    inputValue.value = "";
  };

  return { addItem, itemList };
};

export default {
  setup() {
    const { inputValue } = useInputEffect();
    const { addItem, itemList } = useAddItemEffect(inputValue);

    return {
      inputValue,

      addItem,
      itemList,
    };
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
