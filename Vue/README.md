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

## $attrs
组件外部传递过来，但没有在props配置中声明的属性, 相当于 ```this.$attrs```(捡漏)
## $slots
收到的插槽内容


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

## ref 

RefImpl： reference implement

- 作用: 定义一个响应式的数据
- 语法: ```const xxx = ref(initValue)``` 
  - 创建一个包含响应式数据的引用对象（reference对象，简称ref对象）。
  - JS中操作数据： ```xxx.value```
  - 模板中读取数据: 不需要.value，直接：```<div>{{xxx}}</div>```
- 备注：
  - 接收的数据可以是：基本类型、也可以是对象类型。
  - 基本类型的数据：响应式依然是靠``Object.defineProperty()``的```get```与```set```完成的。
  - 对象类型的数据：内部 “ 求助 ” 了Vue3.0中的一个新函数—— ```reactive```函数。

## reactive函数

- 作用: 定义一个对象类型的响应式数据（基本类型不要用它，要用```ref```函数）
- 语法：```const 代理对象= reactive(源对象)```接收一个对象（或数组），返回一个代理对象（Proxy的实例对象，简称proxy对象）
- reactive定义的响应式数据是“深层次的”。
- 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。

## Vue3.0的响应式

- 实现原理: 
  - 通过Proxy（代理）:  拦截对象中任意属性的变化, 包括：属性值的读写、属性的添加、属性的删除等。
  - 通过Reflect（反射）:  对源对象的属性进行操作。

``` js
new Proxy(data, {
	// 拦截读取属性值
    get (target, prop) {
    	return Reflect.get(target, prop)
    },
    // 拦截设置属性值或添加新属性
    set (target, prop, value) {
    	return Reflect.set(target, prop, value)
    },
    // 拦截删除属性
    deleteProperty (target, prop) {
    	return Reflect.deleteProperty(target, prop)
    }
})

proxy.name = 'tom'   
```

## reactive对比ref

-  从定义数据角度对比：
   -  ref用来定义：基本类型数据。
   -  reactive用来定义：对象（或数组）类型数据。
   -  备注：ref也可以用来定义对象（或数组）类型数据, 它内部会自动通过```reactive```转为代理对象。
-  从原理角度对比：
   -  ref通过``Object.defineProperty()``的```get```与```set```来实现响应式（数据劫持）。
   -  reactive通过使用Proxy来实现响应式（数据劫持）, 并通过Reflect操作源对象内部的数据。
-  从使用角度对比：
   -  ref定义的数据：操作数据需要```.value```，读取数据时模板中直接读取不需要```.value```。
   -  reactive定义的数据：操作数据与读取数据：均不需要```.value```。

## setup的两个注意点

- setup执行的时机
  - 在beforeCreate之前执行一次，this是undefined。

- setup的参数
  - props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。
  - context：上下文对象
    - attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于 ```this.$attrs```。
    - slots: 收到的插槽内容, 相当于 ```this.$slots```。 添加时： v-slot:name
    - emit: 分发自定义事件的函数, 相当于 ```this.$emit```。 vue3中需要在子组件中接收，emits:['func'].不接受会警告，也可以使用

## computed函数

``` js
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