/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  var current = root;
  while (current) {
    if (current.left) {
      var pre = current.left;
      while (pre.right) {
        pre = pre.right;
      }
      pre.right = current.right;
      current.right = current.left;
      current.left = null;
    }

    current = current.right;
  }
};
