/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  var store = new Array(26).fill(0);
  tasks.forEach((c) => {
    store[c.charCodeAt() - 65] += 1;
  });

  store.sort((a, b) => a - b);
  var i = 25;
  while (i >= 0 && store[i] === store[25]) {
    i -= 1;
  }

  return Math.max(tasks.length, (store[25] - 1) * (n + 1) + 25 - i);
};
