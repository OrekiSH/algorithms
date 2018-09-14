/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.min = Number.MAX_VALUE;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (x < this.min) {
    this.min = x;
  }
  return this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  var top = this.stack.pop();

  if (top == this.min) {
    this.min = Math.min(...this.stack);
    // both slow :)
    // this.min = Math.min.apply(null, this.stack);
    // this.min = this.stack.reduce((a, c) => a < c ? a : c, this.stack[0] || Infinity);
  }
  return top;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min; // cached
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
