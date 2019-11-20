import React from "react";
import PropTypes from "prop-types";

const Wallet = ({ amount }) => (
  <span>
    Account: <strong>{amount}</strong> $
  </span>
);

Wallet.propTypes = {
  amount: PropTypes.number.isRequired
};

export default Wallet;
