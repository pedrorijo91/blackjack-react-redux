import React from "react";
import PropTypes from "prop-types";

const Commands = ({ addPlayerCard }) => (
  <div>
    <div>Commands: </div>
    <ul>
      <li style={{ textDecorationLine: "line-through" }}>Start Game</li>
      <li style={{ fontWeight: "bold" }} onClick={addPlayerCard}>
        Hit
      </li>
      <li style={{ textDecorationLine: "line-through" }}>Stand</li>

      <li style={{ textDecorationLine: "line-through" }}>Double</li>
      <li style={{ textDecorationLine: "line-through" }}>Insurance</li>
      <li style={{ textDecorationLine: "line-through" }}>Split</li>
      <li style={{ textDecorationLine: "line-through" }}>Surrender</li>
    </ul>
  </div>
);

Commands.propTypes = {
  suit: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  addPlayerCard: PropTypes.func.isRequired
};

export default Commands;
