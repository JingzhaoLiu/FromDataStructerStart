const queue = [];
queue.push(1);
queue.push(2);
const item1 = queue.shift();
const item2 = queue.shift();

// 场景

// 排队
// js异步中任务队列  Callback Queue
// 计算最近请求次数 [[],[1],[100],[3001],[3002]]

class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {}; // 为了写出一个在获取元素时更高效的数据结构，我们将使用一个对象来存储我们的元素
  }

  enqueue(e) {
    this.items[this.count] = e;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  size(){
    return this.count - this.lowestCount;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }

  isEmpty(){
    return this.size() === 0;
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  
  toString() {
    if(this.isEmpty()) return '';

    let objString = `${this.items[this.lowestCount]}`

    for (let i = this.lowestCount + 1; i < this.count; i++){
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
  //   enqueue(element(s)):向队列尾部添加一个(或多个)新的项。
  //   dequeue():移除队列的第一项(即排在队列最前面的项)并返回被移除的元素。
  //   peek():返回队列中第一个元素——最先被添加，也将是最先被移除的元素。
  //   isEmpty():如果队列中不包含任何元素，返回 true，否则返回 false。
  //   size():返回队列包含的元素个数，与数组的 length 属性类似。
}
