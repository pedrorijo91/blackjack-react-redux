import React from "react";
import PropTypes from "prop-types";
import { GAME_RESULT } from "./Game"

const Info = ({ waitingForBet, winner }) => (
  <div style={{ fontWeight: "bold" }}>
    {waitingForBet &&
      "Please place your bet and click 'Start Game' to start the round"}
    {winner === GAME_RESULT.DEALER && "Game over. Click 'Start Game' to start the round"}
    {winner === GAME_RESULT.PLAYER && "You won. Click 'Start Game' to start the round"}
    {winner === GAME_RESULT.TIE && "It's a tie! Click 'Start Game' to start the round"}
  </div>
);

Info.propTypes = {
  waitingForBet: PropTypes.bool.isRequired,
  winner: PropTypes.string
};

export default Info;
