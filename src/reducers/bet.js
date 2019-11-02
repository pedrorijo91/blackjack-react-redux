const bet = (state = 0, action) => {
  switch (action.type) {
    case "INCREASE_BET":
      return state + action.amount;
    case "DECREASE_BET":
      return state - action.amount;
    default:
      return state;
  }
};

export default bet;
