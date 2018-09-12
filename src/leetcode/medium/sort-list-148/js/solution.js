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
var sortList = function(head) {
  if (!head || !head.next) {
    return head;
  }

  var prev = null;
  var slow = head;
  var fast = head;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null;

  var l1 = sortList(head);
  var l2 = sortList(slow);

  return merge(l1, l2);
};

function merge(l1, l2) {
  var tmp = new ListNode(0);
  var p = tmp;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }

    p = p.next;
  }

  if (l1) {
    p.next = l1;
  }

  if (l2) {
    p.next = l2;
  }

  return tmp.next;
}
