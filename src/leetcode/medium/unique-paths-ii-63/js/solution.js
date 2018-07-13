/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0]) {
    return 0;
  }

  var m = obstacleGrid.length;
  var n = obstacleGrid[0].length;

  var res = [1];
  for (var i = 1; i < n; i++) {
    res[i] = 0;
  }

  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        res[j] = 0;
      } else if (j > 0) {
        res[j] += res[j - 1];
      }
    }
  }

  return res[n - 1];
};
