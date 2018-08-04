/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2) {
  if (l1 == NULL) {
    return l2;
  } else if (l2 == NULL) {
    return l1;
  }

  struct ListNode preHead;
  struct ListNode *p = &preHead;

  while (l1 != NULL && l2 != NULL) {
    if (l1->val < l2->val) {
      p->next = l1;
      l1 = l1->next;
    } else {
      p->next = l2;
      l2 = l2->next;
    }

    p = p->next;
  }

  p->next = l1 != NULL ? l1 : l2;
  return preHead.next;
}
