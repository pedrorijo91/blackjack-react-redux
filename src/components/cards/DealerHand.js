import React from "react";
import PropTypes from "prop-types";

import Hand from "./Hand";

const DealerHand = ({ cards, playerFinished }) => (
  <div>
    Dealer hand: <Hand cards={cards} hideLastCard={!playerFinished} />
  </div>
);

DealerHand.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      suit: PropTypes.string,
      rank: PropTypes.string
    })
  ).isRequired,
  playerFinished: PropTypes.bool.isRequired
};

export default DealerHand;
