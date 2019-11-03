import { CARD_SUITS, CARD_RANKS } from "../components/cards/Card";

const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

const initialDeck = () => {
  return shuffle(CARD_RANKS.map(r => CARD_SUITS.map(s => ({rank: r, suit: s}))).flat());
}

const game = (
  state = { playerHand: [], dealerHand: [], deck: initialDeck() },
  action
) => {
  switch (action.type) {
    case "START_GAME":
      return {
        playerHand: [state.deck[0], state.deck[1]],
        dealerHand: [state.deck[2], state.deck[3]], // FIXME hide 1 card
        deck: state.deck.slice(4)
      };
    case "ADD_PLAYER_CARD":
      return {
        playerHand: [...state.playerHand, state.deck[0]],
        dealerHand: state.dealerHand,
        deck: state.deck.slice(1)
      };
    case "DEALER_TURN":
      return {
        playerHand: state.playerHand,
        dealerHand: [...state.dealerHand, state.deck[0]], // FIXME fetch cards until win / bust
        deck: state.deck.slice(1)
      };
    default:
      return state;
  }
};

export default game;
