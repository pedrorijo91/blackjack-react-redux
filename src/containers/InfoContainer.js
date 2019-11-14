import { connect } from "react-redux";
import { gameResult } from "../components/game/Game"
import Info from "../components/game/Info";

const mapStateToProps = state => ({
  waitingForBet: state.game.playerHand.length === 0,
  winner: gameResult(state)
});

export default connect(mapStateToProps)(Info);
