import React from "react";
import PropTypes from "prop-types";

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

const Score = ({ cards }) => <span>Score: {handScore(cards)}</span>;

Score.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      suit: PropTypes.string,
      rank: PropTypes.string
    })
  ).isRequired
};

export default Score;
