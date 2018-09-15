/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // why i use `var max`, it becomes more slowly :(
  var area = 0;
  var start = 0;
  var end = height.length - 1;

  while (start < end) {
    area = Math.max((end - start) * Math.min(height[start], height[end]), area);

    if (height[start] < height[end]) {
      start += 1;
    } else {
      end -= 1;
    }
  }

  return area;
};
