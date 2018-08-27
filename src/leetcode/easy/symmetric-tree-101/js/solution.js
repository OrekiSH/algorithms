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
var isSymmetric = function(root) {
  if (!root) {
    return true;
  }

  return isMirror(root.left, root.right);
};

function isMirror(left, right) {
  if (!left || !right) {
    return left === right;
  }

  return (left.val === right.val) && isMirror(left.left, right.right) && isMirror(right.left, left.right);
}
