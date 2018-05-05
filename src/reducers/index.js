import { combineReducers } from 'redux'
import numberStack from './numberStack'
import operatorStack from './operatorStack'
import tokenBuffer from './tokenBuffer'
import display from './display'

export default combineReducers({numberStack, operatorStack, tokenBuffer, display})
