// 内层作用域可以定义外层作用域的同名变量
{
  let insane = "Hello World";
  {
    let insane = "http";
  }
}

// 暂时性死区
{
  aaaa = 6;
  let aaaa;
  // Uncaught ReferenceError: Cannot access 'aaaa' before initialization
}

// 解构赋值
const obj = {
  a: "a",
  b: "b",
  c: "c",
  d: "d",
};

// 解构的对象不能为undefined、null。否则会报错，故要给被解构的对象一个默认值
const { a, b, c, d: d1 } = obj || {};
// 同名使用
console.log("a: ", a);
// 起别名
console.log("d1: ", d1);
// 设置默认值
const { e: e1 = 5, f = 6 } = obj;
console.log("e1: ", e1);
console.log("f: ", f);
console.log("obj: ", obj); // { a: 'a', b: 'b', c: 'c', d: 'd' }

// 合并数据
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const arr3 = [...new Set([...arr1, ...arr2])];

const obj1 = {
  a: 1,
};
const obj2 = {
  b: 1,
};
const obj3 = { ...obj1, ...obj2 }; //{a:1,b:1}

// Set 对象方法

// add	添加某个值，返回Set对象本身。
// clear	删除所有的键/值对，没有返回值。
// delete	删除某个键，返回true。如果删除失败，返回false。
// forEach	对每个元素执行指定操作。
// has	返回一个布尔值，表示某个键是否在当前 Set 对象之中。

var ta = new Set([1, 2, 3]);
var tb = new Set([4, 3, 2]);
// 数组去重
const tArr = [...new Set([...ta, ...tb])];
console.log("tArr: ", tArr);
// 并集
const tArr1 = [...new Set([...ta, ...tb])];
console.log("tArr: ", tArr1);
// 交集
[...ta].filter(val => tb.has(val));
// 差集
[...ta].filter(val => !tb.has(val));
//
// 拼接字符串
const name = "小明";
const score = 59;
function spaceValue(all, val) {
  return all - val;
}
// 支持变量 支持表达式 支持函数调用
const result = `${name}的考试成绩${score > 60 ? "及格" : "不及格"},差${spaceValue(
  100,
  59
)}就满分了`;
console.log("result: ", result);

// includes 改进if判断
let type = 3;
if (type == 1 || type == 2 || type == 3 || type == 4) {
  //...
}
const condition = [1, 2, 3, 4];

if (condition.includes(type)) {
  //...
}

// find 和 filter的使用区别
// 查找时 find 找到就会返回（也可以判断存不存在） filter会遍历一遍找到所有

// 扁平化数组
const deps = {
  采购部: [1, 2, 3],
  人事部: [5, 8, 12],
  行政部: [5, 14, 79],
  运输部: [3, 64, 105],
};
let member = Object.values(deps).flat(Infinity);
console.log("member: ", member);

// Object.values()返回一个数组，其元素是在对象上找到的可枚举属性值。
// 属性的顺序与通过手动循环对象的属性值所给出的顺序相同。
// var obj = { foo: 'bar', baz: 42 };
// console.log(Object.values(obj)); // ['bar', 42]

// array like object
// var obj = { 0: 'a', 1: 'b', 2: 'c' };
// console.log(Object.values(obj)); // ['a', 'b', 'c']

// flat 可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回
// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat()); // 默认深度 1
// expected output: [0, 1, 2, 3, 4]

// 可选链操作符 ?. 有点
const oName = obj?.name;

// 输入框非空的判断 空值合并运算符 ??当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。
// || 当左侧为假值 0 '' 时 也会返回右侧  ??只判断null和undefined
// if(value !== null && value !== undefined && value !== ''){
//...
// }
var inputValue = "";
if ((value ?? "") !== "") {
  //... 用上了
}

// 短路运算 当左表达式不为 null 或 undefined 时，不会对右表达式进行求值
// 不加括号的情况下 不能和 ||  && 组合使用

// 异步调用
const fn1 = async () => {
  const res1 = await fn1();
  const res2 = await fn2();
  console.log(res1); // 1
  console.log(res2); // 2
};

// 但是要做并发请求时，还是要用到Promise.all()。
const fn2 = () => {
  Promise.all([fn1(), fn2()]).then(res => {
    console.log(res); // [1,2]
  });
};
// 如果并发请求时，只要其中一个异步函数处理完成，就返回结果，要用到Promise.race()

/****对象扩展******/

// 比较值相等 Same-value equality 同值相等 比较两个值是否严格相等
console.log(NaN === NaN); // false
console.log(0 === -0); // true

Object.is(NaN, NaN); // true
Object.is(+0, -0); // false

// Object.assign() 浅拷贝
// 目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
const target = { a: 1, b: 2 };
const source1 = { b: 4, c: 5 };
const source2 = { d: 4, e: 5 };

Object.is(target, Object.assign(target)); // 不合并源对象 返回目标对象

const returnedTarget = Object.assign(target, source1, source2); // 多个源对象

console.log(target); // { a: 1, b: 4, c: 5 } 注意目标对象自身也会改变
console.log(returnedTarget); //{ a: 1, b: 4, c: 5 }
// Object.assign()的返回值其实就是目标对象
Object.is(target, returnedTarget); // true

// target不是对象会转成对象
Object.assign(2); // Number{2}
// undefined和null无法转成对象 会报错
Object.assign(undefined); // 报错
Object.assign(null); // 报错
// 源对象无效会忽略
Object.assign(target, source1, null, undefined, 1, source2); // null, undefined, 1 都会过滤掉

// 对象的遍历方式（扩展）
let obj = {
  name: "jimmy",
  age: 18,
  like: "girl",
};
// for...in的作用是用于遍历对象的。
for (let key in obj) {
  console.log(key, obj[key]);
}

// Object.keys()用于返回对象所有key组成的数组。
Object.keys(obj).forEach(key => {
  console.log(key, obj[key]);
});

// Object.getOwnPropertyNames()用于返回对象所有key组成的数组。
Object.getOwnPropertyNames(obj).forEach(key => {
  console.log(key, obj[key]);
});

// Reflect.ownKeys()用于返回对象所有key组成的数组。

Reflect.ownKeys(obj).forEach(key => {
  console.log(key, obj[key]);
});

// 箭头函数
// 箭头函数中没有this，内部的this就是定义时上层作用域中的this。也就是说，箭头函数内部的this指向是固定的
// 不可以当作构造函数，也就是说，不可以对箭头函数使用new命令，否则会抛出一个错误。
// 箭头函数不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
// 不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

// length属性
// function foo(a, b = 1, c) {
//     console.log(arguments.length)
// }
// foo('a', 'b') //2

// function foo(a, b = 1, c) {
//     console.log(foo.length)
// }
// foo('a', 'b', 'c') // 1 函数指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。

// function foo(a = 2, b = 1, c) {
//     console.log(foo.length)
// }
// foo('a', 'b', 'c') // 0

// Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）

// for...of
// ES6中新增的数组遍历方式
for (let val of [1, 2, 3]) {
  console.log(val); // 1,2,3
}

// Array.prototype.find()
// Array.prototype.findIndex()
// Array.prototype.fill(val,start,end)
// 如果 start 是个负数, 则开始索引会被自动计算成为 length+start, 其中 length 是 this 对象的 length 属性值。如果 end 是个负数, 则结束索引会被自动计算成为 length+end

// const array1 = [1, 2, 3, 4];
// console.log(array1.fill(0, 2, 4)); // [1, 2, 0, 0]
// console.log(array1.fill(5, 1)); //  [1, 5, 5, 5]
// // 只有一个参数，说明其他两项都是默认值，会替换数组全部内容
// console.log(array1.fill(6)); // [6, 6, 6, 6]


// Array.prototype.copyWithin();
// Array.prototype.copyWithin(target, (start = 0), (end = this.length));
// target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
// start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
// end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。
// 将3号位复制到0号位
[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

// -2相当于3号位，-1相当于4号位
[1, 2, 3, 4, 5].copyWithin(0, -2, -1) // [4, 2, 3, 4, 5]

// 参数不足三个，没有的参数就是默认值
[1, 2, 3, 4, 5].copyWithin(-2) // [1, 2, 3, 1, 2]
[1, 2, 3, 4, 5].copyWithin(0, 3) // [4, 5, 3, 4, 5]


// Array.of()
// Array.of()方法用于将一组值，转换为数组。
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1

// Number扩展
Number.isFinite()
Number.isNaN()
Number.isInteger();

// String扩展
console.log("jimmy".includes("mm")); // true

// 区分大小写
'Blue Whale'.includes('blue'); // returns false
String.prototype.startsWith()
// 判断参数字符串是否在原字符串的头部, 返回boolean类型的值。
console.log("jimmy".startsWith("ji")); // true

String.prototype.endsWith()
// 判断参数字符串是否在原字符串的尾部, 返回boolean类型的值。

console.log("jimmy".endsWith("my")); // true
String.prototype.repeat()
// repeat方法返回一个新字符串，表示将原字符串重复n次。
const newStr = "jimmy".repeat(2);
console.log(newStr) // jimmyjimmy

let s1 = Symbol('far')
let s2 = Symbol('far')
console.log(s1) //Symbol(far)
console.log(s2) // Symbol(far)
// `Symbol`函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的`Symbol`函数的返回值是不相等的。
console.log(s1 === s2) // false

// 接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局
let s11 = Symbol.for('far')
let s22 = Symbol.for('far')
console.log(s11 === s22) // true

// Symbol.keyFor()方法返回一个已登记的 Symbol 类型值的key。
console.log(Symbol.keyFor(s1)) // undefined
console.log(Symbol.keyFor(s11)) // far

// Set本身是一个构造函数，用来生成 Set 数据结构  add delete clear has size
// 初始化的参数必须是可遍历的，可以是数组或者自定义遍历的数据结构

// WeakSet成员只能是对象，而不能是其他类型的值



// WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
// add delete clear has size


// WeakMap 键必须是对象 原始数据类型  Symbol不可以  WeakMap的键是不可枚举的

// codePointAt 字符串查询

// padStart()  padEnd();  补齐数据  padStart(10, '-')   10位缺位用-补齐

// startWith() endWith();  
// 时间去零

// 一个错误 对象声明成数组 可以存值 但是JSON字符串化 变成 null

// 基础知识记忆不牢固 需要查手册

