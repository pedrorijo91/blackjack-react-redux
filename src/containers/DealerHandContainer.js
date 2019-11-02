import { connect } from "react-redux";
import DealerHand from "../components/cards/DealerHand";

const mapStateToProps = state => ({
  cards: state.dealerHand
});

export default connect(mapStateToProps)(DealerHand);
