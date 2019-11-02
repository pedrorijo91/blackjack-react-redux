import { CARD_SUITS } from "../components/cards/Card";

const dealerHand = (state = [], action) => {
  switch (action.type) {
    case "ADD_DEALER_CARD":
      return [
        ...state,
        {
          suit: CARD_SUITS.SPADES,
          rank: "10"
        }
      ];
    default:
      return state;
  }
};

export default dealerHand;
