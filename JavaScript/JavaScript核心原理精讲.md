# JavaScript 核心原理精讲 4/26

## 开篇

扎实掌握并加强原生 JavaScript 的核心原理及编码功底、深入理解前端框架源代码，对于提升自己的前端技术能力、提高职业生涯天花板是非常有必要的。

希望你不仅跟着我的思路去理解内容本身，还能在学习过程中亲自动手实现一遍，从而深刻体会程序实现逻辑的一些细节，进而加深对每一部分知识点的理解，做到融会贯通。

你也不妨给自己养成一个好习惯，每看完一篇文章就对知识点进行总结，形成自己的学习思维脑图，等到学完全部课程以后再来回顾，以便加深知识理解。

希望这个专栏，能够带你了解原生 JS 的底层原理，更好地掌握 JS 框架源码的代码实现逻辑，在写业务代码时可以做到游刃有余，提升工作效率，加强自身技术储备，拿高薪，进大厂！

## JS 数据类型的相关知识（概念、检测方法、转换方法）

基础类型：
null、undefined、string、number、boolean、symbol、bigInt
基础类型存储在栈内存，被引用或拷贝时，会创建一个完全相等的变量

Object 引用类型：
Array - 数组对象、RegExp - 正则对象、Date - 日期对象、Math - 数学函数、Function - 函数对象
引用类型存储在堆内存，存储的是地址，多个引用指向同一个地址，这里会涉及一个“共享”的概念

ECMAScript 中所有函数的参数都是按值来传递的。但是为什么涉及到原始类型与引用类型的值时仍然有区别呢，还不就是因为内存分配时的差别。 （这个复制变量时遵循的机制完全一样）

原始值：只是把变量里的值传递给参数，之后参数和这个变量互不影响。
引用值：对象变量它里面的值是这个对象在堆内存中的内存地址，这一点你要时刻铭记在心！因此它传递的值也就是这个内存地址，这也就是为什么函数内部对这个参数的修改会体现在外部的原因了，因为它们都指向同一个对象呀

```js
let person = {
  name: "Martin",
  age: 30,
};
function change(o) {
  // o 接受a的值传递  a对象所在的地址
  o.age = 1; // o地址指向的对象中age改成24   o地址就是a地址 a也修改了
  o = {
    // o指向了另一个地址
    name: "Amy",
    age: 30,
  };
  return o; // 返回o新的地址
}

let student = change(person);
console.log(student.age); // 第一个console  30
console.log(person.age); // 1
```

## JS 闭包

1. JavaScript 中的作用域是什么意思?

   - 全局作用域
   - 函数作用域
   - 块级作用域

   全局变量是挂载在 window 对象下的变量，所以在网页中的任何位置你都可以使用并且访问到这个全局变量

```js
function getName() {
  var hisName = "inner"; // 局部作用域 但是声明会在全局作用域上
  console.log(hisName); //inner
}
getName();
console.log(hisName); // undefined

console.log(myName); // myName is not defined
```

```js
console.log(a); //a is not defined
if (true) {
  let a = "123";
  console.log(a); // 123
}
console.log(a); //a is not defined
```

```js
console.log(a); // undefined
if (true) {
  var a = "123"; // if 块级作用域不能限制 var声明到全局
  console.log(a); // 123
}
console.log(a); // 123
```

2. 闭包会在哪些场景中使用？

闭包其实就是一个可以访问其他函数内部变量的函数。

因为通常情况下，函数内部变量是无法在外部访问的（即全局变量和局部变量的区别），因此使用闭包的作用，就具备实现了能在外部访问某个函数内部变量的功能，让这些内部变量的值始终可以保存在内存中。

闭包产生的本质就是：当前环境中存在指向父级作用域的引用。

那是不是只有返回函数才算是产生了闭包呢？其实也不是，回到闭包的本质，我们只需要让父级作用域的引用存在即可

``` js
var fun2;
function fun1(){
  var a = 2;
  fun2 = ()=>{
    console.log(2)
  }
}

fun1();
fun2();


```


```js
回调函数
作为函数参数传递的形式(计数器)
IIFE（立即执行函数）
```

``` js
for(var i = 1; i <= 5; i ++){
  setTimeout(function() {
    console.log(i)
  }, 0)
}
// 结果输出的是 5 个 6，那么一般面试官都会先问为什么都是 6？我想让你实现输出 1、2、3、4、5 的话怎么办呢？

// 因此结合本讲所学的知识我们来思考一下，应该怎么给面试官一个满意的解释。你可以围绕这两点来回答。

// 1. setTimeout 为宏任务，由于 JS 中单线程 eventLoop 机制，在主线程同步任务执行完后才去执行宏任务，因此循环结束后 setTimeout 中的回调才依次执行。

// 2. 因为 setTimeout 函数也是一种闭包，往上找它的父级作用域链就是 window，变量 i 为 window 上的全局变量，开始执行 setTimeout 之前变量 i 已经就是 6 了，因此最后输出的连续就都是 6。
for(var i = 1;i <= 5;i++){
  (function(j){
    setTimeout(function timer(){
      console.log(j)
    }, 0)
  })(i)
}

for(let i = 1; i <= 5; i++){
  setTimeout(function() {
    console.log(i);
  },0)
}

for(var i=1;i<=5;i++){
  setTimeout(function(j) {
    console.log(j)
  }, 0, i)
}

// function
// function 是你想要在到期时间(delay毫秒)之后执行的函数。
// code
// 这是一个可选语法，你可以使用字符串而不是function ，在delay毫秒之后编译和执行字符串 (使用该语法是不推荐的, 原因和使用 eval()一样，有安全风险)。 直接报错

// delay 可选
// 延迟的毫秒数 (一秒等于1000毫秒)，函数的调用会在该延迟之后发生。如果省略该参数，delay取默认值0，意味着“马上”执行，或者尽快执行。不管是哪种情况，实际的延迟时间可能会比期待的(delay毫秒数) 值长，原因请查看实际延时比设定值更久的原因：最小延迟时间。
// arg1, ..., argN 可选
// 附加参数，一旦定时器到期，它们会作为参数传递给function 


```

3. 通过定时器循环输出自增的数字通过 JS 的代码如何实现？

```js
function readNumber() {
  var number = 1;
  return function () {
    console.log(number++);
  };
}

var fn = readNumber();
setInterval(() => {
  fn();
}, 1000);
```

由于闭包会使一些变量一直保存在内存中不会自动释放，所以如果大量使用的话就会消耗大量内存，从而影响网页性能。因此，你更应该深入理解闭包的原理，从而保证交付的代码性能更好

## 数组原理

1. 数组的构造器有哪几种？

```
new Array(3); // [empty × 3]
new Array(3,4,5);
let arr2 = [];  // []
arr2.length = 6 // [undefined × 6]
Array.of(3,4,5)
Array.from([1,2,4])
```

new Array(arg1, arg2,…)，参数长度为 0 或长度大于等于 2 时，传入的参数将按照顺序依次成为新数组的第 0 至第 N 项（参数长度为 0 时，返回空数组）；

new Array(len)，当 len 不是数值时，处理同上，返回一个只包含 len 元素一项的数组；当 len 为数值时，len 最大不能超过 32 位无符号整型，（len 最大为 Math.pow(2,32) - 1），否则将抛出 RangeError。
If the only argument passed to the Array constructor is an integer between 0 and 2^32 - 1 (inclusive). If the argument is any other number, a RangeError exception is thrown;

Array.from 拥有 3 个参数：

1. 类似数组的对象，必选；

2. 加工函数，新生成的数组会经过该函数的加工再返回；

3. this 作用域，表示加工函数执行时 this 的值。

这三个参数里面第一个参数是必选的，后两个参数都是可选的

Array.from() lets you create Arrays from:

- array-like objects (objects with a length property and indexed elements);
- or iterable objects (objects such as Map and Set).

```js
var obj = { 0: "a", 1: "b", 2: "c", length: 3 };
Array.from(
  obj,
  function (value, index) {
    console.log(value, index, this, arguments.length);
    return value.repeat(3); //必须指定返回值，否则返回 undefined
  },
  obj
);

Array.from(obj, value => value.repeat(3));
Array.from(obj);

Array.from("abc"); // ["a", "b", "c"]
// Set
Array.from(new Set(["abc", "def"])); // ["abc", "def"]
// Map
Array.from(
  new Map([
    [1, "ab"],
    [2, "de"],
  ])
);

const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
```

2. 数组的判断

```js
var a = [];
// 1.基于instanceof
a instanceof Array;
// 2.基于constructor
a.constructor === Array;
// 3.基于Object.prototype.isPrototypeOf
Array.prototype.isPrototypeOf(a);
// 4.基于getPrototypeOf
Object.getPrototypeOf(a) === Array.prototype;
// 5.基于Object.prototype.toString
Object.prototype.toString.apply(a) === "[object Array]";
// 6
Array.isArray(a);

if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  };
}
```

3. 哪些是改变自身的方法？

```js
shift;
unshift;
pop;
push;
splice;
reverse;
sort;
copyWithin;
fill;
```

```js
copyWithin(target, start, end)
  [(1, 2, 3, 4, 5)].copyWithin(-2)
  [
    // [1, 2, 3, 1, 2]

    (1, 2, 3, 4, 5)
  ].copyWithin(0, 3)
  [
    // [4, 5, 3, 4, 5]

    (1, 2, 3, 4, 5)
  ].copyWithin(0, 3, 4)
  [
    // [4, 2, 3, 4, 5]

    (1, 2, 3, 4, 5)
  ].copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]
```

```js
[1, 2, 3].fill(4); // [4, 4, 4]
[1, 2, 3].fill(4, 1); // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2); // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1); // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3); // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2); // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN); // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5); // [1, 2, 3]
Array(3).fill(4); // [4, 4, 4]
[].fill.call({ length: 3 }, 4); // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.
var arr = Array(3).fill({}); // [{}, {}, {}];
// 需要注意如果fill的参数为引用类型，会导致都执行同一个引用类型
// 如 arr[0] === arr[1] 为true
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

```js
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m);
  nums2.splice(n);
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b); // nums1从小到大排列，所以是a-b
  console.log("nums1: ", nums1);
};

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
merge(nums1, m, nums2, n);
```

4. 哪些是不改变自身的方法？

concat、join、slice、toString、toLocaleString、indexOf、lastIndexOf

```js
// includes方法
var array = [-0, 1, 2];
console.log(array.includes(+0)); // true
console.log(array.includes(1)); // true
var array = [NaN];
console.log(array.includes(NaN)); // true
```

5. 遍历的方法有哪些？

forEach、every、some、filter、map、reduce、reduceRight，以及 ES6 新增的方法 entries、find、findIndex、keys、values

```js
// entries方法
var array = ["a", "b", "c"];
var iterator = array.entries();
console.log(iterator.next().value); // [0, "a"]
console.log(iterator.next().value); // [1, "b"]
console.log(iterator.next().value); // [2, "c"]
console.log(iterator.next().value); // undefined, 迭代器处于数组末尾时, 再迭代就会返回undefined

// keys方法
[...Array(10).keys()]; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
[...new Array(10).keys()]; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// values方法
var array = ["abc", "xyz"];
var iterator = array.values();
console.log(iterator.next().value); //abc
console.log(iterator.next().value); //xyz
```

所有插入元素的方法，比如 push、unshift 一律返回数组新的长度；

所有删除元素的方法，比如 pop、shift、splice 一律返回删除的元素，或者返回删除的多个元素组成的数组；

部分遍历方法，比如 forEach、every、some、filter、map、find、findIndex，它们都包含 function(value,index,array){} 和 thisArg 这样两个形参。

在日常的前端开发工作中，往往会忽视对数组 API 方法的系统性学习，但其实因为数组的方法较多，每个方法的参数和细节也比较零散，很难有一个系统的、整体的认识，在开发过程中还要频繁地查询 MDN 文档，造成效率低下以及代码能力难以进一步提升等问题。
因此通过刻意的学习，很好地掌握数组的 API 方法，以便在开发中规避这些问题，提高效率，准点下班。

## 数组排序

## 数组方法实现

## 前端的知识体系

1.关于岗位
无论你是否处于求职阶段，都一定要对自己的职业规划有一个清晰的定位,对于目标公司的选人标准你首先要搞清楚

如果你的目标是互联网大厂核心业务的前端岗位，那么首先你要找到这个部门招聘的 JD，去研究该部门对前端岗位的要求是什么样的。比如有些部门的诉求是精通 Node.js，另外一些部门要求有前端可视化经验，这里的确会根据每个部门的实际情况而定

## 算法的知识架构

## 结束语

1. 回顾

- JavaScript 语言基础语法及常见的 JS 特性；
- 系统学习了 V8 引擎底层原理和核心思想，学习并掌握了 JavaScript 异步编程关键技术点；
- 也带你深入分析了 JS 数组的底层原理，
- 讲解了大厂前端岗位高频面试题目，对一些比较典型的题目进行了剖析

2. 优秀的前端工程师应该具备以下特征：

- 在技术层面应该抛开对开发框架的站队，除了应用层 API 的使用之外，能够更多地关注其底层原理、设计思路和通用理念，对中短期技术发展方向有大致思路，并思考如何与过往的开发经验相结合，融进属于自己的知识体系抽象网络；

- 而在业务上应该跳出自身职能的范围，更多关注上下游合作方背后的思考逻辑，在推进项目时，能够结合大前端直面用户的优势，将自己的专业性和影响力辐射到协作方上下游，综合提升自己统筹项目的能力。

3. 坚持
   做好一件事从来都不是一蹴而就的。进步很难，其实是因为那些可以让人进步的事情往往都是让人焦虑、具有压力的。而人生的高度，可能就在于你怎么面对困难，真正能够减轻焦虑的办法就是走出舒适区，迎难而上，去搞定那些给你带来焦虑和压力的事情，这样人生的高度才能被一点点垫起来。解决问题的过程通常并不是一帆风顺的，这就需要坚持。`所谓胜利者，往往是能比别人多坚持一分钟的人`。勿畏难，勿轻略，让我们在技术路上继续扩大自己的边界，保持学习，持续成长。

4. 改变自己
   我们生活在这个高速发展的时代，各种技术都在不断更新，各种思想也在不停地碰撞，而我们自身的年龄也在不断增加。各种压力袭来，想要直面它们，那就需要你把更多的精力放在自身的持续提升上。因为当你的成长远超周围的其他人，那时候你才可能得到这个社会带给你超额的奖励。当你能坚持看到这里，说明你有一颗想要改变和提升自己的决心，这样的决心一直坚持下去的话，你的目标终将实现。

即便此刻你身处小厂，并且技术天花板很有限，如果你不满足于现状，那么就非常有必要从整体以及全局给自己制定很明确的目标和规划，按照整体的目标来提升自己各方面的前端技术能力，从而迈向更高的台阶，突破自身的瓶颈，走向更广阔的天空！
