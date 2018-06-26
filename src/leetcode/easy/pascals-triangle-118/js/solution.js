/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var allrows = [];
  var row = [];

  for (var i = 0; i < numRows; i += 1) {
    row.unshift(1);

    for (var j = 1; j < row.length - 1; j += 1) {
      row[j] = row[j] + row[j + 1];
    }

    allrows.push(row.slice());
  }

  return allrows;
};
