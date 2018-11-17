/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  return dfs(root, null);
};

function dfs(root, parent) {
  if (!root) {
    return parent;
  }

  var result = dfs(root.left, root);
  root.right = dfs(root.right, parent);
  root.left = null;

  return result;
}
