let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}


// ===========================

export const startGame = () => ({
  type: 'START_GAME'
})

export const addPlayerCard = () => ({
  type: 'ADD_PLAYER_CARD'
})

export const dealerTurn = () => ({
  type: 'DEALER_TURN'
})

export const increaseBet = (amount) => ({
  type: 'INCREASE_BET',
  amount
})

export const decreaseBet = (amount) => ({
  type: 'DECREASE_BET',
  amount
})

export const allIn = () => ({
  type: 'ALL_IN'
})

export const clearBet = () => ({
  type: 'CLEAR_BET'
})