import React from "react";
import PropTypes from "prop-types";

import Card from "./Card";
import Score from "./Score";

const Hand = ({ cards }) => (
  <span>
    {cards.map(card => (
      <Card key={card.suit.concat(card.rank)} suit={card.suit} rank={card.rank} />
    ))}
    <Score cards={cards} />
  </span>
);

Hand.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      suit: PropTypes.string,
      rank: PropTypes.string
    })
  ).isRequired
};

export default Hand;
