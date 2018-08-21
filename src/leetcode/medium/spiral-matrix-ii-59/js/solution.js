/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (!n) {
    return [[]];
  }

  var result = new Array(n);
  for (var i = 0; i < n; i += 1) {
    result[i] = new Array(n);
  }

  var current = 1;
  var top = 0;
  var right = n - 1;
  var bottom = n - 1;
  var left = 0;

  while (true) {
    // left to right
    for (var i = left; i <= right; i += 1) {
      result[top][i] = current; // [0, 0] -> [0, n - 1]
      current += 1;
    }
    top += 1;
    if(left > right || top > bottom) break;

    // top to bottom
    for (var i = top; i <= bottom; i += 1) {
      result[i][right] = current; // [1, n - 1] -> [n - 1, n - 1]
      current += 1;
    }
    right -= 1;
    if(left > right || top > bottom) break;

    // right to left
    for (var i = right; i >= left; i -= 1) {
      result[bottom][i] = current; // [n - 1, n- 2] -> [n - 1, 0]
      current += 1;
    }
    bottom -= 1;
    if(left > right || top > bottom) break;

    // bottom to top
    for (var i = bottom; i >= top; i -= 1) {
      result[i][left] = current; // [n - 2, 0] -> [1, 0]
      current += 1;
    }
    left += 1;
    if(left > right || top > bottom) break;
  }

  return result;
};
