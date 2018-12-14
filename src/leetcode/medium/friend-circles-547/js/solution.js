/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  var visited = new Array(M.length).fill(false);
  var count = 0;
  for (var i = 0; i < M.length; i++) {
    if (!visited[i]) {
      count += 1;
      visited[i] = true;
      dfs(M, visited, i);
    }
  }

  return count;
};

function dfs(M, visited, i) {
  for (var j = 0; j < M.length; j++) {
    if (M[i][j] === 1 && !visited[j]) {
      visited[j] = true;
      dfs(M, visited, j);
    }
  }
}
