var MaxQueue = function () {
  this.a = []
  this.q = []
  this.idx = 0
};

/**
* @return {number}
*/
MaxQueue.prototype.max_value = function () {
  while (this.q.length && this.q[0] < this.idx) this.q.shift()
  if (!this.q.length) return -1
  return this.a[this.q[0]]
};

/**
* @param {number} value
* @return {void}
*/
MaxQueue.prototype.push_back = function (value) {
  this.a.push(value)
  while (this.q.length && this.a[this.q[this.q.length - 1]] <= value) this.q.pop()
  this.q.push(this.a.length - 1)
};

/**
* @return {number}
*/
MaxQueue.prototype.pop_front = function () {
  if (this.idx >= this.a.length) return -1
  return this.a[this.idx++]
};

/**
* Your MaxQueue object will be instantiated and called as such:
* var obj = new MaxQueue()
* var param_1 = obj.max_value()
* obj.push_back(value)
* var param_3 = obj.pop_front()
*/
