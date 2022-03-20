<template>
  <div class="login__box">
    <div class="login__input__box">
      <input v-model="name" type="text" placeholder="请输入用户名" />
    </div>
    <div class="login__input__box">
      <input v-model="password" type="password" placeholder="请输入密码" />
    </div>
    <div class="login__btn" @click="submit">登录</div>
    <toast :show="showToast" :message="toastMessage" />
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { reactive, toRefs } from "vue";
import Toast, { useToastEffect } from "../components/Toast";

const useSubmitEffect = showToastFn => {
  const router = useRouter();
  const userInfo = reactive({
    name: "",
    password: "",
  });

  const { name, password } = toRefs(userInfo);

  const submit = () => {
    if (name.value === "admin" && password.value === "root") {
      localStorage.setItem("isLogin", true);
      router.push({ path: "/" });
    } else {
      showToastFn("登录错误");
      localStorage.setItem("isLogin", false);
    }
  };

  return { name, password, submit };
};

export default {
  name: "Login",

  components: {
    Toast,
  },
  setup() {
    const [toastMessage, showToast, showToastFn] = useToastEffect();

    const { name, password, submit } = useSubmitEffect(showToastFn);

    return { name, password, submit, toastMessage, showToast };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.login__box {
  width: 100%;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  .login__input__box {
    width: 2.7rem;
    height: 0.4rem;
    margin: 0 auto 0.2rem;
    padding-top: 0.04rem;
    padding-bottom: 0.04rem;

    background: rgb(220, 241, 255);

    input {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding-left: 0.2rem;
      border: none;
      outline: none;
      font-size: 0.14rem;
      background: rgb(220, 241, 255);

      &::placeholder {
        color: #777;
      }
    }
  }
}

.login__btn {
  width: 2.7rem;
  margin: 0.3rem auto;
  line-height: 0.48rem;
  font-size: 0.14rem;
  color: #fff;
  text-align: center;
  background: #fa2855;
}
</style>
