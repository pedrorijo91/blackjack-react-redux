import React from "react";
import PropTypes from "prop-types";

const Bet = ({ value }) => (
  <div>
    <div> Bet: {value} $</div>
    <div>
      Manage bet:
      <ul>
        <li>Increase (10$)</li>
        <li>Decrease (10$)</li>
      </ul>
    </div>
  </div>
);

Bet.propTypes = {
  value: PropTypes.number.isRequired
};

export default Bet;
