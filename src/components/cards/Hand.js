import React from "react";
import PropTypes from "prop-types";

import Card from "./Card";
import Score from "./Score";

const filterCards = (cards, hideLastCard) => {
  if(hideLastCard && cards.length >= 2) {
    return {
      visibleCards: cards.slice(0, -1),
      hiddenCards: cards.slice(-1)
    }
  } else {
    return {
      visibleCards: cards,
      hiddenCards: []
    }
  }
} 

const Hand = ({ cards, hideLastCard }) => {
  
  const {visibleCards, hiddenCards} = filterCards(cards, hideLastCard);
  
  return (
  <span>
    {visibleCards.map(card => (
      <Card key={card.suit.concat(card.rank)} suit={card.suit} rank={card.rank} />
    ))}
    {hiddenCards.map(card => (
      <Card key={card.suit.concat(card.rank)} suit={card.suit} rank={card.rank} hide={true} />
    ))}
    <Score cards={visibleCards} />
  </span>
)
};

Hand.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      suit: PropTypes.string,
      rank: PropTypes.string
    })
  ).isRequired,
  hideLastCard: PropTypes.bool
};

Hand.defaultProps = {
  hideLastCard: false
}

export default Hand;
