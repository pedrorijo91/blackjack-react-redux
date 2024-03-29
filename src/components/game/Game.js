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
  return state.playerHand.length > 0;
};

const isGameOver = state => {
  return gameResult(state) !== GAME_RESULT.UNFINISHED;
};

export const gameResult = state => {
  const playerScore = handScore(state.playerHand);

  if (playerScore > 21) {
    return GAME_RESULT.DEALER;
  }

  if (!state.playerFinished) {
    return GAME_RESULT.UNFINISHED;
  }

  const dealerScore = handScore(state.dealerHand);

  if (playerScore > dealerScore || dealerScore > 21) {
    return GAME_RESULT.PLAYER;
  }

  if (dealerScore > playerScore) {
    return GAME_RESULT.DEALER;
  }

  return GAME_RESULT.TIE;
};

export const isStartGameEnabled = state => {
  return !hasGameStarted(state) && state.bet > 0;
};

export const isHitEnabled = state => {
  return (
    hasGameStarted(state) && !isGameOver(state) && state.dealerHand.length === 2
  );
};

export const isStandEnabled = state => {
  return hasGameStarted(state) && !isGameOver(state);
};

export const isNewRoundEnabled = state => {
  return isGameOver(state);
};

export const GAME_RESULT = {
  PLAYER: "PLAYER",
  DEALER: "DEALER",
  TIE: "TIE",
  UNFINISHED: "UNFINISHED"
};
