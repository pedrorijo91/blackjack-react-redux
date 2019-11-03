import React from "react";
import PropTypes from "prop-types";

// FIXME extract to common file
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

const Bet = ({ amount, increaseBet, decreaseBet, allIn, clearBet, wallet, gameStarted }) => (
  <div>
    <div>
      Bet: <strong>{amount}</strong>$
    </div>
    <div>
      Manage bet:
      <ul>
        {createCommand(!gameStarted && wallet >= 10, increaseBet, "Increase (10$)")}
        {createCommand(!gameStarted && amount >= 10, decreaseBet, "Decrease (10$)")}
        {createCommand(!gameStarted && wallet > 0, allIn, "All In")}
        {createCommand(!gameStarted && amount > 0, clearBet, "Clear Bet")}
      </ul>
    </div>
  </div>
);

Bet.propTypes = {
  amount: PropTypes.number.isRequired,
  increaseBet: PropTypes.func.isRequired,
  decreaseBet: PropTypes.func.isRequired,
  allIn: PropTypes.func.isRequired,
  clearBet: PropTypes.func.isRequired,
  wallet: PropTypes.number.isRequired,
  gameStarted: PropTypes.bool
};

Bet.defaultProps = {
  gameStarted: false
};

export default Bet;
