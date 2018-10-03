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
var maxPathSum = function(root) {
  var maxArr = [-Number.MAX_VALUE];
  maxToRoot(root, maxArr);
  return maxArr[0];
};

function maxToRoot(root, maxArr) {
  if (!root) {
    return 0;
  }

  var left = maxToRoot(root.left, maxArr);
  var right = maxToRoot(root.right, maxArr);
  if (left < 0) {
    left = 0;
  }
  if (right < 0) {
    right = 0;
  }

  if ((left + right + root.val) > maxArr[0]) {
    maxArr[0] = left + right + root.val;
  }

  return root.val + Math.max(left, right);
}
