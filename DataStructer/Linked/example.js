// 翻转链表 
let prev = "head";
while(curr) {
  next = curr.next;
  curr.next = prev;
  prev = curr;
  curr = next;
}



// 查找链表中间结点  快慢指针

while(fast?.next) {
  fast = fast.next.next;
  slow = slow.next;
}


// 是否有环 快慢指针
while (fast?.next) {
  fast = fast.next.next;
  slow = slow.next;
  if(fast === slow) {
    return true
  }
} 


while(curr){
  next = curr.next;
  curr.next = prev;
  prev = curr;
  curr = next;
}