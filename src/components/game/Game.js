export const computeBetPayment = (dealerHand, playerHand, bet) => {
  /*
        if dealer score = player score => bet
        if dealer score > player score => 0
        if player has BJ => 2.5 * bet
        else => 2 * bet
    */
};

const cardScore = card => {
  if (["J", "Q", "K"].includes(card.rank)) {
    return 10;
  }

  if (card.rank === "A") {
    return 1;
  }

  return parseInt(card.rank);
};

export const handScore = cards => {
  const nonAcesScore = cards
    .map(card => cardScore(card))
    .reduce((a, b) => a + b, 0);

  const aces = cards.filter(card => card.rank === "A").length;

  if (aces > 0 && nonAcesScore <= 11) {
    return nonAcesScore + 10; // we promote one A to 11
  } else {
    return nonAcesScore;
  }
};

const hasGameStarted = state => {
  return state.game.playerHand.length > 0;
};

const isGameOver = state => {
  return false; // FIXME 1 of 2 hands is busted OR dealer > player (and player click stand (card shown?))
};

export const isStartGameEnabled = state => {
  return !hasGameStarted(state) && state.account.bet > 0;
};

export const isHitEnabled = state => {
  return (
    hasGameStarted(state) &&
    !isGameOver(state) &&
    state.game.dealerHand.length === 2
  );
};

export const isStandEnabled = state => {
  return hasGameStarted(state) && !isGameOver(state);
};
