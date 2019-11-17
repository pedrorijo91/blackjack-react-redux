export const startGame = () => ({
  type: "START_GAME"
});

export const newRound = () => ({
  type: "NEW_ROUND"
});


export const addPlayerCard = () => ({
  type: "ADD_PLAYER_CARD"
});

export const dealerTurn = () => ({
  type: "DEALER_TURN"
});

export const increaseBet = amount => ({
  type: "INCREASE_BET",
  amount
});

export const decreaseBet = amount => ({
  type: "DECREASE_BET",
  amount
});

export const allIn = () => ({
  type: "ALL_IN"
});

export const clearBet = () => ({
  type: "CLEAR_BET"
});
