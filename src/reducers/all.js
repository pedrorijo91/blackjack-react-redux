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

const all = (
  state = {
    playerHand: [],
    dealerHand: [],
    deck: initialDeck(),
    playerFinished: false,
    wallet: 1000,
    bet: 0
  },
  action
) => {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        playerHand: [state.deck[0], state.deck[1]],
        dealerHand: [state.deck[2], state.deck[3]],
        deck: state.deck.slice(4),
        playerFinished: false
      };
    case "ADD_PLAYER_CARD":
      return {
        ...state,
        playerHand: [...state.playerHand, state.deck[0]],
        dealerHand: state.dealerHand,
        deck: state.deck.slice(1),
        playerFinished: false
      };
    case "DEALER_TURN":
        const hands = processDealerTurn(state.playerHand, state.dealerHand, state.deck);
        return {
            ...state,
            ...hands
        }
    case "INCREASE_BET":
      return {
        ...state,
        wallet: state.wallet - action.amount,
        bet: state.bet + action.amount
      };
    case "DECREASE_BET":
      return {
        ...state,
        wallet: state.wallet + action.amount,
        bet: state.bet - action.amount
      };
    case "ALL_IN":
      return {
        ...state,
        wallet: 0,
        bet: state.bet + state.wallet
      };
    case "CLEAR_BET":
      return {
        ...state,
        wallet: state.bet + state.wallet,
        bet: 0
      };
    default:
      return state;
  }
};

export default all;