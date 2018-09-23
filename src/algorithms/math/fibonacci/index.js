/**
 * Calculate fibonacci number at specific position using Dynamic Programming approach.
 *
 * @param n
 * @return {number}
 */
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  let one = 0;
  let two = 1;

  for (let i = 2; i <= n; i += 1) {
    two += one;
    one = two - one;
    /* or */
    // let store = one + two;
    // one = two;
    // two = store;
  }

  return two;
}

/**
 * Calculate fibonacci number at specific position using recursion.
 *
 * @param n
 * @return {number}
 */
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}


/**
 * Calculate fibonacci number at specific position using tail recursion.
 *
 * @param n
 * @return {number}
 */
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return tail(n, 0, 1);
}

function tail(n, one, two) {
  if (n === 1) {
    return two;
  }

  return tail(n - 1, two, one + two);
}
