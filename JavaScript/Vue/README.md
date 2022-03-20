# Vue

## Vue.config.productionTip = false

阻止 Vue 在启动时生成生成提示

## el

1. new Vue 时, el 直接绑定

```
new Vue({
  el: "#root",
})
```

2. 创建实例后，挂载

```
const app = new Vue({

})

app.$mount("#root");
```

## MVVM

1. Model: data
2. View: template
3. ViewModel: Vue 实例对象

## Object.defineProperty

```js
var person = {
  name: "liu",
};

Object.defineProperty(person, "age", {
  value: 18,
  enumerable: true, // property 是否可以枚举   默认：false
  writable: true, // property 是否可以修改   默认：false
  configurable: true, // property 是否可以删除  默认：false
});
```

```js
var person = {
  name: "liu",
};
var number = 20;
Object.defineProperty(person, "age", {
  // 读取age属性时，getter就会被调用，返回age的值
  get() {
    return number;
  },
  set(value) {
    number = value;
  },
});
```

## 生命周期

beforeCreate
created
beforeMount
mounted
beforeUpdate
updated
beforeUnMount
unMounted

## for 循环

- V-for 循环遍历数组时推荐使用 of，语法格式为(item，index)

  - item:迭代时不同的数组元素的值
  - index:当前元素的索引

- V-for 循环遍历对象时推荐使用 in，语法格式为(item,name,index)
  - item:迭代时对象的键名键值
  - name:迭代时对象的键名
  - index:当前元素的索引

List item 在遍历对象时，会按 Object.keys() 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下都一致，v-for 也可以在实现了可迭代协议的值上使用，包括原生的 Map 和 Set。

## 数组更新检测

1. 变异方法
   变异方法(mutation method)，顾名思义，会改变被这些方法调用的原始数组。

Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新。这些方法如下：

- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()

2.非变异方法

相非变异(non-mutating method)方法，例如： filter(), concat() 和 slice() 。这些不会改变原始数组，但总是返回一个新数组

## 显示过滤 / 排序结果

有时，我们想要显示一个数组的过滤或排序副本，而不实际改变或重置原始数据。在这种情况下，可以创建返回过滤或排序数组的计算属性。

```vue
<!-- 取到 numbers 里面的偶数位的值 -->
<li v-for="n in evenNumbers">{{ n }}</li>

data: { numbers: [ 1, 2, 3, 4, 5 ] }, computed: { evenNumbers: function () { return
this.numbers.filter(function (number) { return number % 2 === 0 }) } }
```

在计算属性不适用的情况下 (例如，在嵌套 v-for 循环中) 你可以使用一个 method 方法：

```vue
<li v-for="n in even(numbers)">{{ n }}</li>
data: { numbers: [ 1, 2, 3, 4, 5 ] }, methods: { even: function (numbers) { return
numbers.filter(function (number) { return number % 2 === 0 }) } }
```

## 对象更新检测

我们可以用以下三种方法对对象进行更新：

如果你需要为对象属性之中添加新的属性，那么我么你可以利用以下两种方法

```js
Vue.set("目标对象", "属性", "值");
vm.$set("目标对象", "属性", "值");
```

如果我们想更新对象中的属性，以下这种方法可以满足你

```
this.userProfile = Object.assign({}, this.userProfile, {
    age: 27,
    favoriteColor: 'Vue Green'
})
this.userProfile   //对象本身的属性

Object.assign()    //es6新增加的方法，用来将源对象的所有可枚举属性，复制到目标对象。它至少需要两个对象作为参数，第一个参数是目标对象，后面的参数都是源对象

{
    age: 27,
    favoriteColor: 'Vue Green'
}
//你需要增加的属性
```

如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
注意！我们不更改根属性的属性，只能更改跟属性以下的子属性的属性

## 数据代理

通过一个对象代理对另一个对象中属性的操作（读|写）

通过代理 person2 可以修改 person1

```js
var person1 = {
  name: "liu",
};

var person2 = {
  age: 18,
};

Object.defineProperty(person2, "name", {
  get() {
    return person1.name;
  },
  set(value) {
    person1.name = value;
  },
});
```

## Vue 中数据代理

data 中数据放入 vm.\_data，通过代理 vm 可以修改 data

取：vm.name <= getter <= data.name

赋值：vm.name = 'jing' => setter => data.name

1.通过 Object.defineProperty()把 data 对象中所有属性添加到 vm 上 2.为每一个添加到 vm 上的属性，都指定一个 getter、 setter 3.在 getter、 setter 内部去操作 data 中对应的属性

## vm.\_data 中数据为了响应式是做了数据劫持的

## v-model

```


data(){
  return {count: 1}
},
template: `<counter v-model="count" />`



props: ['modelValue'],
methods: {
  handleClick() {
    this.$emit('update:modelValue, this.modelValue + 1)
  }
},
template: `<div @click="handleClick">{{modelValue}}</div>`
```

```js
const app = Vue.createApp({
  data() {
    return { count: 1, count1: 1 };
  },
  template: `<counter v-model:app="count" v-model:web="count1" />`,
});

app.component("counter", {
  props: ["app", "web"],
  methods: {
    handleClick() {
      this.$emit("update:app", this.app + 1);
    },
    handleClick1() {
      this.$emit("update:web", this.web + 1);
    },
  },
  template: `<div @click="handleClick">{{app}}</div><div @click="handleClick1">{{web}}</div>`,
});
app.mount("#root");
```

## Vue 中事件修饰符

- stop： 阻止事件冒泡

- once：只触发一次

- prevent：阻止默认事件

- capture：使用事件捕获模式

- self：event.target 是当前操作对象的元素才触发

- passive：事件的默认行为立即执行

## $attrs

`v-bind="$attrs"`
组件外部传递过来，但没有在 props 配置中声明的属性, 相当于 `this.$attrs`(捡漏) 剩余的属性

## $slots

收到的插槽内容

## emits

## props

1. 传入一个对象的所有 property

如果你想要将一个对象的所有 property 都作为 prop 传入(可以选择接入需要的 property)，你可以使用不带参数的 `v-bind (取代 v-bind:prop-name)`。例如，对于一个给定的对象 post：

```js
post: {
  id: 1,
  title: 'My Journey with Vue',
  age: 27
}

// 下面的模板：

<blog-post v-bind="post"></blog-post>
// 等价于：

<blog-post
  v-bind:id="post.id"
  v-bind:title="post.title"
  v-bind:age="post.age"
></blog-post>


// 可以只接入其中的部分 这里就没有接收age  直接this.age就undefined
props: {
    id: Number,
    title: String
},

```

2. 单向数据流

所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。

额外的，每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。

这里有两种常见的试图变更一个 prop 的情形：

这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。在这种情况下，最好定义一个本地的 data property 并将这个 prop 用作其初始值：

```js
props: ['initialCounter'],
data: function () {
  return {
    counter: this.initialCounter
  }
}

// 这个 prop 以一种原始的值传入且需要进行转换。在这种情况下，最好使用这个 prop 的值来定义一个计算属性：

props: ['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}
```

```js
Vue.component("my-component", {
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true,
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100,
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: "hello" };
      },
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ["success", "warning", "danger"].indexOf(value) !== -1;
      },
    },
  },
});
```

## 非 prop 的 attribute

传递了 没有接受 会直接加在子组件的属性上
可以使用 `inheritAttrs: false,` 禁用
你可以使用组件的 $attrs property 将 attribute 应用到其它元素上

```js
app.component("date-picker", {
  inheritAttrs: false,
  template: `
    <div class="date-picker">
      <input type="datetime-local" v-bind="$attrs" />
    </div>
  `,
});
```

## mixin
局部mixin
全局自定义 app.mixins 
this.$options  可以获取所有属性 包括自定义属性

app.config.optionMergeStrategies.number = (mixinVal,appValue)=>{
  return mixinVal || appValue
}

# Vue3

```js
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
```

## setup

```js
// 返回一个对象
setup(){
  return {
    name: 'liu'
  }
}

// 返回一个渲染函数

setup(){
  return ()=> h('h1', 'liu')
}

```

1.和 vue2 的混合使用

- Vue2.x 配置（data、methos、computed...）可以访问到 setup 中的属性、方法。
- 但在 setup 中不能访问到 Vue2.x 配置（data、methos、computed...）
- 如果有重名, setup 优先。 2.不能是 async 函数

## ref

RefImpl： reference implement

- 作用: 定义一个响应式的数据
- 语法: `const xxx = ref(initValue)`
  - 创建一个包含响应式数据的引用对象（reference 对象，简称 ref 对象）。
  - JS 中操作数据： `xxx.value`
  - 模板中读取数据: 不需要.value，直接：`<div>{{xxx}}</div>`
- 备注：
  - 接收的数据可以是：基本类型、也可以是对象类型。
  - 基本类型的数据：响应式依然是靠`Object.defineProperty()`的`get`与`set`完成的。
  - 对象类型的数据：内部 “ 求助 ” 了 Vue3.0 中的一个新函数—— `reactive`函数。

## reactive 函数

- 作用: 定义一个对象类型的响应式数据（基本类型不要用它，要用`ref`函数）
- 语法：`const 代理对象= reactive(源对象)`接收一个对象（或数组），返回一个代理对象（Proxy 的实例对象，简称 proxy 对象）
- reactive 定义的响应式数据是“深层次的”。
- 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。

## Vue3.0 的响应式

- 实现原理:
  - 通过 Proxy（代理）: 拦截对象中任意属性的变化, 包括：属性值的读写、属性的添加、属性的删除等。
  - 通过 Reflect（反射）: 对源对象的属性进行操作。

```js
new Proxy(data, {
  // 拦截读取属性值
  get(target, prop) {
    return Reflect.get(target, prop);
  },
  // 拦截设置属性值或添加新属性
  set(target, prop, value) {
    return Reflect.set(target, prop, value);
  },
  // 拦截删除属性
  deleteProperty(target, prop) {
    return Reflect.deleteProperty(target, prop);
  },
});

proxy.name = "tom";
```

## reactive 对比 ref

- 从定义数据角度对比：
  - ref 用来定义：基本类型数据。
  - reactive 用来定义：对象（或数组）类型数据。
  - 备注：ref 也可以用来定义对象（或数组）类型数据, 它内部会自动通过`reactive`转为代理对象。
- 从原理角度对比：
  - ref 通过`Object.defineProperty()`的`get`与`set`来实现响应式（数据劫持）。
  - reactive 通过使用 Proxy 来实现响应式（数据劫持）, 并通过 Reflect 操作源对象内部的数据。
- 从使用角度对比：
  - ref 定义的数据：操作数据需要`.value`，读取数据时模板中直接读取不需要`.value`。
  - reactive 定义的数据：操作数据与读取数据：均不需要`.value`。

## setup 的两个注意点

- setup 执行的时机

  - 在 beforeCreate 之前执行一次，this 是 undefined。

- setup 的参数
  - props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。
  - context：上下文对象
    - attrs: 值为对象，包含：组件外部传递过来，但没有在 props 配置中声明的属性, 相当于 `this.$attrs`。
    - slots: 收到的插槽内容, 相当于 `this.$slots`。 添加时： v-slot:name
    - emit: 分发自定义事件的函数, 相当于 `this.$emit`。 vue3 中需要在子组件中接收，emits:['func'].不接受会警告，也可以使用

## computed 函数

```js
import {computed} from 'vue'

setup(){
    ...
	//计算属性——简写  onlyReady
    let fullName = computed(()=>{
        return person.firstName + '-' + person.lastName
    })

    //计算属性——完整
    let fullName = computed({
        get(){
            return person.firstName + '-' + person.lastName
        },
        set(value){
            const nameArr = value.split('-')
            person.firstName = nameArr[0]
            person.lastName = nameArr[1]
        }
    })
}

```

## watch

```js
watch(person, (newValue, oldValue) => {
  console.log("person变化了", newValue, oldValue);
});
```

```js
watch(
  [person, info],
  (newValue, oldValue) => {
    console.log("person变化了", newValue, oldValue);
  },
  { immediate: true }
);
```

- 监视 reactive 定义的响应式数据时：oldValue 无法正确获取、强制开启了深度监视（deep 配置失效）。
- 监视 reactive 定义的响应式数据中某个属性时：deep 配置有效。

```js
watch(
  person,
  (newValue, oldValue) => {
    console.log("person变化了", newValue, oldValue);
  },
  { immediate: true, deep: false }
); //此处的deep配置不再奏效

// 监视reactive定义的响应式数据中的某个属性
watch(
  () => person.job,
  (newValue, oldValue) => {
    console.log("person的job变化了", newValue, oldValue);
  },
  { immediate: true, deep: true }
);

// 监视reactive定义的响应式数据中的某些属性
watch(
  [() => person.job, () => person.name],
  (newValue, oldValue) => {
    console.log("person的job变化了", newValue, oldValue);
  },
  { immediate: true, deep: true }
);

//特殊情况
watch(
  () => person.job,
  (newValue, oldValue) => {
    console.log("person的job变化了", newValue, oldValue);
  },
  { deep: true }
); //此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效
```

## watchEffect 函数

- watch 的套路是：既要指明监视的属性，也要指明监视的回调。

- watchEffect 的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。

- watchEffect 有点像 computed：

  - 但 computed 注重的计算出来的值（回调函数的返回值），所以必须要写返回值。
  - 而 watchEffect 更注重的是过程（回调函数的函数体），所以不用写返回值。

  ```js
  //watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。
  watchEffect(() => {
    const x1 = sum.value;
    const x2 = person.age;
    console.log("watchEffect配置的回调执行了");
  });
  ```

## 自定义 hook 函数

- 什么是 hook？—— 本质是一个函数，把 setup 函数中使用的 Composition API 进行了封装。
- 自定义 hook 的优势: 复用代码, 让 setup 中的逻辑更清楚易懂。

## toRef

- 作用：创建一个 ref 对象，其 value 值指向另一个对象中的某个属性。
- 语法：`const name = toRef(person,'name')`
- 应用: 要将响应式对象中的某个属性单独提供给外部使用时。

- 扩展：`toRefs` 与`toRef`功能一致，但可以批量创建多个 ref 对象，语法：`toRefs(person)`

## Fragment

在 Vue3 中: 组件可以没有根标签, 内部会将多个标签包含在一个 Fragment 虚拟元素中
