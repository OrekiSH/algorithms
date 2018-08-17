/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix || !matrix.length) {
    return [];
  }

  var res = [];
  var top = 0;
  var right = matrix[0].length - 1;
  var bottom = matrix.length - 1;
  var left = 0;

  while (true) {
    // left to right
    for (var i = left; i <= right; i += 1) {
      res.push(matrix[top][i]);
    }
    top += 1;
    if(left > right || top > bottom) break;

    // top to bottom
    for (var i = top; i <= bottom; i += 1) {
      res.push(matrix[i][right]);
    }
    right -= 1;
    if(left > right || top > bottom) break;

    // right to left
    for (var i = right; i >= left; i -= 1) {
      res.push(matrix[bottom][i]);
    }
    bottom -= 1;
    if(left > right || top > bottom) break;

    // bottom to top
    for (var i = bottom; i >= top; i -= 1) {
      res.push(matrix[i][left]);
    }
    left += 1;
    if(left > right || top > bottom) break;
  }

  return res;
};
