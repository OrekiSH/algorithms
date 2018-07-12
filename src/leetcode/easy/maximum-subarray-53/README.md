```
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6(4 + (-1) + 2 + 1)

maxCurrent: (-2 + 1, 1), max: 1
maxCurrent: (1 - 3, -3), max: 1
maxCurrent: (-2 + 4, 4), max: 4
maxCurrent: (4 - 1, -1), max: 4
maxCurrent: (3 + 2, 2), max: 5
maxCurrent: (5 + 1, 5), max: 6
maxCurrent: (6 - 5, -5), max: 6
maxCurrent: (1 + 4, 4), max: 6
```
