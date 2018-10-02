/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  return dfs(root, 0);
};

function dfs(node, sum) {
  if (!node) {
    return 0;
  }

  var val = (sum * 10) + node.val;
  if (!node.right && !node.left) {
    return val;
  }

  return dfs(node.left, val) + dfs(node.right, val);
}
