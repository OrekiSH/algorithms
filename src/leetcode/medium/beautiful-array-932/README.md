```
For every i < j, there is no k with i < k < j such that A[k] * 2 = A[i] + A[j].

Input: 4
Output: [2,1,4,3]

Input: 5
Output: [3,1,2,5,4]

A. odd + even　= odd
B. ((A[k] * x) + y) * 2 != ((A[i] * x) + y) + ((A[j] * x) + y)
```
