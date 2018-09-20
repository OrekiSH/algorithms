/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  var len = matrix.length;
  var half = parseInt(len / 2, 10);

  for(var i = 0; i < len; i++){
    for(var j = i; j < matrix[0].length; j++){
      var tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }

  for(var i = 0 ; i < len; i++){
    for(var j = 0; j < half; j++){
      var tmp = matrix[i][j];
      matrix[i][j] = matrix[i][len - 1 - j];
      matrix[i][len - 1 - j] = tmp;
    }
  }
};
