// 基于数组实现

// 基于对象实现

class Queue {
  constructor() {
    this.queue = {};
    this.head = 0;
    this.foot = 0;
  }

  enqueue(item) {
    this.queue[this.foot] = item;
    this.foot++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return;
    }

    const value = this.queue[this.head]
    delete this.queue[this.head]
    this.head++;
    return value;
  }

  isEmpty() {
    return this.foot - this.count === 0;
  }

  clear() {
    this.queue = [];
    this.count = 0;
    this.head = 0;
  }
}

const queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
// console.log('queue: ', queue);
queue.dequeue()
queue.dequeue()
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
console.log("queue: ", queue);
