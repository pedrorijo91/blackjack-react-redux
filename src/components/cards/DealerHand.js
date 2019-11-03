import React from "react";
import PropTypes from "prop-types";

import Hand from "./Hand";

const DealerHand = ({ cards }) => (
  <div>
    Dealer hand: <Hand cards={cards} />
  </div>
);

DealerHand.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      suit: PropTypes.string,
      rank: PropTypes.string
    })
  ).isRequired
};

export default DealerHand;
