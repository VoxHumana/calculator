import Button from '../components/button'
import { connect } from 'react-redux'
import {
  addToken,
  removeLastToken,
  removeAllTokens,
  updateDisplay,
  answerDisplay,
  removeLastDisplay,
  clearDisplay,
  errorDisplay
} from '../actions'

const mapStateToProps = (state, ownProps) => ({
  token: ownProps.token.symbol
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    if (ownProps.token.symbol) {
      if (ownProps.token.symbol === '=') {
        let ans = ownProps.calculate()
        if (ans) {
          dispatch(answerDisplay(ans))
          dispatch(removeAllTokens())
          dispatch(addToken({
            type: 'LITERAL',
            symbol: ans
          }))
        } else {
          dispatch(errorDisplay())
          dispatch(removeAllTokens())
        }
      } else if (ownProps.token.symbol === 'C') {
        dispatch(clearDisplay())
        dispatch(removeAllTokens())
      } else if (ownProps.token.symbol === '\u2190') {
        dispatch(removeLastToken())
        dispatch(removeLastDisplay())
      } else {
        dispatch(addToken(ownProps.token))
        dispatch(updateDisplay(ownProps.token.symbol))
      }
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
