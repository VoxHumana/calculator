import Button from '../components/button'
import { connect } from 'react-redux'
import { newToken, updateDisplay } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  token: ownProps.token.symbol
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    if (ownProps.token.symbol === '=') {
      ownProps.calculate()
    } else {
      dispatch(newToken(ownProps.token))
      dispatch(updateDisplay(ownProps.token.symbol))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
