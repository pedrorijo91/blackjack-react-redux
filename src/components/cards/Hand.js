import React from "react";
import PropTypes from "prop-types";

import Score from "./Score";
import PlayingHand from "../react-playing-cards/PlayingCard/Hand/PlayingHand";

const filterCards = (cards, hideLastCard) => {
  let visibleCards;
  let hiddenCards;

  if (hideLastCard && cards.length >= 2) {
    visibleCards = cards.slice(0, -1);
    hiddenCards = cards.slice(-1);
  } else {
    visibleCards = cards;
    hiddenCards = [];
  }

  visibleCards.forEach(card => (card.hidden = false));
  hiddenCards.forEach(card => (card.hidden = true));

  return {
    visibleCards,
    hiddenCards
  };
};

const handStyle = {
  marginLeft: "200px",
  marginTop: "25px"
};

const Hand = ({ cards, hideLastCard }) => {
  const { visibleCards, hiddenCards } = filterCards(cards, hideLastCard);

  return (
    <>
      <div style={handStyle}>
        <PlayingHand
          layout={"spread"}
          cards={[...visibleCards, ...hiddenCards]}
        />
      </div>
      <Score cards={visibleCards} />
    </>
  );
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
};

export default Hand;
