function largestInline(height) {
  var maxArea = 0;
  var s = []; // stack
  var len = height.length;
  var peek = function(stack) {
    return stack[stack.length - 1];
  };

  for (var i = 0; i <= len; i += 1) {
    var h = (i === len) ? 0 : height[i];

    if (!s.length || h >= height[peek(s)]) {
      s.push(i);
    } else {
      var top = s.pop();
      maxArea = Math.max(maxArea, height[top] * (s.length ? i - 1 - peek(s) : i));
      i -= 1;
    }
  }

  console.log(maxArea, height);

  return maxArea;
}

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if (!matrix.length) return 0;

  var result = 0;
  var rowSize = matrix.length;
  var colSize = matrix[0].length;
  var height = [];

  for (var i = 0; i < colSize; i += 1) {
    if (matrix[0][i] === '1') {
      height[i] = i;
    } else {
      height[i] = 0;
    }
  }

  result = largestInline(height);

  for (var i = 1; i < rowSize; i += 1) {
    for (var j = 0; j < colSize; j += 1) {
      if (matrix[i][j] === '1') {
        height[j] += 1;
      } else {
        height[j] = 0;
      }
    }

    result = Math.max(result, largestInline(height));
  }

  return result;
};

console.log(maximalRectangle([['1']]));
