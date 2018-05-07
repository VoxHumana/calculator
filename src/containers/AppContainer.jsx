import App from '../App'
import AST from '../AST'
import { connect } from 'react-redux'

const createToken = (symbol, type = 'LITERAL', precedence = 0, associativity) => ({
  type,
  symbol,
  precedence,
  associativity
})

const grid = [
  [createToken('COS', 'FUNCTION'), createToken('(', 'LEFT_BRACKET'), createToken(')', 'RIGHT_BRACKET'), createToken('\u2190', 'CLEAR_ONE'), createToken('C', 'CLEAR_ALL')],
  [createToken('SIN', 'FUNCTION'), createToken('7'), createToken('8'), createToken('9'), createToken('\u00D7', 'OPERATOR', 3, 'LEFT')],
  [createToken('\u221A', 'FUNCTION'), createToken('4'), createToken('5'), createToken('6'), createToken('/', 'OPERATOR', 3, 'LEFT')],
  [createToken('^', 'OPERATOR', 4, 'RIGHT'), createToken('1'), createToken('2'), createToken('3'), createToken('+', 'OPERATOR', 2, 'LEFT')],
  [createToken('\u03C0', 'LITERAL'), createToken('0'), createToken('.', 'DECIMAL'), createToken('='), createToken('-', 'OPERATOR', 2, 'LEFT')]]

const mapStateToProps = state => ({
  grid,
  calculate: () => {
    try {
      return AST(state.tokenBuffer, createToken)
    } catch (err) {
      return null
    }
  },
  display: state.display.contents
})

export default connect(mapStateToProps, null)(App)
