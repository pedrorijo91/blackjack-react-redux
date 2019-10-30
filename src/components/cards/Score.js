import React from "react";
import PropTypes from "prop-types";

const handScore = cards => {
  return 10; // FIXME and add UT
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
