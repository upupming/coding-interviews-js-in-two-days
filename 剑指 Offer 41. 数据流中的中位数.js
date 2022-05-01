/**
 * initialize your data structure here.
 对顶堆，左边 n 个元素，右边 n/n+1 个元素
 max(left) <= min(right)
 */
var MedianFinder = function () {
  this.left = new Heap((a, b) => a > b)
  this.right = new Heap((a, b) => a < b)
};

/**
* @param {number} num
* @return {void}
O(log n)
*/
MedianFinder.prototype.addNum = function (num) {
  this.right.push(num)
  while (this.right.size() - this.left.size() > 1) {
    this.left.push(this.right.pop())
  }
  while (this.left.top() > this.right.top()) {
    const [x, y] = [this.left.pop(), this.right.pop()]
    this.left.push(y)
    this.right.push(x)
  }
};

/**
* @return {number}
O(1)
*/
MedianFinder.prototype.findMedian = function () {
  if (this.left.size() === this.right.size()) {
    return (this.left.top() + this.right.top()) / 2
  } else {
    return this.right.top()
  }
};

/**
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/

class Heap {
  constructor(data = [], cmp = (lhs, rhs) => lhs < rhs) {
    if (typeof data === "function") {
      cmp = data;
      data = [];
    }
    this.data = [null, ...data];
    this.lt = (i, j) => cmp(this.data[i], this.data[j]);
    for (let i = this.size(); i > 0; i--)
      this.heapify(i);
  }
  size() {
    return this.data.length - 1;
  }
  push(v) {
    this.data.push(v);
    let i = this.size();
    while (i >> 1 !== 0 && this.lt(i, i >> 1))
      this.swap(i, i >>= 1);
  }
  pop() {
    this.swap(1, this.size());
    const top = this.data.pop();
    this.heapify(1);
    return top;
  }
  top() {
    return this.data[1];
  }
  heapify(i) {
    while (true) {
      let min = i;
      const [l, r, n] = [i * 2, i * 2 + 1, this.data.length];
      if (l < n && this.lt(l, min))
        min = l;
      if (r < n && this.lt(r, min))
        min = r;
      if (min !== i) {
        this.swap(i, min);
        i = min;
      } else
        break;
    }
  }
  swap(i, j) {
    const d = this.data;
    [d[i], d[j]] = [d[j], d[i]];
  }
}
