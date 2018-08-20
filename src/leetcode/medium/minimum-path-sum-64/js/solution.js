/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  var m = grid.length;
  var n = grid[0].length;
  var result = [grid[0][0]];

  for (var i = 1; i < m; i += 1) {
    result[i] = result[i - 1] + grid[i][0];
  }

  for (var j = 1; j < n; j += 1) {
    result[0] += grid[0][j];
    for (var i = 1; i < m; i += 1) {
      result[i] = Math.min(result[i - 1], result[i]) + grid[i][j];
      console.log(result[i]);
    }
  }

  return result[m - 1];
};
