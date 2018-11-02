/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  var result = [];
  if (root) {
    search(root, '', result);
  }

  return result;
};

function search(root, path, result) {
  if (!root.left && !root.right) {
    result.push(path + root.val);
  }

  if (root.left) {
    search(root.left, path + root.val + '->', result);
  }

  if (root.right) {
    search(root.right, path + root.val + '->', result);
  }
}
