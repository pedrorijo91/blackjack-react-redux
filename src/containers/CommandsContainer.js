import { connect } from "react-redux";
import Commands from "../components/commands/Commands";
import { addPlayerCard, startGame, dealerTurn } from "../actions";
import {
  isStartGameEnabled,
  isHitEnabled,
  isStandEnabled
} from "../components/game/Game";

const mapStateToProps = state => ({
  isStartGameEnabled: isStartGameEnabled(state),
  isHitEnabled: isHitEnabled(state),
  isStandEnabled: isStandEnabled(state)
});

const mapDispatchToProps = dispatch => ({
  addPlayerCard: () => dispatch(addPlayerCard()),
  startGame: () => dispatch(startGame()),
  dealerTurn: () => dispatch(dealerTurn())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Commands);
