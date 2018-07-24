/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
  struct ListNode preHead;
  struct ListNode* p = &preHead;
  int sum = 0;

  while (l1 != NULL || l2 != NULL || sum != 0) {
    if (l1 != NULL) {
      sum += l1->val;
      l1 = l1->next;
    }

    if (l2 != NULL) {
      sum += l2->val;
      l2 = l2->next;
    }

    p = p->next = (struct ListNode*)malloc(sizeof(struct ListNode));
    p->val = sum % 10;

    sum /= 10;
  }
  p->next = NULL;

  return preHead.next;
}
