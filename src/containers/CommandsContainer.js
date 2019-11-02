import { connect } from "react-redux";
import Commands from "../components/commands/Commands";
import { addPlayerCard } from "../actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addPlayerCard: () => dispatch(addPlayerCard())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Commands);
