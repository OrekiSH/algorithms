```
Input: [1,1,1,2,2,3]
Output: 5([1,1,2,2,3])

Input: [0,0,1,1,1,1,2,3,3]
Output: 7([0,0,1,1,2,3,3]) // It doesn't matter what values are set beyond the returned length.

i: 0, index: 1, nums: [0,0,1,1,1,1,2,3,3]
i: 1, index: 2, nums: [0,0,1,1,1,1,2,3,3]
i: 2, index: 3, nums: [0,0,1,1,1,1,2,3,3]
i: 3, index: 4, nums: [0,0,1,1,1,1,2,3,3]
i: 4, index: 4, nums: [0,0,1,1,1,1,2,3,3]
i: 5, index: 4, nums: [0,0,1,1,1,1,2,3,3]
i: 6, index: 5, nums: [0,0,1,1,2,1,2,3,3]
i: 7, index: 6, nums: [0,0,1,1,2,3,2,3,3]
i: 8, index: 7, nums: [0,0,1,1,2,3,3,3,3]
```
