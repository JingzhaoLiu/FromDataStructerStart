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


class Stack {
  
  constructor() {
    this.items = [];
  }

  push(e) {
    this.items.push(e);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek(){
    return this.items[this.items.length - 1];
  }

  size(){
    return this.items.length;
  }

  clear(){
    this.items = [];
  }
}

// push(element(s)):添加一个(或几个)新元素到栈顶。
// pop():移除栈顶的元素，同时返回被移除的元素。
// peek():返回栈顶的元素，不对栈做任何修改(该方法不会移除栈顶的元素，仅仅返回它)。
// isEmpty():如果栈里没有任何元素就返回 true，否则返回 false。
// clear():移除栈里的所有元素。 this.items = [];
// size():返回栈里的元素个数。该方法和数组的 length 属性很类似。


//输入需要转化的十进制数
function d2b(number) {
    let stack = new Stack()
    while (number > 0) {
        stack.push(number % 2)
        number = Math.floor(number / 2)
    }

    let string = ''
    while (!stack.isEmpty()) {
        string += stack.pop()
    }

    return string
}

console.log(d2b(168)) // 10101000