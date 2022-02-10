const stack = [];

stack.push(1);
stack.push(2);

const item1 = stack.pop();
const item2 = stack.pop();

/*****栈的应用场景******/

// 十进制转二进制：后出来的余数反而排到前面，余数依次入栈，依次出栈，实现余数倒序输出

// 纯整数 10 => 2
let n = 10;
let target = 2;
const arrStack = [];

while (n >= target) {
  arrStack.push(n % target);
  n = Math.floor(n / target);
  if (n < target) {
    arrStack.push(n);
  }
}
console.log("arrStack: ", arrStack);

// let result = "";

// for (let index = arrStack.length - 1; index >= 0; index--) {
//   const element = arrStack[index];
//   result += element;
// }

let result = arrStack.reduce((res, cur) => cur + res, "");

console.log("result: ", result);

// 判断字符串的括号是否有效：有效的括号

// 函数的调用堆栈 callStack.js

const func1 = () => {
  func2();
};

const func2 = () => {
  func3();
};

const func3 = () => {};

func1();

// 打断点可以查看数据流动
