/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  var row = [];

  for (var i = 0; i <= rowIndex; i += 1) {
    row.unshift(1);

    for (var j = 1; j < row.length - 1; j += 1) {
      row[j] = row[j] + row[j + 1];
    }
  }

  return row;
};
