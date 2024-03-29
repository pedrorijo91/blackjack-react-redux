import React from "react";
import PropTypes from "prop-types";

import { handScore } from "../game/Game";

const Score = ({ cards }) => <div>Score: <strong>{handScore(cards)}</strong></div>;

Score.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      suit: PropTypes.string,
      rank: PropTypes.string
    })
  ).isRequired
};

export default Score;
