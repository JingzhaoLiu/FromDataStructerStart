/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const l3 = new ListNode();

  let p3 = l3;

  let carry = 0;

  while (l1 || l2) {
    let v1 = l1 ? l1.val : 0;
    let v2 = l2 ? l2.val : 0;

    let val = v1 + v2 + carry;
    carry = Math.floor(val / 10);

    p3.next = new ListNode(val % 10);

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;

    p3 = p3.next;
  }

  if (carry > 0) {
    p3.next = new ListNode(carry);
  }

  return l3.next;
};
