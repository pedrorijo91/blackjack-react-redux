import React from "react";
import PropTypes from "prop-types";

const noOp = () => {
  return; // do nothing
};

const enabledStyle = {
  fontWeight: "bold"
};

const disabledStyle = {
  textDecorationLine: "line-through"
};

const createCommand = (enabled, fn, text) => {
  return (
    <li
      style={enabled ? enabledStyle : disabledStyle}
      onClick={enabled ? fn : noOp}
    >
      {text}
    </li>
  );
};

const Commands = ({ addPlayerCard, startGame, dealerTurn, isStartGameEnabled, isHitEnabled, isStandEnabled }) => (
  <div>
    <div>Commands: </div>
    <ul>
      {createCommand(isStartGameEnabled, startGame, "Start Game")}
      {createCommand(isHitEnabled, addPlayerCard, "Hit")}
      {createCommand(isStandEnabled, dealerTurn, "Stand")}
    </ul>

    <div>Not implemented yet: </div>
    <ul>
      <li style={{ textDecorationLine: "line-through" }}>Double</li>
      <li style={{ textDecorationLine: "line-through" }}>Insurance</li>
      <li style={{ textDecorationLine: "line-through" }}>Split</li>
      <li style={{ textDecorationLine: "line-through" }}>Surrender</li>
    </ul>
  </div>
);

Commands.propTypes = {
  startGame: PropTypes.func.isRequired,
  addPlayerCard: PropTypes.func.isRequired,
  dealerTurn: PropTypes.func.isRequired,
  isStartGameEnabled: PropTypes.bool,
  isHitEnabled: PropTypes.bool,
  isStandEnabled: PropTypes.bool
};

Commands.defaultProps = {
  isStartGameEnabled: false,
  isHitEnabled: false,
  isStandEnabled: false
};



export default Commands;
