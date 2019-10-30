import React from "react";
import PropTypes from "prop-types";

const Wallet = ({ value }) => <div> Account: {value} $</div>;

Wallet.propTypes = {
  value: PropTypes.number.isRequired
};

export default Wallet;
