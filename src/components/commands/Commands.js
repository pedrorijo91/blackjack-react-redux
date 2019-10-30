import React from "react";
import PropTypes from "prop-types";

const Commands = () => (
  <div>
    <div>Commands: </div>
    <ul>
      <li>Start Game</li>
      <li>Hit</li>
      <li>Stand</li>

      <li>Double</li>
      <li>Insurance</li>
      <li>Split</li>
      <li>Surrender</li>
    </ul>
  </div>
);

Commands.propTypes = {
  suit: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired
};

export default Commands;
