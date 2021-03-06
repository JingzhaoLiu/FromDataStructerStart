# JavaScript 核心原理精讲 5/26

## 开篇

扎实掌握并加强原生 JavaScript 的核心原理及编码功底、深入理解前端框架源代码，对于提升自己的前端技术能力、提高职业生涯天花板是非常有必要的。

希望你不仅跟着我的思路去理解内容本身，还能在学习过程中亲自动手实现一遍，从而深刻体会程序实现逻辑的一些细节，进而加深对每一部分知识点的理解，做到融会贯通。

你也不妨给自己养成一个好习惯，每看完一篇文章就对知识点进行总结，形成自己的学习思维脑图，等到学完全部课程以后再来回顾，以便加深知识理解。

希望这个专栏，能够带你了解原生 JS 的底层原理，更好地掌握 JS 框架源码的代码实现逻辑，在写业务代码时可以做到游刃有余，提升工作效率，加强自身技术储备，拿高薪，进大厂！

## JS 数据类型的相关知识（概念、检测方法、转换方法）

1. 基础类型：
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

2. 检测

```js
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof null // 'object'
typeof [] // 'object'
typeof {} // 'object'
typeof console // 'object'
typeof console.log // 'function'

[] instanceof Array


Object.prototype.toString({})       // "[object Object]"
Object.prototype.toString.call({})  // 同上结果，加上call也ok
Object.prototype.toString.call(1)    // "[object Number]"
Object.prototype.toString.call('1')  // "[object String]"
Object.prototype.toString.call(true)  // "[object Boolean]"
Object.prototype.toString.call(function(){})  // "[object Function]"
Object.prototype.toString.call(null)   //"[object Null]"
Object.prototype.toString.call(undefined) //"[object Undefined]"
Object.prototype.toString.call(/123/g)    //"[object RegExp]"
Object.prototype.toString.call(new Date()) //"[object Date]"
Object.prototype.toString.call([])       //"[object Array]"
Object.prototype.toString.call(document)  //"[object HTMLDocument]"
Object.prototype.toString.call(window)   //"[object Window]"

```

```js
function myInstanceOf(left, right) {
  // 限定范围

  if (left === null || typeof left !== "object") return false;

  // 原型链判断
  let proto = Object.getPrototypeOf(left);
  while (true) {
    // 找到最后了 没有找到
    if (proto === null) return false;

    // 找到了
    // Object.getPrototypeOf(value) === Number.prototype;
    if (proto === right.prototype) return true;

    // 当前没有找到 查找上一层
    proto = Object.getPrototypeOf(proto);
  }
}

console.log(myInstanceOf(new Number(1), Number));
console.log(myInstanceOf(123, Number));
```

```js
function getType(obj) {
  let type = typeof obj;
  if (type !== "object") {
    // 先进行typeof判断，如果是基础数据类型，直接返回
    return type;
  }
  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, "$1"); // 注意正则中间有个空格
}
/* 代码验证，需要注意大小写，哪些是typeof判断，哪些是toString判断？思考下 */
getType([]); // "Array" typeof []是object，因此toString返回
getType("123"); // "string" typeof 直接返回
getType(window); // "Window" toString返回
getType(null); // "Null"首字母大写，typeof null是object，需toString来判断
getType(undefined); // "undefined" typeof 直接返回
getType(); // "undefined" typeof 直接返回
getType(function () {}); // "function" typeof能判断，因此首字母小写
getType(/123/g); //"RegExp" toString返回
```

3. 数据类型转换 (todo:可以参考红宝书里的相关篇幅)

```js
'123' == 123   //  true
'' == null    // false
'' == 0        // true

[] == 0        // true
[] == ''       // true
[] == ![]      // true
// const a = []; a.valueOf() //[] a.toString() // ''


null == undefined //  true
Number(null)     // 0
Number('')      // 0
Number(undefined)      // NaN
parseInt('');    // NaN
{}+10           // 返回什么？  10
10+{}           // 返回什么？  '10[object Object]'
let obj = {
    [Symbol.toPrimitive]() {   // 优先级最高
        return 200;
    },
    valueOf() {  // 优先级第二

        return 300;
    },
    toString() {    // 优先级最低
        return 'Hello';
    }
}
console.log(obj + 200); // 400

```

3.1 强制转换

<!-- Number()、parseInt()、parseFloat()、toString()、String()、Boolean() -->

3.1.1 Number() 方法的强制转换规则

如果是布尔值，true 和 false 分别被转换为 1 和 0；

如果是数字，返回自身；

如果是 null，返回 0；

如果是 undefined，返回 NaN；

如果是字符串，遵循以下规则：如果字符串中只包含数字（或者是 0X / 0x 开头的十六进制数字字符串，允许包含正负号），则将其转换为十进制；如果字符串中包含有效的浮点格式，将其转换为浮点数值；如果是空字符串，将其转换为 0；如果不是以上格式的字符串，均返回 NaN；

如果是 Symbol，抛出错误；

如果是对象，并且部署了 [Symbol.toPrimitive] ，那么调用此方法，否则调用对象的 valueOf() 方法，然后依据前面的规则转换返回的值；如果转换的结果是 NaN ，则调用对象的 toString() 方法，再次依照前面的顺序转换返回对应的值。

```js
Number(true); // 1
Number(false); // 0
Number("0111"); //111
Number(null); //0
Number(""); //0
Number("1a"); //NaN
Number(-0x11); //-17
Number("0X11"); //17
```

3.1.2 Boolean() 方法的强制转换规则

这个方法的规则是：除了 undefined、 null、 false、 ''、 0（包括 +0，-0）、 NaN 转换出来是 false，其他都是 true。

```js
Boolean(0); //false
Boolean(null); //false
Boolean(undefined); //false
Boolean(NaN); //false
Boolean(""); //false
Boolean(false); //false
Boolean(1); //true
Boolean(13); //true
Boolean("12"); //true
```

3.1.3 parseInt()

数字：返回整数 10 进制
字符串：以数字开始（或者是 0X / 0x 开头的十六进制数字字符串，允许包含正负号） 返回整数  
其他（空字符串、null、undefined、true、false 等等） NaN

3.1.4 parseFloat()

数字：返回浮点数 10 进制
字符串：以数字开始（或者是 0X / 0x 开头的十六进制数字字符串，允许包含正负号） 返回浮点数  
其他（空字符串、null、undefined、true、false 等等） NaN

3.1.5 String()

原始类型值
number
string
null
undefined
boolean
对象
ToPrimitive·得到原始值再转换
对象
String({a: 1}) // "[object Object]"  
 类型字符串
数组
String([1, 2, 3]) // "1,2,3"
该数组的字符串形式
String([1,2,[4,3,[3,4,5]],])
"1,2,4,3,3,4,5"
可以铺平纯数字数组

3.2 隐式类型转换

凡是通过逻辑运算符 (&&、 ||、 !)、运算符 (+、-、\*、/)、关系操作符 (>、 <、 <= 、>=)、相等运算符 (==) 或者 if/while 条件的操作，如果遇到两个数据类型不一样的情况，都会出现隐式类型转换

3.2.1 '==' 的隐式类型转换规则

如果类型相同，无须进行类型转换；

如果其中一个操作值是 null 或者 undefined，那么另一个操作符必须为 null 或者 undefined，才会返回 true，否则都返回 false；

如果其中一个是 Symbol 类型，那么返回 false；

两个操作值如果为 string 和 number 类型，那么就会将字符串转换为 number；

如果一个操作值是 boolean，那么转换成 number；

如果一个操作值为 object 且另一方为 string、number 或者 symbol，就会把 object 转为原始类型再进行判断（调用 object 的 valueOf/toString 方法进行转换）。

```js
null == undefined; // true  规则2
null == 0; // false 规则2
"" == null; // false 规则2
"" == 0; // true  规则4 字符串转隐式转换成Number之后再对比
"123" == 123; // true  规则4 字符串转隐式转换成Number之后再对比
0 == false; // true  e规则 布尔型隐式转换成Number之后再对比
1 == true; // true  e规则 布尔型隐式转换成Number之后再对比
var a = {
  value: 0,
  valueOf: function () {
    this.value++;
    return this.value;
  },
};
// 注意这里a又可以等于1、2、3
console.log(a == 1 && a == 2 && a == 3); //true f规则 Object隐式转换
// 注：但是执行过3遍之后，再重新执行a==3或之前的数字就是false，因为value已经加上去了，这里需要注意一下
```

3.2.2 '+' 的隐式类型转换规则

'+' 号操作符，不仅可以用作数字相加，还可以用作字符串拼接。仅当 '+' 号两边都是数字时，进行的是加法运算；如果两边都是字符串，则直接拼接，无须进行隐式类型转换。

除了上述比较常规的情况外，还有一些特殊的规则，如下所示。

如果其中有一个是字符串，另外一个是 undefined、null 或布尔型，则调用 toString() 方法进行字符串拼接；如果是纯对象、数组、正则等，则默认调用对象的转换方法会存在优先级（下一讲会专门介绍），然后再进行拼接。

如果其中有一个是数字，另外一个是 undefined、null、布尔型或数字，则会将其转换成数字进行加法运算，对象的情况还是参考上一条规则。

如果其中一个是字符串、一个是数字，则按照字符串规则进行拼接。

```js
"1" + undefined; // "1undefined" 规则1，undefined转换字符串
"1" + null; // "1null" 规则1，null转换字符串
"1" + true; // "1true" 规则1，true转换字符串
"1" + 1n; // '11' 比较特殊字符串和BigInt相加，BigInt转换为字符串
1 + undefined; // NaN  规则2，undefined转换数字相加NaN
1 + null; // 1    规则2，null转换为0
1 + true; // 2    规则2，true转换为1，二者相加为2
1 + 1n; // 错误  不能把BigInt和Number类型直接混合相加
"1" + 3; // '13' 规则3，字符串拼接
```

3.2.3 Object 的转换规则

对象转换的规则，会先调用内置的 [ToPrimitive] 函数，其规则逻辑如下：

如果部署了 Symbol.toPrimitive 方法，优先调用再返回；

调用 valueOf()，如果转换为基础类型，则返回；

调用 toString()，如果转换为基础类型，则返回；

如果都没有返回基础类型，会报错。

```js
var obj = {
  value: 1,
  valueOf() {
    return 2;
  },
  toString() {
    return '3'
  },
  [Symbol.toPrimitive]() {
    return 4
  }
}
console.log(obj + 1); // 输出5

10 + {}
// "10[object Object]"，注意：{}会默认调用valueOf是{}，不是基础类型继续转换，调用toString，返回结果"[object Object]"，于是和10进行'+'运算，按照字符串拼接规则来，
参考'+'的规则C

// {}+10与10+{}
// 结果不一样，是因为js引擎在执行{}+10时，会将{}当作空的代码块忽略，所以实际上运行的是+10，相当于Number(10)结果就是10;而10+{}会将{}调用toString()成[object Object]字符串(valueOf()返回的不是基本类型)，结果为10[object Object]

[1,2,undefined,4,5] + 10
// "1,2,,4,510"，注意[1,2,undefined,4,5]会默认先调用valueOf结果还是这个数组，不是基础数据类型继续转换，也还是调用toString，返回"1,2,,4,5"，然后再和10进行运算，还是按照字符串拼接规则，参考'+'的第3条规则

```

![隐式转换](../img/js_tag_chang.png)

![隐式转换思维导图](../img/js_tag_change_xmind.png)

## 深浅拷贝

1. object.assign 方法有几点需要注意：

它不会拷贝对象的继承属性；

它不会拷贝对象的不可枚举的属性；

可以拷贝 Symbol 类型的属性。

```js
let obj1 = { a: { b: 1 }, sym: Symbol(1) };
Object.defineProperty(obj1, "innumerable", {
  value: "不可枚举属性",
  enumerable: false,
});
let obj2 = {};
Object.assign(obj2, obj1);
obj1.a.b = 2;
console.log("obj1", obj1);
console.log("obj2", obj2);
```

2. 扩展运算符方式

```js
/* 对象的拷贝 */
let obj = { a: 1, b: { c: 1 } };
let obj2 = { ...obj };
obj.a = 2;
console.log(obj); //{a:2,b:{c:1}} console.log(obj2); //{a:1,b:{c:1}}
obj.b.c = 2;
console.log(obj); //{a:2,b:{c:2}} console.log(obj2); //{a:1,b:{c:2}}
/* 数组的拷贝 */
let arr = [1, 2, 3];
let newArr = [...arr]; //跟arr.slice()是一样的效果
```

3. concat slice

```js
let arr = [1, 2, 3];
let newArr = arr.concat();
newArr[1] = 100;
console.log(arr); // [ 1, 2, 3 ]
console.log(newArr); // [ 1, 100, 3 ]

let arr = [1, 2, { val: 4 }];
let newArr = arr.slice();
newArr[2].val = 1000;
console.log(arr); //[ 1, 2, { val: 1000 } ]
```

```js
const map = {
  a: 1,
  b: { c: 1 },
};
const shallowClone = target => {
  //  <!-- object -->
  if (typeof target === "object" && target !== null) {
    const cloneTarget = Array.isArray(target) ? [] : {};
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = target[prop];
      }
    }
    return cloneTarget;
  }

  //  <!-- primitive -->

  return target;
};
```

### 深拷贝的原理和实现

方法一：乞丐版（JSON.stringify）

```js
let obj1 = { a:1, b:[1,2,3] }
let str = JSON.stringify(obj1)；
let obj2 = JSON.parse(str)；
console.log(obj2);   //{a:1,b:[1,2,3]}
obj1.a = 2；
obj1.b.push(4);
console.log(obj1);   //{a:2,b:[1,2,3,4]}
console.log(obj2);   //{a:1,b:[1,2,3]}
```

但是使用 JSON.stringify 实现深拷贝还是有一些地方值得注意，我总结下来主要有这几点：

- 拷贝的对象的值中如果有函数、undefined、symbol 这几种类型，经过 JSON.stringify 序列化之后的字符串中这个键值对会消失；
-
- 拷贝 Date 引用类型会变成字符串；
-
- 无法拷贝不可枚举的属性；
-
- 无法拷贝对象的原型链；
-
- 拷贝 RegExp 引用类型会变成空对象；
-
- 对象中含有 NaN、Infinity 以及 -Infinity，JSON 序列化的结果会变成 null；
-
- 无法拷贝对象的循环应用，即对象成环 (obj[key] = obj)。

```js
function Obj() {
  this.func = function () {
    alert(1);
  };
  this.obj = { a: 1 };
  this.arr = [1, 2, 3];
  this.und = undefined;
  this.reg = /123/;
  this.date = new Date(0);
  this.NaN = NaN;
  this.infinity = Infinity;
  this.sym = Symbol(1);
}
let obj1 = new Obj();
Object.defineProperty(obj1, "innumerable", {
  enumerable: false,
  value: "innumerable",
});
console.log("obj1", obj1);
let str = JSON.stringify(obj1);
let obj2 = JSON.parse(str);
console.log("obj2", obj2);
```

方法二：基础版（手写递归实现）

```js
let obj1 = {
  a: {
    b: 1,
  },
};

function deepClone(target) {
  let cloneObj = Array.isArray(target) ? [] : {};

  for (let prop in target) {
    if (typeof target[prop] === "object" && target[prop] !== null) {
      cloneObj[prop] = deepClone(target[prop]);
    } else {
      cloneObj[prop] = target[prop];
    }
  }
  return cloneObj;
}

let obj2 = deepClone(obj1);
obj1.a.b = 2;
console.log(obj2); //  {a:{b:1}}
```

```js
const isComplexDataType = obj =>
  (typeof obj === "object" || typeof obj === "function") && obj !== null;
const deepClone = function (obj, hash = new WeakMap()) {
  if (obj.constructor === Date) return new Date(obj); // 日期对象直接返回一个新的日期对象
  if (obj.constructor === RegExp) return new RegExp(obj); //正则对象直接返回一个新的正则对象
  //如果循环引用了就用 weakMap 来解决
  if (hash.has(obj)) return hash.get(obj);
  let allDesc = Object.getOwnPropertyDescriptors(obj);
  //遍历传入参数所有键的特性
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
  //继承原型链
  hash.set(obj, cloneObj);
  for (let key of Reflect.ownKeys(obj)) {
    cloneObj[key] =
      isComplexDataType(obj[key]) && typeof obj[key] !== "function"
        ? deepClone(obj[key], hash)
        : obj[key];
  }
  return cloneObj;
};
// 下面是验证代码
let obj = {
  num: 0,
  str: "",
  boolean: true,
  unf: undefined,
  nul: null,
  obj: { name: "我是一个对象", id: 1 },
  arr: [0, 1, 2],
  func: function () {
    console.log("我是一个函数");
  },
  date: new Date(0),
  reg: new RegExp("/我是一个正则/ig"),
  [Symbol("1")]: 1,
};
Object.defineProperty(obj, "innumerable", {
  enumerable: false,
  value: "不可枚举属性",
});
obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj));
obj.loop = obj; // 设置loop成循环引用的属性
let cloneObj = deepClone(obj);
cloneObj.arr.push(4);
console.log("obj", obj);
console.log("cloneObj", cloneObj);
```

<!-- weakMap 和 Map 区别 -->

<!-- 还是没有懂为什么要用weakMap，而且let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)，这行代码不就已经复制出了一份新的对象了吗，为什么后面还要重新使用循环重新赋值对象属性，希望有人能够解答一下，谢谢！

  
weakmap 防止内存泄漏，循环引用复制起来会比较吃内存如果不用weakmap会有问题 -->

可以看到通过这一个问题能考察的能力有很多，因此千万不要用最低的标准来要求自己，应该用类似的方法去分析每个问题深入考察的究竟是什么，这样才能更好地去全面提升自己的基本功。
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

```js
var fun2;
function fun1() {
  var a = 2;
  fun2 = () => {
    console.log(2);
  };
}

fun1();
fun2();
```

```js
回调函数
作为函数参数传递的形式(计数器)
IIFE（立即执行函数）
```

```js
for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}
// 结果输出的是 5 个 6，那么一般面试官都会先问为什么都是 6？我想让你实现输出 1、2、3、4、5 的话怎么办呢？

// 因此结合本讲所学的知识我们来思考一下，应该怎么给面试官一个满意的解释。你可以围绕这两点来回答。

// 1. setTimeout 为宏任务，由于 JS 中单线程 eventLoop 机制，在主线程同步任务执行完后才去执行宏任务，因此循环结束后 setTimeout 中的回调才依次执行。

// 2. 因为 setTimeout 函数也是一种闭包，往上找它的父级作用域链就是 window，变量 i 为 window 上的全局变量，开始执行 setTimeout 之前变量 i 已经就是 6 了，因此最后输出的连续就都是 6。
for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j);
    }, 0);
  })(i);
}

for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

for (var i = 1; i <= 5; i++) {
  setTimeout(
    function (j) {
      console.log(j);
    },
    0,
    i
  );
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

## 异步编程

回调函数、事件监听、Promise、Generator、async/await

什么是同步？
所谓的同步就是在执行某段代码时，在该代码没有得到返回结果之前，其他代码暂时是无法执行的，但是一旦执行完成拿到返回值之后，就可以执行其他代码了。换句话说，在此段代码执行完未返回结果之前，会阻塞之后的代码执行，这样的情况称为同步。

什么是异步？
所谓异步就是当某一代码执行异步过程调用发出后，这段代码不会立刻得到返回结果。而是在异步调用发出之后，一般通过回调函数处理这个调用之后拿到结果。异步调用发出后，不会影响阻塞后面的代码执行，这样的情形称为异步。

## 垃圾回收

对于简单的数据类型，内存是保存在栈（stack）空间中的；复杂数据类型，内存保存在堆（heap）空间中。简而言之，基本就是说明以下两点。

基本类型：这些类型在内存中会占据固定的内存空间，它们的值都保存在栈空间中，直接可以通过值来访问这些；

引用类型：由于引用类型值大小不固定（比如上面的对象可以添加属性等），栈内存中存放地址指向堆内存中的对象，是通过引用来访问的。

栈内存中的基本类型，可以通过操作系统直接处理；而堆内存中的引用类型，正是由于可以经常变化，大小不固定，因此需要 JavaScript 的引擎通过垃圾回收机制来处理。

1. 新生代内存回收

from | to

图中左边部分表示正在使用的内存空间，右边是目前闲置的内存空间。当浏览器开始进行内存的垃圾回收时，JavaScript 的 V8 引擎会将左边的对象检查一遍。如果引擎检测是存活对象，那么会复制到右边的内存空间去；如果不是存活的对象，则直接进行系统回收。当所有左边的内存里的对象没有了的时候，等再有新生代的对象产生时，上面的部分左右对调（标记一下 比移动数据快），这样来循环处理。

有的被清理 有的还保留 内存占用就是零散的（不规则排列）
算法 Scavenge，它主要就是解决内存碎片的情况（规则排列）

2. 老生代内存回收
   只要是已经经历过一次 Scavenge 算法回收的，就可以晋升为老生代内存的对象。那么在进入老生代的内存回收机制中，就不能再用 Scavenge 的算法了。
   Mark-Sweep（标记清除） 和 Mark-Compact（标记整理）的策略
   Mark-Sweep：标记阶段和清除阶段。

首先它会遍历堆上的所有的对象，分别对它们打上标记；然后在代码执行过程结束之后，对使用过的变量取消标记。那么没取消标记的就是没有使用过的变量，因此在清除阶段，就会把还有标记的进行整体清除，从而释放内存空间。

但是其实通过标记清除之后，还是会出现上面图中的内存碎片的问题。就需要标记整理。

标记整理添加了活动对象整理阶段，处理过程中会将所有的活动对象往一端靠拢，整体移动完成后，直接清理掉边界外的内存

- 内存泄漏的场景：

  - 过多的缓存未释放；

  - 闭包太多未释放；

  - 定时器或者回调太多未释放；

  - 太多无效的 DOM 未释放；

  - 全局变量太多未被发现。

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
