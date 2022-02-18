const a = {val: 'a'}
const b = {val: 'b'}
const c = {val: 'c'}
const d = {val: 'd'}

a.next = b;
b.next = c;
c.next = d;

// 遍历linkedList

let point = a;
while (point) {
  console.log("%s => ", point.val);
  point = point.next;
}
console.log("print over!")

// 插入
const e = {val: 'e'}
c.next = e;
e.next = d;

// delete
c.next = d;

// leetcode 
// 删除单链表中某个特定节点 。在设计函数时需要注意，
// 你无法访问链表的头节点 head ，只能直接访问 要被删除的节点 
// 思路：把下个节点的值赋值给当前节点删除下个节点
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};



// pHead为当前结点，如果当前结点为空的话，直接返回；
// pHead为当前结点，pre为当前结点的前一个结点，next为当前结点的下一个结点；
// 需要完成的目标是将pre-->pHead-->next1-->next2-->··· ···-->end反转为pre<--pHead<--next1<--next2<--··· ···<--end；
// pre结点可以用来反转方向，为了避免反转之后链表断开，用next结点暂时保存next1结点；
// 先用next保存pHead的下一个结点信息，保证单链表不会断裂；
// 保存之后，让pHead从指向next变成指向pre；
// 到此，完成了pre到pHead的反转，即pre<--pHead;
// 将pre，pHead，next依次向后移动一个结点。
// 循环操作，直到pHead为null，此时pre就是链表的最后一个结点，链表反转完毕，pre为反转后链表的第一个结点。
// 输出pre就是反转之后所得的链表。


function ReverseList(pHead) {
    if (pHead === null) {
        return false;
    }
    var pre = null;
    var next = null;
    while (pHead != null) {
        next = pHead.next;
        pHead.next = pre;
        pre = pHead;
        pHead = next;
    }
    return pre;
}
