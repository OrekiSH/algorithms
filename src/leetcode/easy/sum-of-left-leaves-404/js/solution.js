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
var sumOfLeftLeaves = function(root) {
  if (!root) {
    return 0;
  }

  var result = 0;
  var stack = [];
  stack.push(root);

  while (stack.length) {
    var node = stack.pop();

    if (node.left) {
      if (!node.left.left && !node.left.right) {
        result += node.left.val;
      } else {
        stack.push(node.left);
      }
    }

    if (node.right) {
      if (node.right.left || node.right.right) {
        stack.push(node.right);
      }
    }
  }

  return result;
};
