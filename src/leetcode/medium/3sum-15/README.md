version1
```
# 1
Input: [-1, 0, 1, 2, -1, -4]
Output:
[
  [-1, 0, 1],
  [-1, -1, 2],
]

nums: [-4, -1, -1, 0, 1, 2], first: 0, second: 1, third: 5 [-4, -1, 2] < 0
nums: [-4, -1, -1, 0, 1, 2], first: 0, second: 2, third: 5 [-4, -1, 2]
nums: [-4, -1, -1, 0, 1, 2], first: 0, second: 3, third: 5 [-4, 0, 2]
nums: [-4, -1, -1, 0, 1, 2], first: 0, second: 4, third: 5 [-4, 1, 2]

nums: [-4, -1, -1, 0, 1, 2], first: 1, second: 2, third: 5 [-1, -1, 2] ==== 0
nums: [-4, -1, -1, 0, 1, 2], first: 1, second: 3, third: 4 [-1, 0, 1] === 0

nums: [-4, -1, -1, 0, 1, 2], first: 3, second: 4, third: 5 [0, 1, 2]


# 2
Input: [-2,0,1,1,2]
Output: [[-2,0,2],[-2,1,1]]

[-2, 0, 2] === 0
[-2, 1, 1] === 0

[0, 1, 2]
[0, 1, 1]

[1, 1, 2]
```

version2
```
# 2 (nums[first] <= 0)
Input: [-2,0,1,1,2]
Output: [[-2,0,2],[-2,1,1]]

[-2, 0, 2] === 0
[-2, 1, 1] === 0

[0, 1, 2]
[0, 1, 1] # essential for [0, 0, 0]

[1, 1, 2] # not essential
```
