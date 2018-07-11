```
Input: [-1, 0, 1, 2, -1, -4]
Output:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

nums: [-4, -1, -1, 0, 1, 2], first: 0, second: 1, third: 5, target: 4 > (-1 + 2)
nums: [-4, -1, -1, 0, 1, 2], first: 0, second: 2, third: 5, target: 4 > (-1 + 2)
nums: [-4, -1, -1, 0, 1, 2], first: 0, second: 3, third: 5, target: 4 > (0 + 2)
nums: [-4, -1, -1, 0, 1, 2], first: 0, second: 4, third: 5, target: 4 > (1 + 2)

nums: [-4, -1, -1, 0, 1, 2], first: 1, second: 2, third: 5, target: 1 == (-1 + 2) [-1, -1, 2]

nums: [-4, -1, -1, 0, 1, 2], first: 2, second: 3, third: 5, target: 1 < (0 + 2)
nums: [-4, -1, -1, 0, 1, 2], first: 2, second: 3, third: 4, target: 1 == (0 + 1) [-1, 0, 1]

nums: [-4, -1, -1, 0, 1, 2], first: 3, second: 4, third: 5, target: 0 < (1 + 2)
```
