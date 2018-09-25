/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if (!head) {
    return head;
  }

  var dummy = new ListNode(0);
  dummy.next = head;
  var pre = dummy;

  for (var i = 0; i < m - 1; i++) {
    pre = pre.next;
  }

  var start = pre.next;
  var end = start.next;

  for (var i = 0; i < n - m; i++) {
    start.next = end.next;
    end.next = pre.next;
    pre.next = end;
    end = start.next;
  }

  return dummy.next;
};
