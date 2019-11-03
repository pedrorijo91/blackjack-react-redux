import React from "react";
import PropTypes from "prop-types";

import Hand from "./Hand";

const PlayerHand = ({ cards }) => (
  <div>
    Player hand: <Hand cards={cards} />
  </div>
);

PlayerHand.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      suit: PropTypes.string,
      rank: PropTypes.string
    })
  ).isRequired
};

export default PlayerHand;
