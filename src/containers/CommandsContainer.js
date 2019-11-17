import { connect } from "react-redux";
import Commands from "../components/commands/Commands";
import { addPlayerCard, startGame, dealerTurn, newRound } from "../actions";
import {
  isStartGameEnabled,
  isHitEnabled,
  isStandEnabled,
  isNewRoundEnabled
} from "../components/game/Game";

const mapStateToProps = state => ({
  isStartGameEnabled: isStartGameEnabled(state),
  isHitEnabled: isHitEnabled(state),
  isStandEnabled: isStandEnabled(state),
  isNewRoundEnabled: isNewRoundEnabled(state)
});

const mapDispatchToProps = dispatch => ({
  addPlayerCard: () => dispatch(addPlayerCard()),
  startGame: () => dispatch(startGame()),
  dealerTurn: () => dispatch(dealerTurn()),
  newRound: () => dispatch(newRound())
});

export default connect(mapStateToProps, mapDispatchToProps)(Commands);
