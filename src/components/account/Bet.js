import React from "react";
import PropTypes from "prop-types";

const createCommand = (enabled, fn, text) => {
  return (
    <button disabled={!enabled} onClick={fn}>
      {text}
    </button>
  );
};

const Bet = ({ amount, increaseBet, decreaseBet, allIn, clearBet, wallet, gameStarted }) => (
  <div>
    <div>
      Bet: <strong>{amount}</strong>$
    </div>
    <div>
      <span>Manage bet: </span>
        {createCommand(!gameStarted && amount > 0, clearBet, "Clear Bet")}
        {createCommand(!gameStarted && amount >= 10, decreaseBet, "Decrease (10$)")}
        {createCommand(!gameStarted && wallet >= 10, increaseBet, "Increase (10$)")}
        {createCommand(!gameStarted && wallet > 0, allIn, "All In")}
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
