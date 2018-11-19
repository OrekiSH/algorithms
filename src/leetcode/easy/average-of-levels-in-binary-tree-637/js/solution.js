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
var averageOfLevels = function(root) {
  var result = [];
  var queue = [];

  if (!root) {
    return result;
  }

  queue.push(root);

  while (queue.length) {
    var len = queue.length;
    var sum = 0;

    for (var i = 0; i < len; i++) {
      var node = queue.shift();
      sum += node.val;

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(sum / len);
  }

  return result;
};
