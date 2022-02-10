package Linked.src;
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 * 测试样例
 * [1,2,6,3,4,5,6] 6 
 * [] 1
 * [7,7,7,7] 7 
 * [7,7,7,7,1] 7
 */

public class Solution {
    public ListNode removeElements(ListNode head, int val) {
        ListNode dummyHead = new ListNode(-1,head);
        ListNode prev = dummyHead;
        while (prev.next != null) {
           if(prev.next.val == val) {
               prev.next = prev.next.next;
           }else{
               prev = prev.next;
           }
        }
        return dummyHead.next;
    }
}