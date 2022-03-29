## css

BEM: footer(块) footer__item（__元素） footer__item--active（--修饰）

字体缩小：

```css
transform: scale(0.5, 0.5);
transform-origin: center top;
```

省略

```css
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
```

```
.div{
  position: relative;
  item-space: center;
  color: dark;
  padding-top: 500px;
  
}

```

调整位置 也可以用 relative 定位的

```css
position: relative;
top: 4px;
```

图片占位问题

```css
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 56.24%;
  img {
    width: 100%;
  }
}

/* or */
.banner {
  img {
    width: 100%;
    padding-bottom: 56.24%; // 图片的宽长比
  }
}
```

input 默认 placeholder 颜色

```css
::placeholder {
  color: #eee;
}
```

line-height 行高可以撑开高度 不用单独设置高度

```css
div {
  line-height: 0.48rem;
}
```

``` css
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
```

### scss:

- & 的用法 外层的占位符

### iconfont 无法导入，图标显示空白的问题

类名没有加 iconfont 图标类名写错了 需要使用官网上的名称

`<i class="iconfont icon-Bell"></i>`

## vue

```js
// vue绑定class可以和原来的class进行合并
class="footer__item" :class="{'footer__item--active': true}"

// 但是多个条件会报错
class="footer__item" :class="{'footer__item--active': true}" :class="{'footer__item--style': true}"
```

``` js
const userInfo = reactive({
    name: "",
    password: "",
  });

  const { name, password } = toRefs(userInfo);
  const age = toRef(userInfo,'age') // userInfo没有age属性 会赋一个空的响应式数据  toRefs不会 取没有的数据赋不上值

```

``` js

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


  setup() {
    const [toastMessage, showToast, showToastFn] = useToastEffect();

    const { name, password, submit } = useSubmitEffect(showToastFn);

    return { name, password, submit, toastMessage, showToast };
  }


```

[Vue Router 提供了懒加载支持](https://v3.cn.vuejs.org/guide/ssr/routing.html#%E4%BB%A3%E7%A0%81%E5%88%86%E7%A6%BB)


``` js

const routes = [
  {
    path: "/",
    component: Home,  // 直接加载
  },
  {
    path: "/home",
    component: () => import("../views/Home.vue"), // 按需加载
  },
  {
    path: "/shop/:id",  // 传递id
    component: () => import("../views/Shop.vue"), 
  },
  {
    path: "/login",
    // name: "Login",
    component: () => import("../views/Login.vue"),
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage;
      isLogin === "true" ? next({ path: "/" }) : next();
    },
  }
];


// vue页面路由跳转
<router-link :to="`/shop/${item.id}`" />

// 返回上一页
router.back();


// main.js

router.isReady().then(() => {
  app.mount('#app')
})
```

<!-- 获取路径信息 -->
``` js
const route = useRoute()
const id = route.params.id;


```

## js

```js
localStorage.isLogin = true
localStorage.setItem('isLogin', true)

取的时候 是字符串

const {isLogin} = localStorage;

typeof isLogin // 'string'
```
