import { connect } from "react-redux";
import Bet from "../components/account/Bet";
import { increaseBet, decreaseBet, allIn, clearBet } from "../actions";

const mapStateToProps = state => ({
  amount: state.bet,
  wallet: state.wallet,
  gameStarted: state.playerHand.length > 0
});

const mapDispatchToProps = dispatch => ({
  increaseBet: () => dispatch(increaseBet(10)),
  decreaseBet: () => dispatch(decreaseBet(10)),
  allIn: () => dispatch(allIn()),
  clearBet: () => dispatch(clearBet())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bet);
