/*
Time O(1)
Space O(n)
*/
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.s = [null]
  this.m = [1e10]
};

/**
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
  this.s.push(x)
  this.m.push(Math.min(this.m[this.m.length - 1], x))
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  this.s.pop()
  this.m.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.s[this.s.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.min = function () {
  return this.m[this.m.length - 1]
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.min()
*/
