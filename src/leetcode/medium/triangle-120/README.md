```
Input:
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
Ouput: 2 + 3 + 5 + 1 = 11

minlen: [4,1,8,3], layer: 2, minlen[0]: 1 + 6
minlen: [7,1,8,3], layer: 2, minlen[1]: 1 + 5
minlen: [7,6,8,3], layer: 2, minlen[2]: 3 + 7
minlen: [7,6,8,10], layer: 1, minlen[0]: 6 + 3
minlen: [9,6,8,10], layer: 1. minlen[1]: 6 + 4
minlen: [9,10,8,10], layer: 0, minlen[0]: 9 + 2
```
