import { connect } from "react-redux";
import PlayerHand from "../components/cards/PlayerHand";

const mapStateToProps = state => ({
  cards: state.playerHand
});

export default connect(mapStateToProps)(PlayerHand);
