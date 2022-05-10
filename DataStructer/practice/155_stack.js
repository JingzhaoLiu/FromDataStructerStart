// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

class MinStack {
  constructor() {
    this.stackA = [];
  }

  // input stack
  push(item) {
    const minValue =
      this.isEmpty() || item <= this.stackA[this.stackA.length - 1].min
        ? item
        : this.stackA[this.stackA.length - 1].min;

    this.stackA[this.stackA.length] = {
      value: item,
      min: minValue,
    };
  }

  // output stack
  pop() {
    if (this.isEmpty()) {
      return;
    }
    return this.stackA.pop().value;
  }

  top() {
    return this.stackA[this.stackA.length - 1].value;
  }

  isEmpty() {
    return this.stackA.length === 0;
  }

  // min
  getMin() {
    return this.stackA[this.stackA.length - 1].min;
  }
}

const minStack = new MinStack();
minStack.push(-10);
minStack.push(14);
minStack.push(-20);
minStack.pop();
minStack.push(-10);
minStack.push(10);
minStack.push(-7);
minStack.pop();
minStack.push(-7);
minStack.pop();
console.log("minStack: ", minStack);

// [
//   "MinStack",
//   "push",
//   "push",
//   "getMin",
//   "getMin",
//   "push",
//   "getMin",
//   "getMin",
//   "top",
//   "getMin",
//   "pop",
//   "push",
//   "push",
//   "getMin",
//   "push",
//   "pop",
//   "top",
//   "getMin",
//   "pop",
// ][([], [-10], [14], [], [], [-20], [], [], [], [], [], [10], [-7], [], [-7], [], [], [], [])];

// // [
//   null,
//   null,
//   null,
//   -10,
//   -10,
//   null,
//   -20,
//   -20,
//   -20,
//   -20,
//   null,
//   null,
//   null,
//   -20,
//   null,
//   null,
//   -7,
//   -20,
//   null,
// ];

// [
//   null,
//   null,
//   null,
//   -10,
//   -10,
//   null,
//   -20,
//   -20,
//   -20,
//   -20,
//   null,
//   null,
//   null,
//   -10,
//   null,
//   null,
//   -7,
//   -10,
//   null,
// ];
