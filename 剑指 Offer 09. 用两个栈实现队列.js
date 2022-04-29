var CQueue = function () {
  this.s1 = []
  this.s2 = []
};

/**
* @param {number} value
* @return {void}
Time O(1)
*/
CQueue.prototype.appendTail = function (value) {
  this.s1.push(value)
};

/**
* @return {number}
Avg Time O(1)
*/
CQueue.prototype.deleteHead = function () {
  if (!this.s2.length)
    while (this.s1.length) this.s2.push(this.s1.pop())
  return this.s2.pop() ?? -1
};

/**
* Your CQueue object will be instantiated and called as such:
* var obj = new CQueue()
* obj.appendTail(value)
* var param_2 = obj.deleteHead()
Space O(n)
*/
