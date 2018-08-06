```
Input: "()"
Output: true

s[i]: '(', stack: [')']
s[i]: ')', stack: []

Input: "()[]{}"
Output: true

Input: "{[]}"
Output: true

s[i]: '{', stack: ['}']
s[i]: '[', stack: ['}', ']']

Input: "(]"
Output: false
```
