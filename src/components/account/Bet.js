import React from "react";
import PropTypes from "prop-types";

const Bet = ({ amount, increaseBet, decreaseBet }) => (
  <div>
    <div> Bet: {amount} $</div>
    <div>
      Manage bet:
      <ul>
        <li onClick={increaseBet}>Increase (10$)</li>
        <li onClick={decreaseBet}>Decrease (10$)</li>
      </ul>
    </div>
  </div>
);

Bet.propTypes = {
  amount: PropTypes.number.isRequired,
  increaseBet: PropTypes.func.isRequired,
  decreaseBet: PropTypes.func.isRequired
};

export default Bet;
