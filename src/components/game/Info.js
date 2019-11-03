import React from "react";
import PropTypes from "prop-types";

const Info = ({waitingForBet}) => (
  <div style={{fontWeight: "bold"}}>{waitingForBet ? "Please place your bet and click 'Start Game' to start the round" : ''} </div>
);

Info.propTypes = {
    waitingForBet: PropTypes.bool.isRequired,
};

export default Info;
