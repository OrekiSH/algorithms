/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  var result = [];
  dfs(result, root, 0);
  return result;
};

function dfs(result, root, level) {
  if (!root) {
    return;
  }

  if (level >= result.length) {
    result.unshift([]);
  }

  dfs(result, root.left, level + 1);
  dfs(result, root.right, level + 1);
  result[result.length - level - 1].push(root.val);
}
