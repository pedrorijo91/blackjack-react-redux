import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import playerHand from './playerHand'
import dealerHand from './dealerHand'
import bet from './bet'

export default combineReducers({
  todos,
  visibilityFilter,
  
  playerHand,
  dealerHand,
  bet
})
