const account = (state = { wallet: 1000, bet: 0 }, action) => {
  switch (action.type) {
    case "INCREASE_BET":
      return {
        wallet: state.wallet - action.amount,
        bet: state.bet + action.amount
      };
    case "DECREASE_BET":
      return {
        wallet: state.wallet + action.amount,
        bet: state.bet - action.amount
      };
    case "ALL_IN":
      return {
        wallet: 0,
        bet: state.bet + state.wallet
      };
    case "CLEAR_BET":
      return {
        wallet: state.bet + state.wallet,
        bet: 0
      };
    default:
      return state;
  }
};

export default account;
