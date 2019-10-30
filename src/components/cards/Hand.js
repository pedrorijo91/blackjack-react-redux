import React from "react";
import PropTypes from "prop-types";

import Card from "./Card";
import Score from "./Score";

const Hand = ({ cards }) => (
  <div>
    {cards.map(card => (
      <Card suit={card.suit} rank={card.rank} />
    ))}
    <Score cards={cards} />
  </div>
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
