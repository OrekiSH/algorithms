```
Input: [1, 2, 3, 4]
Output: true
slow: 2, fast: 3
slow: 3, fast: 1
slow: 4, fast: 3

Input: [1, 2, 3, 4, 1]
Output: true
slow: 2, fast: 3
slow: 3, fast: 1
slow: 4, fast: 3
slow: 1, fast: 1

Input: [1, 2, 3, 1]
Output: true
slow: 2, fast: 3
slow: 3, fast: 2
slow: 1, fast: 1

Input: [2, 3, 1, 1]
Output: true
slow: 3, fast: 1
slow: 1, fast: 2
slow: 1, fast: 1

Input: [1, 2, 3, 4, 5, 6, 7, 4]
Output: true

slow: 2, fast: 3
slow: 3, fast: 5
slow: 4, fast: 7
slow: 5, fast: 5
```
