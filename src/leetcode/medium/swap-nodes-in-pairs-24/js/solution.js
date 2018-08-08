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
var swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  }

  var dummy = { next: head };
  var p = dummy;

  while (p && p.next && p.next.next) {
    var first = p.next;
    var second = p.next.next;
    first.next = second.next;
    second.next = first;
    p.next = second;
    p = first;
  }

  return dummy.next;
};

var root = new ListNode(1);
var n1 = new ListNode(2);
var n2 = new ListNode(3);
var n3 = new ListNode(4);
root.next = n1;
n1.next = n2;
n2.next = n3;

function ListNode(val) {
  this.val = val;
  this.next = null;
}

console.log(swapPairs(root));
