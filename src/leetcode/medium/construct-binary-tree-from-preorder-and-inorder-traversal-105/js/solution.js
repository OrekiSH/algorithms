/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  var cache = {};

  for (var i = 0; i < inorder.length; i += 1) {
    cache[inorder[i]] = i;
  }

  var root = build({
    preorder: preorder,
    prestart: 0,
    preend: preorder.length - 1,
    inorder: inorder,
    instart: 0,
    inend: inorder.length - 1,
    cache: cache,
  });

  return root;
};

function build(opts) {
  if (opts.prestart > opts.preend || opts.instart > opts.inend) {
    return null;
  }

  var preorder = opts.preorder;
  var inorder = opts.inorder;
  var cache = opts.cache;
  var prestart = opts.prestart;
  var instart = opts.instart;

  var root = new TreeNode(preorder[prestart]);
  var numsleft = cache[root.val] - instart;

  root.left = build({
    preorder: preorder,
    prestart: prestart + 1,
    preend: prestart + numsleft,
    inorder: inorder,
    instart: instart,
    inend: cache[root.val] - 1,
    cache: cache,
  });

  root.right = build({
    preorder: preorder,
    prestart: prestart + numsleft + 1,
    preend: opts.preend,
    inorder: inorder,
    instart: cache[root.val] + 1,
    inend: opts.inend,
    cache: cache,
  });

  return root;
}
