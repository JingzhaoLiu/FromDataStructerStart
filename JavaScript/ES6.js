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
