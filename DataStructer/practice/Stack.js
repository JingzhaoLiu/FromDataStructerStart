class Stack {
  constructor() {
    this.data = [];
    this.count = 0;
  }
  // input stack
  push(item) {
    // 1. Array push
    // this.data.push(item)
    // 2. Array length
    // this.data[this.data.length] = item
    // 3. count
    this.data[this.count] = item;
    this.count++;
  }

  // output stack
  pop() {
    if (this.isEmpty()) {
      console.log("Stack isEmpty");
      return;
    }
    // 1. Array pop
    // const value = this.data.pop()
    // return value;
    // 2. delete
    // const value = this.data[this.data.length - 1];
    // delete this.data[this.data.length - 1];   //删除掉的值为undefined 还占着位置 this.data.length没有变
    // this.data.length--
    // // 可以合并上两行代码
    // // delete this.data[--this.data.length];
    // return value;
    // 3. Array length - 1 设置 length 属性的值来截断任何数组
    // const value = this.data[this.data.length - 1];
    // this.data.length--;
    // return value;
    // 4. count  可以合并： return this.data[--this.count]
    const value = this.data[this.count - 1];
    this.count--;
    return value;
  }

  top() {
    if (this.isEmpty()) {
      console.log("Stack isEmpty");
      return;
    }

    return this.data[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    this.data = [];
    this.count = 0;
  }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
const top = s.top();
console.log("top: ", top);
const topValue = s.pop();
console.log("topValue: ", topValue);
