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
  if (!root) {
    return null;
  }

  var left = root.left;
  var right = root.right;
  root.left = null;

  flatten(left);
  flatten(right);

  root.left = right;
  var head = root;
  while (!head.right) {
    head = head.right;
  }
  head.right = right;
};
