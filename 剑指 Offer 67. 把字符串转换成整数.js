/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
  const STATE = {
    START: 'START',
    SIGNED: 'SIGNED',
    IN_NUMBER: 'IN_NUMBER',
    END: "END"
  }
  let state = STATE.START, val = 0, sign = 1
  const isDigit = (ch) => ch.charCodeAt(0) >= '0'.charCodeAt(0) && ch.charCodeAt(0) <= '9'.charCodeAt(0)
  const getDigit = (ch) => ch.charCodeAt(0) - '0'.charCodeAt(0)
  const INT_MAX = (1 << 30) * 2 - 1
  const INT_MIN = 1 << 31
  for (const ch of str) {
    switch (state) {
      case STATE.START:
        if (ch === ' ') continue
        else if (isDigit(ch)) val = val * 10 + sign * getDigit(ch), state = STATE.IN_NUMBER
        else if (ch === '+') sign = 1, state = STATE.SIGNED
        else if (ch === '-') sign = -1, state = STATE.SIGNED
        else state = STATE.END
        break
      case STATE.SIGNED:
        if (isDigit(ch)) val = val * 10 + sign * getDigit(ch), state = STATE.IN_NUMBER
        else state = STATE.END
        break
      case STATE.IN_NUMBER:
        if (isDigit(ch)) {
          if (sign === 1 && val > (INT_MAX - sign * getDigit(ch)) / 10) {
            val = INT_MAX
          } else if (sign === -1 && val < (INT_MIN - sign * getDigit(ch)) / 10) {
            val = INT_MIN
          } else {
            val = val * 10 + sign * getDigit(ch)
          }
        }
        else state = STATE.END
        break
      case STATE.END:
        continue
    }
  }
  return val
};
