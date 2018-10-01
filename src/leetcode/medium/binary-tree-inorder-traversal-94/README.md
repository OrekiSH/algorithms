```
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]


Input:
  1
/  \
2  3
Output: [2, 1, 3]

stack: [1], current: 2 -> stack: [1, 2], current: null -> stack: [1], current: 2 -> stack: [1], current: null
stack: [], current: 1 -> stack: [], current: 3
stack: [3], current: null -> stack: [], current: 3
```
