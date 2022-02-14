/**数组结构**/
// 以前获取数组里面值得方式
var names = ["abc", "cba", "nba"];
// var item1 = names[0]
// var item2 = names[1]
// var item3 = names[2]

// 对数组的解构: []
let [item1, item2, item3] = names;
console.log(item1, item2, item3); // abc cba nba

// 解构后面的元素
let [, , itemz] = names;
console.log(itemz); // nba
// 解构中间的元素
let [, item] = names;
console.log(item); // cba

// 解构出一个元素,后面的元素放到一个新数组中
let [itemx, ...newNames] = names;
console.log(itemx, newNames); // abc ['cba', 'nba']

// 解构的默认值
let [itema, itemb, itemc, itemd = "aaa"] = names;
console.log(itemd); // aaa

// 通过解构交换变量
let a = 1;
let b = 3;
[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

/**函数参数解构**/

function add([x, y]) {
  return x + y;
}
const res = add([1, 2]); //? 3
console.log("res: ", res);

function move({ x = 0, y = 0 } = {}) {
  return [x, y];
}
move({ x: 3, y: 8 }); //? [3, 8]
move({ x: 3 }); //? [3, 0]
move({}); //? [0, 0]
move(); //? [0, 0]



console.log(...[1, 2, 3]);
const namesList = ["abc", "cba", "nba"];
const info = { name: "why", age: 18 };
const obj1111 = { ...info, address: "成都市", ...namesList }; //?
// {0: 'abc', 1: 'cba', 2: 'nba', name: 'why', age: 18, address: '成都市'}