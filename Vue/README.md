# Vue


## Vue.config.productionTip = false
阻止Vue在启动时生成生成提示

## el
1. new Vue 时, el直接绑定
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
``` js
var person = {
  name: 'liu'
}

Object.defineProperty(person, 'age', {
  value: 18,
  enumerable: true,// property 是否可以枚举   默认：false
  writable: true,// property 是否可以修改   默认：false
  configurable: true,// property 是否可以删除  默认：false
})

```

``` js
var person = {
  name: 'liu'
}
var number = 20;
Object.defineProperty(person, 'age', {
  // 读取age属性时，getter就会被调用，返回age的值
  get(){
    return number;
  },
  set(value){
    number = value;
  }
})

```

## 数据代理
通过一个对象代理对另一个对象中属性的操作（读|写）

通过代理person2可以修改person1

``` js
var person1 = {
  name: 'liu'
}

var person2 = {
  age: 18
};

Object.defineProperty(person2, 'name', {
  get(){
    return person1.name;
  },
  set(value){
    person1.name = value;
  }
})

```

## Vue中数据代理
data中数据放入vm._data，通过代理vm可以修改data

取：vm.name <= getter <= data.name

赋值：vm.name = 'jing' => setter => data.name



1.通过Object.defineProperty()把data对象中所有属性添加到vm上
2.为每一个添加到vm上的属性，都指定一个getter、 setter
3.在getter、 setter内部去操作data中对应的属性

## vm._data中数据为了响应式是做了数据劫持的


## Vue中事件修饰符
- stop： 阻止事件冒泡

- once：只触发一次

- prevent：阻止默认事件

- capture：使用事件捕获模式

- self：event.target是当前操作对象的元素才触发

- passive：事件的默认行为立即执行


# Vue3

``` js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

```

## setup

``` js
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
1.和vue2的混合使用
- Vue2.x配置（data、methos、computed...）可以访问到setup中的属性、方法。
- 但在setup中不能访问到Vue2.x配置（data、methos、computed...）
- 如果有重名, setup优先。
2.不能是async函数
