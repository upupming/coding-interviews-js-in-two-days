/**
 * @param {string} s
 * @return {boolean}
 * Time O(n)
 * Space O(1)
 */
var isNumber = function (s) {
  const STATES = {
    START_WHITESPACE: 'START_WHITESPACE',
    SIGN: 'SIGN',
    INTEGER: 'INTEGER',
    DECIMAL_POINT_NO_INT: 'DECIMAL_POINT_NO_INT',
    DECIMAL_POINT_WITH_INT: 'DECIMAL_POINT_WITH_INT',
    DECIMAL_DIGITS: 'DECIMAL_DIGITS',
    E: 'E',
    EXP_SIGN: 'EXP_SIGN',
    EXP_INT: 'EXP_INT',
    END_WHITESPACE: 'END_WHITESPACE'
  }
  let state = STATES.START_WHITESPACE

  const isDigit = (ch) => ch.charCodeAt(0) >= '0'.charCodeAt(0) && ch.charCodeAt(0) <= '9'.charCodeAt(0)
  const isSign = (ch) => ch === '+' || ch === '-'
  const isE = (ch) => ch === 'e' || ch === 'E'

  for (const ch of s) {
    switch (state) {
      case STATES.START_WHITESPACE:
        if (isDigit(ch)) state = STATES.INTEGER
        else if (ch === '.') state = STATES.DECIMAL_POINT_NO_INT
        else if (ch === ' ') state = STATES.START_WHITESPACE
        else if (isSign(ch)) state = STATES.SIGN
        else return false
        break
      case STATES.SIGN:
        if (isDigit(ch)) state = STATES.INTEGER
        else if (ch === '.') state = STATES.DECIMAL_POINT_NO_INT
        else return false
        break
      case STATES.INTEGER:
        if (isDigit(ch)) state = STATES.INTEGER
        else if (ch === '.') state = STATES.DECIMAL_POINT_WITH_INT
        else if (isE(ch)) state = STATES.E
        else if (ch === ' ') state = STATES.END_WHITESPACE
        else return false
        break
      case STATES.DECIMAL_POINT_NO_INT:
        if (isDigit(ch)) state = STATES.DECIMAL_DIGITS
        else return false
        break
      case STATES.DECIMAL_POINT_WITH_INT:
        if (isDigit(ch)) state = STATES.DECIMAL_DIGITS
        else if (isE(ch)) state = STATES.E
        else if (ch === ' ') state = STATES.END_WHITESPACE
        else return false
        break
      case STATES.DECIMAL_DIGITS:
        if (isDigit(ch)) state = STATES.DECIMAL_DIGITS
        else if (isE(ch)) state = STATES.E
        else if (ch === ' ') state = STATES.END_WHITESPACE
        else return false
        break
      case STATES.E:
        if (isDigit(ch)) state = STATES.EXP_INT
        else if (isSign(ch)) state = STATES.EXP_SIGN
        else return false
        break
      case STATES.EXP_SIGN:
        if (isDigit(ch)) state = STATES.EXP_INT
        else return false
        break
      case STATES.EXP_INT:
        if (isDigit(ch)) state = STATES.EXP_INT
        else if (ch === ' ') state = STATES.END_WHITESPACE
        else return false
        break
      case STATES.END_WHITESPACE:
        if (ch === ' ') state = STATES.END_WHITESPACE
        else return false
        break
      default:
        return false
    }
  }
  return state == STATES.INTEGER || state === STATES.DECIMAL_POINT_WITH_INT || state === STATES.DECIMAL_DIGITS || state === STATES.EXP_INT || state === STATES.END_WHITESPACE
};
