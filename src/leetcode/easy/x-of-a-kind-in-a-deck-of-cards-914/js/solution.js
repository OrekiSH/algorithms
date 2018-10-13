/**
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = function(deck) {
  if (!deck || deck.length < 2) {
    return false;
  }

  const countMap = {};
  let result = 0;

  for (let i = 0; i < deck.length; i += 1) {
    countMap[deck[i]] = countMap[deck[i]] === undefined
      ? 1 : countMap[deck[i]] + 1;
  }

  Object.values(countMap).forEach((e) => {
    result = gcd(e, result);
  });

  return result > 1;
};

function gcd(a, b) {
  return b > 0 ? gcd(b, a % b) : a;
}
