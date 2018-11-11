/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d, level) {
  if (!root) {
    return;
  }

  level = level || 1;

  if (d === 1) {
    var node = new TreeNode(v);
    node.left = root;

    return node;
  } else if (d === level + 1) {
    var l = root.left;
    var r = root.right;

    root.left = new TreeNode(v);
    root.right = new TreeNode(v);

    root.left.left = l;
    root.right.right = r;
  } else {
    addOneRow(root.left, v, d, level + 1);
    addOneRow(root.right, v, d, level + 1);
  }

  return root;
};
