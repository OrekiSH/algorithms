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
var preorderTraversal = function(root) {
  var stack = [root];
  var result = [];

  while (stack.length) {
    var p = stack.pop();

    if (p) {
      result.push(p.val);
      stack.push(p.right);
      stack.push(p.left);
    }
  }

  return result;
};
