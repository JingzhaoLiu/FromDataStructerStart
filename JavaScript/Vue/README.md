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

## for循环
- V-for循环遍历数组时推荐使用of，语法格式为(item，index)
  - item:迭代时不同的数组元素的值
  - index:当前元素的索引

- V-for循环遍历对象时推荐使用in，语法格式为(item,name,index)
  - item:迭代时对象的键名键值
  - name:迭代时对象的键名
  - index:当前元素的索引

List item在遍历对象时，会按 Object.keys() 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下都一致，v-for也可以在实现了可迭代协议的值上使用，包括原生的Map和Set。

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
``` vue
<!-- 取到 numbers 里面的偶数位的值 -->
<li v-for="n in evenNumbers">{{ n }}</li>


data: {
    numbers: [ 1, 2, 3, 4, 5 ]
},
computed: {
    evenNumbers: function () {
        return this.numbers.filter(function (number) {
        return number % 2 === 0
        })
    }
}
```
在计算属性不适用的情况下 (例如，在嵌套 v-for 循环中) 你可以使用一个 method 方法：
``` vue
<li v-for="n in even(numbers)">{{ n }}</li>
data: {
    numbers: [ 1, 2, 3, 4, 5 ]
},
methods: {
    even: function (numbers) {
        return numbers.filter(function (number) {
        return number % 2 === 0
        })
    }
}
```

## 对象更新检测
我们可以用以下三种方法对对象进行更新：

如果你需要为对象属性之中添加新的属性，那么我么你可以利用以下两种方法
``` js
Vue.set("目标对象","属性","值")
vm.$set("目标对象","属性","值")
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

## watch


``` js
watch(person,(newValue,oldValue)=>{
	console.log('person变化了',newValue,oldValue)
}) 
```

``` js
watch([person, info],(newValue,oldValue)=>{
	console.log('person变化了',newValue,oldValue)
},{immediate:true}) 
```

- 监视reactive定义的响应式数据时：oldValue无法正确获取、强制开启了深度监视（deep配置失效）。
- 监视reactive定义的响应式数据中某个属性时：deep配置有效。

``` js
watch(person,(newValue,oldValue)=>{
	console.log('person变化了',newValue,oldValue)
},{immediate:true,deep:false}) //此处的deep配置不再奏效

// 监视reactive定义的响应式数据中的某个属性
watch(()=>person.job,(newValue,oldValue)=>{
	console.log('person的job变化了',newValue,oldValue)
},{immediate:true,deep:true}) 

// 监视reactive定义的响应式数据中的某些属性
watch([()=>person.job,()=>person.name],(newValue,oldValue)=>{
	console.log('person的job变化了',newValue,oldValue)
},{immediate:true,deep:true})

//特殊情况
watch(()=>person.job,(newValue,oldValue)=>{
    console.log('person的job变化了',newValue,oldValue)
},{deep:true}) //此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效
```

## watchEffect函数

- watch的套路是：既要指明监视的属性，也要指明监视的回调。

- watchEffect的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。

- watchEffect有点像computed：

  - 但computed注重的计算出来的值（回调函数的返回值），所以必须要写返回值。
  - 而watchEffect更注重的是过程（回调函数的函数体），所以不用写返回值。

  ```js
  //watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。
  watchEffect(()=>{
      const x1 = sum.value
      const x2 = person.age
      console.log('watchEffect配置的回调执行了')
  })
  ```

## 自定义hook函数
- 什么是hook？—— 本质是一个函数，把setup函数中使用的Composition API进行了封装。
- 自定义hook的优势: 复用代码, 让setup中的逻辑更清楚易懂。

## toRef

- 作用：创建一个 ref 对象，其value值指向另一个对象中的某个属性。
- 语法：```const name = toRef(person,'name')```
- 应用:   要将响应式对象中的某个属性单独提供给外部使用时。


- 扩展：```toRefs``` 与```toRef```功能一致，但可以批量创建多个 ref 对象，语法：```toRefs(person)```

## Fragment
在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中