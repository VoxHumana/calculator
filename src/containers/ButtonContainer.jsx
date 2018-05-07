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

const showError = (dispatch) => {
  dispatch(errorDisplay())
  dispatch(removeAllTokens())
}

const showAns = (dispatch, ans) => {
  dispatch(answerDisplay(Number.isInteger(ans) ? ans : ans.toPrecision(5)))
  dispatch(removeAllTokens())
  dispatch(addToken({
    type: 'LITERAL',
    symbol: ans
  }))
}

const mapStateToProps = (state, ownProps) => ({
  token: ownProps.token.symbol
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    if (ownProps.token.type === 'FUNCTION') {
      let ans = ownProps.calculate()
      if (ans) {
        switch (ownProps.token.symbol) {
          case 'COS':
            ans = Math.cos(ans)
            break
          case 'SIN':
            ans = Math.sin(ans)
            break
          case '\u221A':
            ans = Math.sqrt(ans)
            break
          default:
            break
        }
        showAns(dispatch, ans)
      } else {
        showError(dispatch)
      }
    } else if (ownProps.token.symbol === '=') {
      let ans = ownProps.calculate()
      if (ans) {
        showAns(dispatch, ans)
      } else {
        showError(dispatch)
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
