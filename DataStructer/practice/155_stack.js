// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// 实现 MinStack 类:

// MinStack() 初始化堆栈对象。
// void push(int val) 将元素val推入堆栈。
// void pop() 删除堆栈顶部的元素。
// int top() 获取堆栈顶部的元素。
// int getMin() 获取堆栈中的最小元素。


class MinStack {
  constructor() {
    this.stackA = [];
  }

  // input stack
  push(item) {
    this.stackA[this.stackA.length] = item;
  }

  // output stack
  pop() {
    if (this.isEmpty()) {
      return;
    }
    return this.stackA.pop();
  }

  top() {
    return this.stackA[this.stackA.length - 1];
  }

  isEmpty() {
    return this.stackA.length === 0;
  }

  // min
  getMin() {
    return Math.min.apply(null,this.stackA);
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
const top1 = minStack.getMin(); // --> 返回 -3.
console.log("top1: ", top1);
minStack.pop();
const top2 = minStack.top(); // --> 返回 0.
console.log("top2: ", top2);
const top3 = minStack.getMin(); // --> 返回 -2.
console.log("top3: ", top3);
