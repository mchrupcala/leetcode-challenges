/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === null) return null;
    let current = head;
    let next = head.next;
    let last = null;
    
    while (current !== null) {
        next = current.next;
        current.next = last;
        last = current;
        current = next;
    }
    
    head = last;
    
    return head;
};