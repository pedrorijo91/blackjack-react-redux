import React from "react";
import PropTypes from "prop-types";

export const CARD_SUITS = {
  DIAMONDS: "DIAMONDS",
  HEARTS: "HEARTS",
  CLUBS: "CLUBS",
  SPADES: "SPADES"
};

const Card = ({ suit, rank }) => (
  <span>
    {rank}_{suit}
  </span>
);

Card.propTypes = {
  suit: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired
};

export default Card;
