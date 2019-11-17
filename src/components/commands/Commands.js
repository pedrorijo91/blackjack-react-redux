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

const Commands = ({
  addPlayerCard,
  startGame,
  dealerTurn,
  newRound,
  isStartGameEnabled,
  isHitEnabled,
  isStandEnabled,
  isNewRoundEnabled
}) => (
  <div>
    <div>Commands: </div>
    <ul>
      {createCommand(isStartGameEnabled, startGame, "Start Game")}
      {createCommand(isHitEnabled, addPlayerCard, "Hit")}
      {createCommand(isStandEnabled, dealerTurn, "Stand")}
      {createCommand(isNewRoundEnabled, newRound, "New Round")}
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
  newRound: PropTypes.func.isRequired,
  isStartGameEnabled: PropTypes.bool,
  isHitEnabled: PropTypes.bool,
  isStandEnabled: PropTypes.bool,
  isNewRoundEnabled: PropTypes.bool
};

Commands.defaultProps = {
  isStartGameEnabled: false,
  isHitEnabled: false,
  isStandEnabled: false,
  isNewRoundEnabled: false
};

export default Commands;
