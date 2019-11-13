import { connect } from "react-redux";
import Info from "../components/game/Info";

const mapStateToProps = state => ({
  waitingForBet: state.game.playerHand.length === 0,
  winner: undefined
});

export default connect(mapStateToProps)(Info);
