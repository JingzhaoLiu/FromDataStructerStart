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

// 拼接字符串
const name = "小明";
const score = 59;
const result = `${name}的考试成绩${score > 60 ? "及格" : "不及格"}`;

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
    '采购部':[1,2,3],
    '人事部':[5,8,12],
    '行政部':[5,14,79],
    '运输部':[3,64,105],
}
let member = Object.values(deps).flat(Infinity);
console.log('member: ', member);

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
var inputValue = '';
if((value??'') !== ''){
  //...
}

// 短路运算 当左表达式不为 null 或 undefined 时，不会对右表达式进行求值
// 不加括号的情况下 不能和 ||  && 组合使用

// 异步调用
const fn = async () =>{
  const res1 = await fn1();
  const res2 = await fn2();
  console.log(res1);// 1
  console.log(res2);// 2
}

// 但是要做并发请求时，还是要用到Promise.all()。
const fn = () =>{
   Promise.all([fn1(),fn2()]).then(res =>{
       console.log(res);// [1,2]
   }) 
}
// 如果并发请求时，只要其中一个异步函数处理完成，就返回结果，要用到Promise.race()


