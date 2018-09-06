/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums.length) {
    return null;
  }

  var root = dfs(nums, 0, nums.length - 1);
  return root;
};

function dfs(nums, start, end) {
  if (start > end) {
    return null;
  }

  var mid = parseInt((start + end) / 2, 10);
  var node = new TreeNode(nums[mid]);
  node.left = dfs(nums, start, mid - 1);
  node.right = dfs(nums, mid + 1, end);

  return node;
}
