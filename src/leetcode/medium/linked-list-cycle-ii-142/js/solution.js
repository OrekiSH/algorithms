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
var detectCycle = function(head) {
  if (!head || !head.next) {
    return null;
  }

  var slow = head;
  var fast = head;
  var start = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      while (slow !== start) {
        slow = slow.next;
        start = start.next;
      }

      return start;
    }
  }

  return null;
};
