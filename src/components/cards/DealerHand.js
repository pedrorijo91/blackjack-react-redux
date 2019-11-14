import React from "react";
import PropTypes from "prop-types";

import Hand from "./Hand";

const DealerHand = ({ cards, hideCard }) => (
  <div>
    Dealer hand: <Hand cards={cards} hideLastCard={hideCard} />
  </div>
);

DealerHand.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      suit: PropTypes.string,
      rank: PropTypes.string
    })
  ).isRequired,
  hideCard: PropTypes.bool.isRequired
};

export default DealerHand;
