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


function tenCoverTwo(n){
  // 自带的方法
  // return n.toString(2)

  // let result = "";
  // const arrStack = [];

  // const numArr = n.toString().split(".");
  // let inter = numArr[0];
  // let decimal = numArr[1];

  // // 整数处理
  // while (inter >= 2) {
  //   arrStack.push(inter % 2);
  //   inter = Math.floor(inter / 2);
  //   if (inter < 2) {
  //     arrStack.push(inter);
  //   }
  // }

  // 小数处理  乘以2  顺序排列 0.111

  // 0.111 * 2 = 0.222 
  // 0.222 * 2 = 0.444
  // 0.444 * 2 = 0.888
  // 0.888 * 2 = 1.776

  let res = "0.";
  let n = 0.11;
  let time = 0;

  while (n !== 0) {
    n = n * 2;
    // 整数
    let p = Math.trunc(n);
    // 小数
    n = n % 1;
    // 结果顺序相加
    res += p;

    if (res.length == 22) {
      break;
    }
  }
  console.log("res: ", res);







  








  return result;
}



// 判断字符串的括号是否有效：有效的括号  左括号入栈 右括号出栈 栈为空

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
