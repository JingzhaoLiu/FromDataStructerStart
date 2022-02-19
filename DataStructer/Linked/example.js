// 翻转链表
let prev = "head";
while (curr) {
  next = curr.next;
  curr.next = prev;
  prev = curr;
  curr = next;
}

// 查找链表中间结点  快慢指针

while (fast?.next) {
  fast = fast.next.next;
  slow = slow.next;
}

// 是否有环 快慢指针
while (fast?.next) {
  fast = fast.next.next;
  slow = slow.next;
  if (fast === slow) {
    return true;
  }
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 反转链表
var reverseList = function (head) {
  if (!head) return null;
  let prev = null,
    curr = head;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

// 反转链表 递归实现
let reverseList = (head) =>{
  let reverse = (prev, curr) => {
    if(!curr) return prev;
    // 保存 next 节点
    let next = curr.next;
    curr.next = prev;
    return reverse(curr, next);
  }
  return reverse(null, head);
}


// 遍历json
const json = {
  a: {b: {c: 1}},
  d: {e: 2}
}

const path = ['d','e']
let p = json;
path.forEach(key=>{
  p = p[key]
})