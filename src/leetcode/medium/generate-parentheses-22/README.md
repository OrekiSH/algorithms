```
Input: 3
Output: [
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

3 0 -> 2 1 -> 2 0 -> 1 0 -> 0 1
           -> 1 2 -> 0 3 -> 0 2 -> 0 1
                  -> 1 1 -> 1 0 -> 0 1

           -> 1 1 -> 1 0 -> 0 1
                  -> 0 2 -> 0 1
```