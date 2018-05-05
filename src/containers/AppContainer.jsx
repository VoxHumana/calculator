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
  [createToken('A'), createToken('(', 'LEFT_BRACKET'), createToken(')', 'RIGHT_BRACKET'), createToken('<-', 'CLEAR_ONE'), createToken('C', 'CLEAR_ALL')],
  [createToken('!', 'OPERATOR', 4, 'RIGHT'), createToken('7'), createToken('8'), createToken('9'), createToken('\u00D7', 'OPERATOR', 3, 'LEFT')],
  [createToken('\u221A', 'OPERATOR', 4, 'RIGHT'), createToken('4'), createToken('5'), createToken('6'), createToken('/', 'OPERATOR', 3, 'LEFT')],
  [createToken('^', 'OPERATOR', 4, 'RIGHT'), createToken('1'), createToken('2'), createToken('3'), createToken('+', 'OPERATOR', 2, 'LEFT')],
  [createToken('\u03A0', 'LITERAL'), createToken('0'), createToken('.', 'DECIMAL'), createToken('='), createToken('-', 'OPERATOR', 2, 'LEFT')]]

const mapStateToProps = state => ({
  grid,
  calculate: () => {
    console.log(AST(state.tokenBuffer, createToken))
  },
  display: state.display
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)
