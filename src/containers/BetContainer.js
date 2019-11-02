import { connect } from "react-redux";
import Bet from "../components/account/Bet";
import { increaseBet, decreaseBet } from "../actions";

const mapStateToProps = state => ({
  amount: state.bet
});

const mapDispatchToProps = dispatch => ({
    increaseBet: () => dispatch(increaseBet(10)),
    decreaseBet: () => dispatch(decreaseBet(10))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bet);
