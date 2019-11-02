import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import playerHand from './playerHand'
import dealerHand from './dealerHand'

export default combineReducers({
  todos,
  visibilityFilter,
  
  playerHand,
  dealerHand
})
