/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  const n = digits.length;
  for (let i = n - 1; i >= 0; i -= 1) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }

    digits[i] = 0;
  }

  let allNine = new Array(n + 1).fill(0);
  allNine[0] = 1;

  return allNine;
};
