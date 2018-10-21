/**
 * @param {character[][]} grid
 * @return {number}
 */
var d = [0, 1, 0, -1, 0];

var numIslands = function(grid) {
  var islands = 0;
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      islands += sink(grid, i, j);
    }
  }

  return islands;
};

function sink(grid, i, j) {
  if (i < 0 || i === grid.length || j < 0 || j === grid[i].length || grid[i][j] === '0') {
    return 0;
  }
  grid[i][j] = '0';

  for (var m = 0; m < 4; m++) {
    sink(grid, i + d[m], j + d[m + 1]);
  }
  return 1;
}
