/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
  return backtrack(N, 1, new Array(N + 1));
};

function backtrack(N, pos, visited) {
  if (pos === visited.length) {
    return 1;
  }
  var count = 0;

  for (var i = 1; i <= N; i++) {
    if (!visited[i] && (i % pos === 0 || pos % i === 0)) {
      visited[i] = true;
      count += backtrack(N, pos + 1, visited);
      visited[i] = false;
    }
  }
  return count;
}

console.log(countArrangement(4));
