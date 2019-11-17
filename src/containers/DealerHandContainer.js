import { connect } from "react-redux";
import DealerHand from "../components/cards/DealerHand";
import { gameResult, GAME_RESULT } from "../components/game/Game";

const mapStateToProps = state => ({
  cards: state.dealerHand,
  hideCard: gameResult(state) === GAME_RESULT.UNFINISHED
});

export default connect(mapStateToProps)(DealerHand);
