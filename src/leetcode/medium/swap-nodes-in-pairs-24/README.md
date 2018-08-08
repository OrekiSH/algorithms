```
Input: 1->2->3->4
Output: 2->1->4->3

first: 1->2->3->4, second: 2->3->4 => first: 1->3->4, second: 2->1->3->4, dummy: 2->1->3->4
first: 3->4, second: 4             => first: 3->null, second: 4->3->null, dummy: 2->1->4->3
```
