class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    const queueElement = { element, priority };
    if (this.isEmpty) {
      this.items.push(queueElement);
    } else {
      const preIndex = this.items.findIndex(item => queueElement.priority < item.priority);
      if (preIndex > -1) {
        this.items.splice(preIndex, 0, queueElement);
      } else {
        this.items.push(queueElement);
      }
    }
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  clear() {
    this.items = [];
  }

  get size() {
    return this.items.length;
  }

  get isEmpty() {
    return !this.items.length;
  }

  print() {
    console.log(this.items);
  }
}


