import React from "react";
import PropTypes from "prop-types";

const Info = ({waitingForBet, playerWon, dealerWon}) => (
  <div style={{fontWeight: "bold"}}>
    {waitingForBet && "Please place your bet and click 'Start Game' to start the round" }
    {dealerWon && "Game over. Click 'Start Game' to start the round" }
    {playerWon && "You won. Click 'Start Game' to start the round" }
  </div>
);

Info.propTypes = {
  waitingForBet: PropTypes.bool.isRequired,
  playerWon: PropTypes.bool.isRequired,
  dealerWon: PropTypes.bool.isRequired,
};

export default Info;
