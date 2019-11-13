import { CARD_SUITS, CARD_RANKS } from "../components/cards/Card";
import { handScore } from "../components/game/Game";

const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

const initialDeck = () => {
  const nestedDeck = CARD_RANKS.map(r =>
    CARD_SUITS.map(s => ({ rank: r, suit: s }))
  );
  const flatDeck = [].concat(...nestedDeck); // TODO replace by Array.flat() when released

  return shuffle(flatDeck);
};

const processDealerTurn = (playerHand, dealerHand, deck) => {
  const playerScore = handScore(playerHand);
  const dealerScore = handScore(dealerHand);

  if (dealerScore < 17 && dealerScore < playerScore) {
    const newDealerHand = [...dealerHand, deck[0]];
    const newDeck = deck.slice(1);
    return processDealerTurn(playerHand, newDealerHand, newDeck);
  } else {
    return {
      playerHand,
      dealerHand,
      deck,
      playerFinished: true
    };
  }
};

const game = (
  state = {
    playerHand: [],
    dealerHand: [],
    deck: initialDeck(),
    playerFinished: false
  },
  action
) => {
  switch (action.type) {
    case "START_GAME":
      return {
        playerHand: [state.deck[0], state.deck[1]],
        dealerHand: [state.deck[2], state.deck[3]], // FIXME hide 1 card
        deck: state.deck.slice(4),
        playerFinished: false
      };
    case "ADD_PLAYER_CARD":
      return {
        playerHand: [...state.playerHand, state.deck[0]],
        dealerHand: state.dealerHand,
        deck: state.deck.slice(1),
        playerFinished: false
      };
    case "DEALER_TURN":
      return processDealerTurn(state.playerHand, state.dealerHand, state.deck);
    default:
      return state;
  }
};

export default game;
