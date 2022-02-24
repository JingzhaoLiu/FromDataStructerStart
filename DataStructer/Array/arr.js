var arr1 = new Array(); // 创建一个空数组
var arr2 = new Array(3); // 创建一个3个空位的数组
var arr3 = new Array('3'); // 创建一个第一位是字符串3的数组

// 一位数字就是创建 多少大小的空数组
// 不是数字或者多位就是创建 有内容的数组


// push pop unshift shift

// splice 删除 替换任意位置元素 
// 索引可以是负的 
// 返回 删除的元素 或者空数组 
// 原数组改变

// slice(begin,end)
// 浅拷贝包括 
// begin，不包括 end 支持负值





// @@iterator 
// 返回一个包含数组键值对的迭代器对象，可以通过同步调用得到数组元素的键值对 
// @@iterator 属性，需要通过 Symbol.iterator 来访问。
//     let iterator = numbers[Symbol.iterator]();
//     console.log(iterator.next().value); // 1

// entries 
// 返回包含数组所有键值对的@@iterator

// keys
// 返回包含数组所有索引的@@iterator 

// values
// 返回包含数组中所有值的@@iterator

// numbersCopy.fill(2, 1);
// 上面的例子里，数组中从 1 开始的所有位置上的值都是 2  ([0, 2, 2, 2, 2, 2])。 同样，我们也可以指定结束填充的索引。
// numbersCopy.fill(1, 3, 5);
// 在上面的例子里，我们会把 1 填充到数组索引 3 到 5 的位置(不包括 5)， 得到的数组为 [0, 2, 2, 1, 1, 2]。
// var arr = Array(3).fill({}) // [{}, {}, {}];
// 需要注意如果fill的参数为引用类型，会导致都执行同一个引用类型
// 如 arr[0] === arr[1] 为true
// arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]

// 类型数组
// https://www.html5rocks.com/en/tutorials/webgl/typed_arrays/