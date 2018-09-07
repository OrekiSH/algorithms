/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  var result = [];
  if (!root) {
    return result; // not [[]] :)
  }

  var dfs = function dfs(root, sum, stack) {
    stack.push(root.val);
    if (!root.left && !root.right && sum === root.val) {
      result.push(stack.slice());
    }

    if (root.left) {
      dfs(root.left, sum - root.val, stack);
    }

    if (root.right) {
      dfs(root.right, sum - root.val, stack);
    }

    stack.pop();
  };

  var stack = [];
  dfs(root, sum, stack);
  return result;
};
