import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import account from './account'
import game from './game'

export default combineReducers({
  todos,
  visibilityFilter,
  
  account,
  game,
})
