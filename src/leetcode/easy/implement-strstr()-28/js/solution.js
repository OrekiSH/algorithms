/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle) {
    return 0;
  }

  for (var i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack[i] === needle[0]) {
      var result = true;
      for (var j = 1; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          result = false;
        }
      }
      if (result) {
        return i;
      }
    }
  }

  return -1;
};
