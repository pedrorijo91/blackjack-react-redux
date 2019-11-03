import { connect } from "react-redux";
import Commands from "../components/commands/Commands";
import { addPlayerCard, startGame, dealerTurn } from "../actions";

const hasGameStarted = (state) => {
  return state.game.playerHand.length > 0
}

const isGameOver = (state) => {
  return false; // FIXME 1 of 2 hands is busted OR dealer > player (and player click stand (card shown?))
}

const isStartGameEnabled = (state) => {
  return !hasGameStarted(state) && state.account.bet > 0
}

const isHitEnabled = (state) => {
  return hasGameStarted(state) && !isGameOver(state) && state.game.dealerHand.length === 2
}

const isStandEnabled = (state) => {
  return hasGameStarted(state) && !isGameOver(state)
}

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
