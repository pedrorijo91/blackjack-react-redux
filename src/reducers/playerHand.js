import { CARD_SUITS } from "../components/cards/Card";

const playerHand = (state = [], action) => {
  switch (action.type) {
    case "ADD_PLAYER_CARD":
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

export default playerHand;
