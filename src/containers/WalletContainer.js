import { connect } from "react-redux";
import Wallet from "../components/account/Wallet";
import { increaseBet, decreaseBet } from "../actions";

const mapStateToProps = state => ({
  amount: state.account.wallet
});

const mapDispatchToProps = dispatch => ({
  increaseBet: () => dispatch(increaseBet(10)),
  decreaseBet: () => dispatch(decreaseBet(10))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wallet);
