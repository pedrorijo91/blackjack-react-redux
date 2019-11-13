import React from "react";
import PropTypes from "prop-types";

const Wallet = ({ amount }) => (
  <div>
    {" "}
    Account: <strong>{amount}</strong> $
  </div>
);

Wallet.propTypes = {
  amount: PropTypes.number.isRequired
};

export default Wallet;
