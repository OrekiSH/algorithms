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
var insertionSortList = function(head) {
  if (!head) {
    return null;
  }

  let prev = new ListNode(Number.MIN_SAFE_INTEGER);
  prev.next = head;
  head = prev;
  let curr = prev.next;

  while (curr) {
    if (curr.val < prev.val) {
      let temp = new ListNode(curr.val);
      let tempHead = head;
      prev.next = curr.next;
      curr = curr.next;

      while (temp.val > tempHead.next.val) {
        tempHead = tempHead.next;
      }

      temp.next = tempHead.next;
      tempHead.next = temp;
    } else {
      curr = curr.next;
      prev = prev.next;
    }
  }
  return head.next;
};
