/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  var len = A.length;

  if (len < 2) {
    return true;
  }

  if (A[0] <= A[len - 1]) {
    for (var i = 1; i < len; i++) {
      if (A[i - 1] > A[i]) {
        return false;
      }
    }
  } else {
    for (var i = 1; i < len; i++) {
      if (A[i - 1] < A[i]) {
        return false;
      }
    }
  }

  return true;
};
