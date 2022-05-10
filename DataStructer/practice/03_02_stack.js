//leetcode https://leetcode.cn/problems/min-stack-lcci/

// 请设计一个栈，除了常规栈支持的pop与push函数以外，还支持min函数，该函数返回栈元素中的最小值。
// 执行push、pop和min操作的时间复杂度必须为O(1)。

// 示例：

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.getMin();   --> 返回 -2.

class MinStack {
  constructor() {
    this.stackA = [];
    this.countA = 0;
    // 统计当前序列最小值
    this.stackB = [];
    this.countB = 0;
  }

  // input stack
  push(item) {
    this.stackA[this.countA] = item;
    this.countA++;

    if (this.countB === 0 || item <= this.getMin()) {
      this.stackB[this.countB] = item;
      this.countB++;
    }
  }

  // output stack
  pop() {
    if (this.isEmpty()) {
      return;
    }

    const value = this.top();
    if (value === this.getMin()) {
      this.countB--;
    }

    this.countA--;
    return value;
  }

  top() {
    return this.stackA[this.countA - 1];
  }

  isEmpty() {
    return this.countA === 0;
  }

  // min
  getMin() {
    return this.stackB[this.countB - 1];
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
