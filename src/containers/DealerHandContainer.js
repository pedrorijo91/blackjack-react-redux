import { connect } from "react-redux";
import DealerHand from "../components/cards/DealerHand";

const mapStateToProps = state => ({
  cards: state.game.dealerHand,
  playerFinished: state.game.playerFinished
});

export default connect(mapStateToProps)(DealerHand);
