/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  return dfs(root) !== -1;
};

function dfs(root) {
  if (!root) {
    return 0;
  }

  var leftHeight = dfs(root.left);
  if (leftHeight === -1) {
    return -1;
  }
  var rightHeight = dfs(root.right);
  if (rightHeight === -1) {
    return -1;
  }

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }

  return Math.max(leftHeight, rightHeight) + 1;
}
