import React from "react";
import PropTypes from "prop-types";

const Info = ({waitingForBet, winner}) => (
  <div style={{fontWeight: "bold"}}>
    {waitingForBet && "Please place your bet and click 'Start Game' to start the round" }
    {winner === 'DEALER' && "Game over. Click 'Start Game' to start the round" }
    {winner === 'PLAYER' && "You won. Click 'Start Game' to start the round" }
    {winner === 'TIE' && "It's a tie! Click 'Start Game' to start the round" }
  </div>
);

Info.propTypes = {
  waitingForBet: PropTypes.bool.isRequired,
  winner: PropTypes.string
};

export default Info;
