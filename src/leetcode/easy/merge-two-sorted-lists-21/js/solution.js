/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  }

  var head = new ListNode(0);
  var preHead = head;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      preHead.next = l1;
      l1 = l1.next;
    } else {
      preHead.next = l2;
      l2 = l2.next;
    }

    preHead = preHead.next;
  }

  preHead.next = l1 ? l1 : l2;
  return head.next;
};
