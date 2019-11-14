import { connect } from "react-redux";
import { winner } from "../components/game/Game"
import Info from "../components/game/Info";

const mapStateToProps = state => ({
  waitingForBet: state.game.playerHand.length === 0,
  winner: winner(state)
});

export default connect(mapStateToProps)(Info);
