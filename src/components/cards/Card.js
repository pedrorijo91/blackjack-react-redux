import React from "react";
import PropTypes from "prop-types";

export const CARD_SUITS = ['DIAMONDS','HEARTS','CLUBS','SPADES']
export const CARD_RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

const Card = ({ suit, rank }) => (
  <span> | {rank} of {suit} </span>
);

Card.propTypes = {
  suit: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired
};

export default Card;
