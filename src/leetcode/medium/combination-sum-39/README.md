```
Input: [2,3,6,7], 7
Output: [
  [7],
  [2,2,3]
]

Input: [2,3,5], 8
Output: [
  [2,2,2,2],
  [2,3,3],
  [3,5]
]

target: 8, current: [2], start: 0
target: 6, current: [2, 2], start: 0
target: 4, current: [2, 2, 2], start: 0
target: 2, current: [2, 2, 2, 2], start: 0 === 8

target: 4, current: [2, 2, 3], start: 0

target: 6, current: [2, 3], start: 0
target: 3, current: [2, 3, 3], start: 1 === 8

target: 6, current: [2, 5], start: 0

target: 8, current: [3], start: 0
target: 5, current: [3, 3], start: 1
target: 5, current: [3, 5], start: 1 === 8

target: 8, current: [5], start: 0
```
