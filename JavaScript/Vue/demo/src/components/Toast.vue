<template>
  <div class="toast__box" v-show="show">{{ message }}</div>
</template>

<script>
import { reactive, toRefs } from "vue";
export const useToastEffect = () => {
  const data = reactive({
    toastMessage: "",
    showToast: false,
  });

  const showToastFn = txt => {
    data.showToast = true;
    data.toastMessage = txt;
    setTimeout(() => {
      data.showToast = false;
      data.toastMessage = "";
    }, 2000);
  };

  const { toastMessage, showToast } = toRefs(data);

  return [toastMessage, showToast, showToastFn];
};

export default {
  props: {
    message: {
      type: String,
      default: "",
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.toast__box {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 7px;
  border-radius: 4px;
}
</style>
