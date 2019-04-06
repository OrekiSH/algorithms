/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  var result = [];
  dfs(root, result, 0);
  return result;
};

function dfs(node, result, depth) {
  if (!node) {
    return;
  }

  if (result.length === depth) {
    result.push(node.val);
  }

  dfs(node.right, result, depth + 1);
  dfs(node.left, result, depth + 1);
}
