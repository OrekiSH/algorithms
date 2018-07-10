/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  var n = triangle.length;
  var minlen = triangle[n - 1];

  for(var layer = n - 2; layer >= 0; layer--) {
    for(var i = 0; i <= layer; i++) {
      minlen[i] = Math.min(minlen[i], minlen[i + 1]) + triangle[layer][i];
    }
  }

  return minlen[0];
};
