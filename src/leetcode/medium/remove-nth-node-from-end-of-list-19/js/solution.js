/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head || !n) {
    return head;
  }

  var len = 0;
  var preHead = head;
  while (preHead) {
    len += 1;
    preHead = preHead.next;
  }

  if (n > len) {
    return head;
  } else if (n === len) {
    return head.next;
  }

  var i = 0;
  preHead = head;
  len = len - n;
  while (preHead) {
    i += 1;
    if (len === i) {
      preHead.next = preHead.next.next;
      break;
    } else {
      preHead = preHead.next;
    }
  }

  return head;
};
